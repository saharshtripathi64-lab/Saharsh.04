import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import{SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiPython , SiDocker, SiMongodb, SiAngular} from "react-icons/si";




export default function Skills() {

  const skills =[
    {icon :<FaJava />, name :"Java"},
     {icon :<FaReact />, name :"React"},
      {icon :<SiNextdotjs />, name :"Next.js"},
       {icon :<SiTypescript/>, name :"Typescript"},
        {icon :<SiTailwindcss />, name :"Tailwind CSS"},
         {icon :<SiPython/>, name :"Python"},
          {icon :<SiMongodb />, name :"MongoDB"},
           {icon :<SiAngular/>, name :"Angular"},
          
  ]
  return(
    <section id= "skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-pink-800 text-white overflow-hidden">

    </section>
  )
}