import { BackgroundParticles } from "../components/BackgroundParticles";
import { BlurScreen } from "../components/BlurScreen";
import DownButton from "../components/DownButton";
import TitleBanner from "../components/TitleBanner";

export const HomePage = () => {
  return (
    <section>
      <TitleBanner />
      <DownButton />
      <BackgroundParticles />
      <BlurScreen />
    </section>
  );
};
