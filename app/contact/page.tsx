import Button from "@/components/Button";
import Link from "next/link";

export default function Contact(){
return(
    <div className="bg-blue-300 flex justify-center items-center h-screen">
<div className="space-y-7 bg-green-600 p-4 rounded-lg">
<h1 className="text-center text-5xl text-white font-serif">Contact Us</h1>
<form className="flex flex-col gap-5 text-2xl">

    <input type="text" 
    className="p-2 outline-none rounded-md"
    placeholder="Your Name"
    />
    <input type="email" 
    className="p-2 outline-none rounded-md"
    placeholder="Your Email"
    />
    <textarea 
    className="p-2 outline-none rounded-md resize-none"
    placeholder="Your message">
    </textarea>
    <input type="submit" value="Submit"
    className="bg-orange-400 text-yellow-100 cursor-pointer transition-all 
    duration-100 hover:bg-orange-600 py-2 rounded-md" />
</form>
<div>
    <Link href={"/"}>
        <Button/>
        </Link>
</div>

</div>
</div>
)
}