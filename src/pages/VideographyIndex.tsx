
import { VideographyHero } from "@/components/videography/VideographyHero";
import { VideographyServices } from "@/components/videography/VideographyServices";
import { VideographyContact } from "@/components/videography/VideographyContact";
import { VideographyHeader } from "@/components/videography/VideographyHeader";
import { VideographyAbout } from "@/components/videography/VideographyAbout";

const VideographyIndex = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <VideographyHeader />
      <VideographyHero />
      <VideographyServices />
      <VideographyAbout />
      <VideographyContact />
    </div>
  );
};

export default VideographyIndex;
