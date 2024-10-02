
import Button from "@/components/Button";
import Link from "next/link";

export default function About(){
    return (
        <div className="flex justify-center items-center h-screen  bg-blue-400 px-20">


        <div className="lg:space-y-5 space-y-2 bg-blue-200 sm:p-7 pe-3 rounded-lg">
         <h2 className="lg:text-6xl text-2xl text-center font-serif">About US</h2>
         <p className="md:text-2xl text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Architecto nemo natus officia adipisci quod mollitia et illo,
              distinctio molestias cupiditate, quae vitae recusandae perspiciatis incidunt 
              ipsa voluptatum quia assumenda doloremque omnis. 
              Ab esse placeat asperiores repellendus eaque debitis necessitatibus 
              aspernatur tempora ipsa porro consectetur dolorem soluta facere culpa 
              ratione magni reprehenderit expedita ipsum, id saepe illum fugiat? 
              Praesentium quisquam saepe porro adipisci sapiente vitae ut dolorem fugit,
               ea, recusandae at quo tenetur. 
               Debitis molestias modi est quisquam deleniti iure, 
               vel aut repellendus dolore. Officia tempora odio voluptates 
               eum exercitationem quibusdam sed voluptate minus vitae, 
               a quisquam adipisci, incidunt deleniti repudiandae.</p>

          <div>
            <Link href={"/"}>
                 <Button/> 
                 </Link>
          </div>



        </div>
        


        </div>
    )
}