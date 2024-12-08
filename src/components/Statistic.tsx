import { AiFillTrophy } from "react-icons/ai";


export default function Statistic(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 ">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
          <AiFillTrophy/>
        </h2>
        <div>

        <p className="leading-relaxed">High Quality</p>
        <p className="leading-relaxed">crafted from top materials</p>
        </div>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
          1.8K
        </h2>
        <p className="leading-relaxed">Warranty Protection</p>
        <p className="leading-relaxed">Over 2 years</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
          35
        </h2>
        <p className="leading-relaxed">Free Shipping</p>
        <p className="leading-relaxed">Order over 150 $</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
          4
        </h2>
        <p className="leading-relaxed">24 / 7 Support</p>
        <p className="leading-relaxed">Dedicated support</p>
      </div>
    </div>
  </div>
</section>

    )
}