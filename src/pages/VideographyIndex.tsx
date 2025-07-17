
import { VideographyHero } from "@/components/videography/VideographyHero";
import { VideographyServices } from "@/components/videography/VideographyServices";
import { VideographyContact } from "@/components/videography/VideographyContact";
import { VideographyHeader } from "@/components/videography/VideographyHeader";

const VideographyIndex = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <VideographyHeader />
      <VideographyHero />
      <VideographyServices />
      <VideographyContact />
    </div>
  );
};

export default VideographyIndex;
