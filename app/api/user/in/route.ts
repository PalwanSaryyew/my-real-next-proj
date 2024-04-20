import { PrismaClient } from "@prisma/client";
import { saveCookie } from "../../../../lib/cokie";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return Response.json({
        message: "Kullanıcı bulunamadı",
        success: false,
        code: 404,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.json({
        message: "Hatalı parola",
        success: false,
        code: 400,
      });
    }

    return Response.json({
      success: true,
      message: "Giris ustunlikli",
      code: 200,
    });

  } catch (error) {
    console.error("Kullanıcıları getirirken hata:", error);
    return Response.json({
      message: "Internal Server Error",
      code: 500,
      success: false,
    });
  }
}
