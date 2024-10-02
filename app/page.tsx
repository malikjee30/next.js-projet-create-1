import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
return (
  <div className="bg-red-300 h-screen flex justify-center items-center flex-col gap-5">
    <h1 className="sm:text-8xl text-4xl font-bold">Home page</h1>
  <div className="space-x-5">
    <Link href={"/about"}>
      <Button props="About" />
      </Link>

      <Link href={"/contact"}><Button props="Contact" /> </Link>
  </div>
  
  
  </div>
);
}

    
      