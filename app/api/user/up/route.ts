import { PrismaClient } from "@prisma/client";
import { saveCookie } from "../../../../lib/cokie";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { username, email, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
         username,
         email,
         password: hashedPassword,
      },
    });

    if (user) await saveCookie(user)

    return Response.json({success: true, message: 'Register ustunlikli', code: 201});

  } catch (error) {
    console.error("Kullanıcıları ulusturma hata:", error);
    return Response.json({
      message: "Yalnyslyk yuze cykdy",
      code: 500,
      success: false,
    });
  }
}
