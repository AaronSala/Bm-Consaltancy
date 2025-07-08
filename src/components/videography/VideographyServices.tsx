
import { Camera, Target, MapPin, Scissors, Lightbulb, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const VideographyServices = () => {
  const services = [
    {
      icon: Camera,
      title: "Creative Concept Development",
      description: "Transform your ideas into compelling visual narratives with our strategic creative process."
    },
    {
      icon: Target,
      title: "Script & Storyboard Consultation",
      description: "Detailed planning and visualization to ensure your story flows seamlessly from start to finish."
    },
    {
      icon: MapPin,
      title: "On-Site Filming Strategies",
      description: "Professional location scouting and filming techniques optimized for your specific environment."
    },
    {
      icon: Scissors,
      title: "Post-Production & Editing",
      description: "Expert editing, color grading, and sound design to bring your vision to life."
    },
    {
      icon: Lightbulb,
      title: "Lighting & Camera Setup",
      description: "Professional equipment selection and setup guidance for optimal visual quality."
    },
    {
      icon: Phone,
      title: "Full Consultation Support",
      description: "End-to-end guidance from initial concept through final delivery and distribution."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're launching a product, documenting a wedding, promoting a business, 
            or building your YouTube presence, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
