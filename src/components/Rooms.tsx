import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Rooms() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-[#fdf4e3] p-6 lg:p-12 gap-8">

      <div className="max-w-sm text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#333333]">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="mt-4 text-gray-600">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <Button className="mt-6 bg-[#a67a44] text-white hover:bg-[#855f33]">
          Explore More
        </Button>
      </div>

    
      <div className="relative w-full max-w-md lg:max-w-lg">
       
        <Card className="w-full h-[250px] lg:h-[300px] overflow-hidden rounded-lg">
          <Image
            src={"/Rectangle 24.png"}
            alt="Room Inspiration"
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </Card>

      
        <Card className="absolute bottom-4 left-4 bg-white p-4 w-[180px] lg:w-[200px] shadow-md">
          <CardHeader className="text-sm text-gray-500">
            01 → Bed Rooms
          </CardHeader>
          <CardContent className="text-base lg:text-lg font-semibold">
            Inner Peace
          </CardContent>
        </Card>
      </div>

     
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <Image
          src={"/Rectangle 25.png"}
          alt="Room Inspiration"
          width={200}
          height={150}
          className="w-[200px] h-[150px] object-cover rounded-lg"
        />
        <Image
          src={"/Rectangle 26.png"}
          alt="Room Inspiration"
          width={100}
          height={150}
          className="w-[100px] h-[150px] object-center rounded-lg"
        />
      </div>
    </section>
  );
}
