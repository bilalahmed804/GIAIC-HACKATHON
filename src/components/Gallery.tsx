import Image from "next/image";

export default function Gallery() {
  return (
    <section className="p-6 lg:p-12 bg-[#fff]">
      <h2 className="text-center text-2xl lg:text-3xl font-bold text-[#333333] mb-8">
        Share your setup with <br/><span className="text-[#a67a44]">#FuniroFurniture</span>
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Large Image spanning 2 columns */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex">
          <Image
            src={"/Rectangle 36.png"}
            alt="Setup Image 1"
            width={300}
            height={200}
            className="w-[200px] h-[380px] rounded-lg"
          />
          <Image
            src={"/Rectangle 37.png"}
            alt="Setup Image 1"
            width={300}
            height={200}
            className="w-[300px] h-[330px] ml-11 rounded-lg"
          />
        </div>

        {/* Smaller Images */}
        <div>
          <Image
            src={"/Rectangle 45.png"}
            alt="Setup Image 2"
            width={150}
            height={150}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={"/Rectangle 43.png"}
            alt="Setup Image 3"
            width={150}
            height={150}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={"/Rectangle 44.png"}
            alt="Setup Image 4"
            width={150}
            height={150}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <Image
            src={"/Rectangle 41.png"}
            alt="Setup Image 5"
            width={150}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={"/Rectangle 39.png"}
            alt="Setup Image 6"
            width={150}
            height={150}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <Image
            src={"/Rectangle 40.png"}
            alt="Setup Image 7"
            width={150}
            height={150}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
