/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface pageProps {
   params: {
      type?: "in" | "up";
   };
}

const page: FC<pageProps> = ({ params }) => {
   const pageType: string  = params.type !== undefined ? params.type[0] : 'in';
   const router = useRouter()

   const handleSubmit = async (event: any) => {
      event.preventDefault();
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
      const username = event.target.elements.username?.value;

      try {
         const response = await fetch("/api/user/"+pageType, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               email,
               password,
               username
            }),
         });

         if (!response.ok) {
            throw new Error("Something went wrong with the API call");
         }

         const data = await response.json();
         if (data.success) {
            router.push('/');
            toast.success(data.message)
         }
         if (!data.success) {
            toast.error(data.message)
         }
      } catch (error) {
         console.error("Error:", error);
      }
   };

   return (
      <section className="min-h-screen">
         <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
               <h1 className="text-center text-2xl font-bold text-mine sm:text-3xl">
                  Get started today
               </h1>

               <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati sunt dolores deleniti inventore quaerat mollitia?
               </p>

               <form
                  onSubmit={handleSubmit}
                  className="mb-0 mt-20 space-y-4 rounded-lg p-4 border shadow-lg dark:shadow-gray-800 sm:p-6 lg:p-8"
               >
                  <p className="text-center text-lg font-medium">
                     {pageType === "in"
                        ? "Sign in to your account"
                        : "Create an account"}
                  </p>

                  {pageType !== "in" ?  (
                     <div>
                        <label htmlFor="email" className="sr-only">
                           Email
                        </label>

                        <div className="relative">
                           <input
                              type="text"
                              name="username"
                              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              placeholder="Enter username"
                           />

                           <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="size-4 text-gray-400"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                 />
                              </svg>
                           </span>
                        </div>
                     </div>
                  ) : null}

                  <div>
                     <label htmlFor="email" className="sr-only">
                        Email
                     </label>

                     <div className="relative">
                        <input
                           type="email"
                           name="email"
                           className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                           placeholder="Enter email"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                           </svg>
                        </span>
                     </div>
                  </div>

                  <div>
                     <label htmlFor="password" className="sr-only">
                        Password
                     </label>

                     <div className="relative">
                        <input
                           type="password"
                           name="password"
                           className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                           placeholder="Enter password"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                           </svg>
                        </span>
                     </div>
                  </div>

                  <button
                     type="submit"
                     className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
                  >
                     {pageType === "in" ? "Sing in" : "Sign up"}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                     {pageType === "in" ? "No account? " : "Have account? "}
                     <a className="underline" href="#">
                        {pageType === "in" ? "Sign up" : "Sign in "}
                     </a>
                  </p>
               </form>
            </div>
         </div>
      </section>
   );
};
export default page;
