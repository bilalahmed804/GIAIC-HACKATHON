import Image from "next/image";


export default function Blog(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-[#3A3A3A] text-center font-bold text-3xl mb-5">Our Products</h1>
    <div className="flex flex-wrap -m-4 justify-center">
      
      <div className="p-4 md:w-[285px] relative">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
   
    <Image src={"/Images.png"} width={285} height={301} alt="image" />
    
   
    <div className="absolute top-7 right-8">
      <Image
        src={"/Discount.png"}
        width={50} 
        height={50}
        alt="Top Right Icon"
        className="rounded-full"
      />
    </div>

    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Syltherine
      </h1>
      <p className="leading-relaxed mb-3">Stylish cafe chair</p>
      <div className="flex items-center flex-wrap justify-between">
        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
          Rp 2.500
        </a>
        <span className="text-gray-400 line-through inline-flex items-center leading-none text-sm">
          Rp 3.500.000
        </span>
      </div>
    </div>
  </div>
</div>
      <div className="p-4 md:w-[285px] relative">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
   
    <Image src={"/image 2.png"} width={285} height={301} alt="image" />
    
   
    <div className="absolute inset-0 flex justify-center items-center">
      <Image
        src={"/Button.png"}
        width={200} 
        height={96}
        alt="Top Right Icon"
        
      />
    </div>

    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
       Leviosa
      </h1>
      <p className="leading-relaxed mb-3">
        Stylish cafe chair</p>
      <div className="flex items-center flex-wrap justify-between">
        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
          Rp 2.500
        </a>
        <span className="text-gray-400 line-through inline-flex items-center leading-none text-sm">
          Rp 3.500.000
        </span>
      </div>
    </div>
  </div>
</div>
      <div className="p-4 md:w-[285px] relative">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
   
    <Image src={"/lolito.png"} width={285} height={301} alt="image" />
    
   
    <div className="absolute top-7 right-8">
      <Image
        src={"/Label.png"}
        width={50} 
        height={50}
        alt="Top Right Icon"
        className="rounded-full"
      />
    </div>

    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Lolito
      </h1>
      <p className="leading-relaxed mb-3">
        Luxury big sofo</p>
      <div className="flex items-center flex-wrap justify-between">
        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
          Rp 7.500.0
        </a>
        <span className="text-gray-400 line-through inline-flex items-center leading-none text-sm">
          Rp 14.500.000
        </span>
      </div>
    </div>
  </div>
</div>
      <div className="p-4 md:w-[285px] relative">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
   
    <Image src={"/Respi.png"} width={285} height={301} alt="image" />
    
   
    <div className="absolute top-7 right-8">
      <Image
        src={"/New.png"}
        width={50} 
        height={50}
        alt="Top Right Icon"
        className="rounded-full"
      />
    </div>

    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Respira
      </h1>
      <p className="leading-relaxed mb-3">Stylish cafe chair</p>
      <div className="flex items-center flex-wrap justify-between">
        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
          Rp 500.00
        </a>
      </div>
    </div>
  </div>
</div>
 
    </div>
    <div className="flex flex-wrap -m-4 justify-center">
      
      <div className="p-4 md:w-[285px]">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
   
    <Image src={"/Grifo.png"} width={285} height={301} alt="image" />

    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Grifo
      </h1>
      <p className="leading-relaxed mb-3">
        Night Lamp</p>
      <div className="flex items-center flex-wrap justify-between">
        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
          Rp 1.500.0
        </a>
        <span className="text-gray-400 line-through inline-flex items-center leading-none text-sm">
          Rp 3.500.000
        </span>
      </div>
    </div>
  </div>
</div>
      <div className="p-4 md:w-[285px] relative">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
   
    <Image src={"/Mugg.png"} width={285} height={301} alt="image" />
    
   
    <div className="absolute top-7 right-8">
      <Image
        src={"/New.png"}
        width={50} 
        height={50}
        alt="Top Right Icon"
        className="rounded-full"
      />
    </div>

    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Muggo
      </h1>
      <p className="leading-relaxed mb-3">
        Small mug</p>
      <div className="flex items-center flex-wrap justify-between">
        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
          Rp 150.00
        </a>
      </div>
    </div>
  </div>
</div>
      <div className="p-4 md:w-[285px] relative">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
   
    <Image src={"/pingk.png"} width={285} height={301} alt="image" />
    
   
    <div className="absolute top-7 right-8">
      <Image
        src={"/Label.png"}
        width={50} 
        height={50}
        alt="Top Right Icon"
        className="rounded-full"
      />
    </div>

    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
       Pingky
      </h1>
      <p className="leading-relaxed mb-3">
        Cute bed set</p>
      <div className="flex items-center flex-wrap justify-between">
        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
          Rp 7.000.0
        </a>
        <span className="text-gray-400 line-through inline-flex items-center leading-none text-sm">
          Rp 14.000.000
        </span>
      </div>
    </div>
  </div>
</div>
      <div className="p-4 md:w-[285px] relative">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
   
    <Image src={"/potty.png"} width={285} height={301} alt="image" />
    
   
    <div className="absolute top-7 right-8">
      <Image
        src={"/New.png"}
        width={50} 
        height={50}
        alt="Top Right Icon"
        className="rounded-full"
      />
    </div>

    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Potty
      </h1>
      <p className="leading-relaxed mb-3">
      Minimalist flower pot</p>
      <div className="flex items-center flex-wrap justify-between">
        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
        Rp 500.000
        </a>
      
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="flex justify-center mt-8">
  <button className="flex justify-center border-2 px-10 py-2 border-[#B88E2F] text-[#B88E2F]">
    Show More
  </button>
</div>

  </div>
</section>

    )
}