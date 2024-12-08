import Image from "next/image"


export default function Card (){
    return(
        <div className="text-gray-600 body-font">
  <div className="container px-5 pt-24 mx-auto">
        <h1 className="text-[#333333] text-center text-3xl font-bold">Browse The Range </h1>
        <p className="text-[#666666] text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="flex flex-wrap -m-4 justify-center">
      <div className="p-4">
        <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
          src={"/Mask Group.png"}
          width={300}
          height={200}
          alt="image"/>
          <div>
          
            <h1 className="title-font text-lg font-medium text-[#333333] text-center">
              Dining
            </h1>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
          
          src={"/image 100.png"}
          width={300}
          height={200}
          alt="image"/>
          <div className="">
          
            <h1 className="title-font text-lg font-medium text-[#333333] text-center">
              Living
            </h1>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
        
          src={"/image 101.png"}
          width={300}
          height={200}
          alt="image"/>
          <div >
          
            <h1 className="title-font text-lg font-medium text-[#333333] text-center">
              Bedroom
            </h1>
          </div>
        </div>
      </div>
     
    
      </div>
    </div>
  </div>


    )
}