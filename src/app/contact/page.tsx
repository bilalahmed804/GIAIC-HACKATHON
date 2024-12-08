import { Form } from "@/components/Form";
import Statistic from "@/components/Statistic";
import Image from "next/image";
import { AiFillEnvironment, AiFillPhone, AiOutlineDashboard } from "react-icons/ai";

export default function Contact(){
    return(
        <div>

        <div
        className="h-40 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
        >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-20 rounded-t-lg">
            <div>
        <Image
        className="ml-5"
        width={50}
        height={50}
        src={"/Meubel House_Logos-05.jpg"}
        alt="Logo"
        />
          <h1 className="text-4xl text-white font-bold">Shop</h1>
        </div>
        </div>
      </div>
      <div className="text-center m-10">
        <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
        <p>For More Information About Our Product & Services. 
            Please Feel Free To Drop Us An Email.<br/> Our Staff Always 
            Be There To Help You Out. Do Not Hesitate!</p>
      </div>

      <div className="flex items-center justify-center">
      <section className="text-gray-600 body-font md:pr-48">
  <div className="container ">
    <div>
      <div className=" my-4">
        <div className="h-full flex items-start">
          <div className=" flex-shrink-0 flex flex-col text-center leading-none">
           
            <span className="font-medium  text-gray-800 title-font leading-none">
             <AiFillEnvironment/>
            </span>
          </div>
          <div className="flex-grow pl-6">
           
            <h1 className="title-font  font-medium text-gray-900 mb-3">
             Address
            </h1>
            <p className="leading-relaxed">
            236 5th SE Avenue, New York<br/> NY10000, United States
            </p>
          </div>
        </div>
      </div>
      <div className=" my-4">
        <div className="h-full flex items-start">
          <div className=" flex-shrink-0 flex flex-col text-center leading-none">
           
            <span className="font-medium  text-gray-800 title-font leading-none">
              <AiFillPhone/>
            </span>
          </div>
          <div className="flex-grow pl-6">
           
            <h1 className="title-font  font-medium text-gray-900 mb-3">
              Phone
            </h1>
            <p className="leading-relaxed">
            Mobile: +(84) 546-6789<br/>
            Hotline: +(84) 456-6789
            </p>
          </div>
        </div>
      </div>
      <div className=" my-4">
        <div className="h-full flex items-start">
          <div className=" flex-shrink-0 flex flex-col text-center leading-none">
           
            <span className="font-medium  text-gray-800 title-font leading-none">
              <AiOutlineDashboard/>
            </span>
          </div>
          <div className="flex-grow pl-6">
           
            <h1 className="title-font  font-medium text-gray-900 mb-3">
            Working Time
            </h1>
            <p className="leading-relaxed">
            Monday-Friday: 9:00 - 22:00<br/>
            Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
      </div>
     
     
    </div>
  </div>
</section>

        <div>
            <Form/>
        </div>

      </div>
      <Statistic/>
        </div>
    )
}