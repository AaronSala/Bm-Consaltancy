
import { VideographyHero } from "@/components/videography/VideographyHero";
import { VideographyServices } from "@/components/videography/VideographyServices";
import { VideographyAbout } from "@/components/videography/VideographyAbout";
import { VideographyContact } from "@/components/videography/VideographyContact";
import { VideographyHeader } from "@/components/videography/VideographyHeader";
import { VideographyFooter } from "@/components/videography/VideographyFooter";

const VideographyIndex = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <VideographyHeader />
      <VideographyHero />
      <VideographyServices />
      <VideographyAbout />
      <VideographyContact />
      <VideographyFooter />
    </div>
  );
};

export default VideographyIndex;
