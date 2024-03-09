import { getEmail, createUser } from "@/database/users";
import { saveCookie } from "../cokie";

export async function POST(req: Request) {
   const { email, password, username } = await req.json();

   if (await getEmail(email)) {
      return Response.json({ message: "kullanici mevcut" });
   }

   const user = {
      email,
      password,
      phone_number: "99365945523", 
      username,
   };

   try {
      await createUser(user);
      const {emaiL, username} = await getEmail(email)
      await saveCookie({email: emaiL, username})

      return Response.json({ success: true });
   } catch (error: any) {
      return Response.json({ error: error.message });
   }
}
