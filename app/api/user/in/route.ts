import { getEmail, getPass } from "@/database/users";
import { saveCookie } from "../cokie";

export async function POST(req: Request) {
   const { email, password } = await req.json();

   if (await getEmail(email)) {
      const result = await getPass(password)
      if (result) {
         await saveCookie({email: result.email, username: result.username, role: result.role})
         return Response.json({ success: true, message: 'Giris ustunlikli' });
      }
      return Response.json({success:false,  message: "Girizilen maglumatlar yalnys" });
   }
   return Response.json({success:false, message: "Girizilen maglumatlar yalnys" });
}
