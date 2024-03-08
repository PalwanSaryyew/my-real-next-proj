import { getEmail, getPass } from "@/database/users";

export async function POST(req: Request) {
   const { email, password } = await req.json();

   if (await getEmail(email)) {
      const result2 = await getPass(password)
      if (result2) {
         return Response.json({ result2 });
      }
      return Response.json({ message: "Girizilen mahlumatlr yalnys" });
   }
   return Response.json({ message: "Girizilen mahlumatlr yalnys" });
}
