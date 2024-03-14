import { getEmail, createUser } from "@/database/users";
import { saveCookie } from "../cokie";

export async function POST(req: Request) {
   const { email, password, username } = await req.json();

   if (await getEmail(email)) {
      return Response.json({
         success: false,
         message: "kullanici mevcut",
      });
   }

   const user = {
      email,
      password,
      username,
      role: 'user'
   };

   try {
      await createUser(user);
      const {emaiL, username, role} = await getEmail(email)
      await saveCookie({ email: emaiL, username, role })
      return Response.json({
         success: true,
         message: 'Ustunlkli'
      });
   } catch (error: any) {
      return Response.json({ error: error.message });
   }
}
