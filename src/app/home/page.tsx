import Blog from "@/components/Blog";
import Card from "@/components/Card";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Image from "next/image";

export default function Home() {
  
  return (
    <div >
     <Hero/>
     <Card/>
     <Blog/>
     <Rooms/>
     <Gallery/>
     
     
    </div>
  );
}
