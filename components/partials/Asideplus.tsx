import type { FC } from "react";

interface AsideplusProps {
   child?: any
}

const Asideplus: FC<AsideplusProps> = ({child}) => {
   return (
      <li>
         <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-accent-foreground hover:bg-accent">
               <span className="text-sm font-medium"> Account </span>

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
                     Details
                  </a>
               </li>

               <li>
                  <a
                     href="#"
                     className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                     Security
                  </a>
               </li>

               <li>
                  <form action="#">
                     <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                     >
                        Logout
                     </button>
                  </form>
               </li>
            </ul>
         </details>
      </li>
   );
};
export default Asideplus;
