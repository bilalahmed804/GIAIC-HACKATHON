import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4">
     
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
    
        <div>
          <h2 className="text-xl font-bold text-black">Funiro.</h2>
          <p className="mt-4 text-gray-600 text-sm">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Newsletter</h3>
          <form className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full"
            />
            <Button className="bg-black text-white">Subscribe</Button>
          </form>
        </div>
      </div>

     
      <div className="mt-6 border-t border-gray-200 pt-4">
        <p className="text-center text-gray-500 text-sm">
        2024 All right resvred
        Built with 💖 by Bilal Ahmed
        </p>
      </div>
    </footer>
  );
}
