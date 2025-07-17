import { Camera, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const VideographyFooter = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                CineVision
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting cinematic stories that connect, inspire, and deliver
              results. Your vision, our expertise, unforgettable content.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Wedding Videography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Corporate Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Product Launch
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  YouTube Content
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+254xxxxxxxxx</li>
              <li>hello@bm.com</li>
              <li>Nairobi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BM consoltants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
