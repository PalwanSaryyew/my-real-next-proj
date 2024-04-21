
import type { FC } from "react";
import Stats2 from "@/components/stats/Stats2";
import Stats3 from "@/components/stats/Stats3";
import Stats4 from "@/components/stats/Stats4";
import Stats5 from "@/components/stats/Stats5";
import Stats6 from "@/components/stats/Stats6";
import Stats1 from "@/components/stats/Stats1";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
   return <div className="grid grid-cols-2 gap-8 p-8">
      <Stats1/>
      <Stats2/>
      <Stats3/>
      <Stats4/>
      <Stats5/>
      <Stats6/>
   </div>;
};
export default page;
