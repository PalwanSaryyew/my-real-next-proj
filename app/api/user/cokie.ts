import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export const saveCookie = async (payload: object) => {
   const encryptedCookie = await jwt.sign(payload, '1234');;
   const cookie = cookies().set("Authorization", encryptedCookie, {
      httpOnly: true, // Prevent client-side script access for security
      maxAge: 60 * 60 * 24, // Expires in 24 hours
      secure: process.env.NODE_ENV === "production", // Set secure flag only in production
   });
};
