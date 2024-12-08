import { Button } from "./ui/button";

export default function Hero (){
    return(
        <section className="relative w-full h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/scandinavian-interior-mockup-wall-decal-background 1.jpg')" }}>
      
      <div className="absolute top-[20%] md:top-[45%]  lg:left-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg p-6 bg-opacity-90 bg-[#FFF3E3] rounded-lg shadow-lg text-center">
        <h1 className="text-xl font-bold text-[#333333] mb-2">
          New Arrvial
        </h1>
        <h1 className="text-[#B88E2F] text-3xl md:text-4xl font-bold mb-4">Discover Our <br/> New Collection</h1>
        <p className="text-sm md:text-base text-[#333333] mb-6"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <Button className="bg-[#B88E2F] hover:bg-[#e9c87c] hover:text-black text-white px-6 py-2 rounded-md">BUY NOW</Button>
      </div>
    </section>
    )
}