import { NextResponse, NextRequest } from "next/server";
import { verifyCookie } from "./lib/cokie";

export async function middleware(request: NextRequest) {
   const token = await request.cookies.get("Bearer")?.value;

   if (!token) {
      return Response.redirect(new URL("/sign", request.url));
   }

   try {
      const cokie = await verifyCookie(token)
      if (cokie) return NextResponse.next();
   } catch (error) {
      return Response.redirect(new URL("/sign", request.url));
   }
}

export const config = {
   matcher: ["/dashboard/:path*", "/admin/:path*"], // Protected routes
};
