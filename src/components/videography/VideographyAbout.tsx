
import { Award, Users, Clock, Star } from "lucide-react";

export const VideographyAbout = () => {
  const stats = [
    { icon: Users, number: "400+", label: "Happy Clients" },
    { icon: Award, number: "30+", label: "Awards Won" },
    { icon: Clock, number: "500+", label: "Hours Filmed" },
    { icon: Star, number: "4.5", label: "Average Rating" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At Bm Consaltants, we believe every story deserves to be told with passion and precision. 
              Our team of experienced videographers and creative consultants work closely with you 
              to ensure your vision becomes a stunning reality.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              From corporate promotions to personal celebrations, we bring the same level of 
              dedication and expertise to every project. Let's turn your ideas into stunning 
              visual content that connects, inspires, and delivers results.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
              alt="Professional video equipment setup"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
