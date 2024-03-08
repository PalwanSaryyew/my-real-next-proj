import { getEmail, createUser } from "@/database/users";

export async function POST(req: Request) {
   const { email, password, username } = await req.json();

   const result = await getEmail(email);
   if (result) {
      return Response.json({ message: "ulanyjy bar" });
   } else {
        const user = {
            email,
            password, 
            phone_number: '99365945523',
            username,
        }
        try {
            const result2 = await createUser(user)
            return Response.json({message: 'yeri'})
        } catch (error: any) {
            return Response.json({err: error.message})
        }
        
   }
}
