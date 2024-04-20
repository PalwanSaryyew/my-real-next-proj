import type { FC } from "react";
import GetAsidePlus from "../tests/GetAsidePlus";

interface AsideProps {

}

const Aside: FC<AsideProps> = ({}) => {

   
   return (
      <aside className="flex h-screen flex-col justify-between border-e bg-card sticky left-0 top-0 bottom-0">
         <div className="px-4 py-6">
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-primary text-xs text-primary-foreground">
               Logo
            </span>

            <ul className="mt-6 space-y-1">
               <li>
                  <a
                     href="#"
                     className="block border rounded-lg bg-muted text-muted-foreground px-4 py-2 text-sm font-medium"
                  >
                     General
                  </a>
               </li>

               <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                     <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-accent-foreground hover:bg-accent">
                        <span className="text-sm font-medium"> Teams </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </span>
                     </summary>

                     <ul className="mt-2 space-y-1 px-4">
                        <li>
                           <a
                              href="#"
                              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                           >
                              Banned Users
                           </a>
                        </li>

                        <li>
                           <a
                              href="#"
                              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                           >
                              Calendar
                           </a>
                        </li>
                     </ul>
                  </details>
               </li>

               <li>
                  <a
                     href="#"
                     className="block rounded-lg px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent"
                  >
                     Billing
                  </a>
               </li>

               <li>
                  <a
                     href="#"
                     className="block rounded-lg px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent"
                  >
                     Invoices
                  </a>
               </li>

               <GetAsidePlus/>
            </ul>
         </div>

         <div className="sticky inset-x-0 bottom-0 border-t">
            <a
               href="#"
               className="flex items-center gap-2 bg-secondary p-4 hover:bg-card"
            >
               <img
                  alt=""
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="size-10 rounded-full object-cover"
               />

               <div>
                  <p className="text-xs">
                     <strong className="block font-medium">
                        Eric Frusciante
                     </strong>

                     <span> eric@frusciante.com </span>
                  </p>
               </div>
            </a>
         </div>
      </aside>
   );
};
export default Aside;
