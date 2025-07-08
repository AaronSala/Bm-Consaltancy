
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export const VideographyContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Book a free consultation today and discover 
            how our lens can elevate your story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">hello@cinevision.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">Los Angeles, CA</p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-black mb-2">Free Consultation</h4>
                <p className="text-black/80 mb-4">
                  Schedule a 30-minute call to discuss your project and get expert advice.
                </p>
                <Button className="bg-black text-white hover:bg-gray-800 w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Videography</option>
                      <option value="corporate">Corporate Videos</option>
                      <option value="product">Product Launch</option>
                      <option value="youtube">YouTube Content</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md resize-vertical"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
