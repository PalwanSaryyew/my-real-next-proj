import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export const saveCookie = async (payload: any) => {
   const encryptedCookie = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("86400 sec from now")
      .sign(key);
   cookies().set("Bearer", encryptedCookie, {
      httpOnly: true, // Prevent client-side script access for security
      maxAge: 60 * 60 * 24, // Expires in 24 hours
      secure: process.env.NODE_ENV === "production", // Set secure flag only in production
   });
};

export const verifyCookie = async (token: string) => {
   const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
   });
   return payload;
};
