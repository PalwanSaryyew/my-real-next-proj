import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyCookie } from "./cokie";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  // Verify credentials && get the user

  const user = { email: formData.get("email"), name: "John" };

  // Create the session
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {  
  // Destroy the session
  cookies().set("Bearer", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("Bearer")?.value;
  if (!session) return;
  return await verifyCookie(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export const handleSubmit = async (data: FormData, pageType: string) => {
  const user = {email: data.get("email"), password: data.get("password"), username: data?.get("username"),}
  try {
     const response = await fetch("http://localhost:3000/api/user/" + pageType , {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
     });

     if (!response.ok) {
        throw new Error("Something went wrong with the API call");
     }

     const data = await response.json();
     return data
  } catch (error) {
     console.error("Error:", error);
  }
};
