
import { Camera, Target, MapPin, Scissors, Lightbulb, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const VideographyServices = () => {
  const services = [
    {
      icon: Camera,
      title: "Creative Concept Development",
      description: "Transform your ideas into compelling visual narratives."
    },
    {
      icon: Target,
      title: "Script & Storyboard",
      description: "Detailed planning and visualization for seamless storytelling."
    },
    {
      icon: MapPin,
      title: "On-Site Filming",
      description: "Professional location scouting and filming strategies."
    },
    {
      icon: Scissors,
      title: "Post-Production",
      description: "Expert editing, color grading, and sound design."
    },
    {
      icon: Lightbulb,
      title: "Lighting & Setup",
      description: "Professional equipment and setup guidance."
    },
    {
      icon: Phone,
      title: "Full Consultation",
      description: "End-to-end guidance from concept to delivery."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're launching a product, documenting a wedding, or building your YouTube presence, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section - Simplified */}
        <div className="text-center bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6 text-white">Why Choose CineVision?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We believe every story deserves to be told with passion and precision. Our experienced team works closely with you to turn your vision into stunning visual content that connects, inspires, and delivers results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">50+</div>
              <div className="text-gray-400">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">1000+</div>
              <div className="text-gray-400">Hours Filmed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">5.0</div>
              <div className="text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
