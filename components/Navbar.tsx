import Link from "next/link";
import Button from "./Button";
import About from "@/app/about/page";


export default function Navebar() {
    return(
        <div className="bg-gradient-to-b from-blue-600 to-green-500 px-5">
        <div className="flex py-2 justify-between w-full">
            {/* Logo */}
            <div className="flex items-center">
                <h1 className="font-bold text-slate-100 sm:text-2xl italic">Nasir Brothers</h1>
            </div>
            {/* Link */}
            <div className="space-x-2">
            <Link href={"/"}>
                <Button />
                </Link> 
                <Link href={"about"}>
                <Button props="About"/>
                </Link> 
                <Link href={"contact"}>
                <Button props="Contact" />
                </Link>    
            </div>
        </div>
        
        </div>
    )
}