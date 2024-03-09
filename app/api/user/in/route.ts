import { getEmail, getPass } from "@/database/users";
import { saveCookie } from "../cokie";

export async function POST(req: Request) {
   const { email, password } = await req.json();

   if (await getEmail(email)) {
      const result = await getPass(password)
      if (result) {
         await saveCookie({email: result.emaiL, username: result.username})
         return Response.json({ success: true });
      }
      return Response.json({success:false,  message: "Girizilen maglumatlar yalnys" });
   }
   return Response.json({success:false, message: "Girizilen maglumatlar yalnys" });
}
