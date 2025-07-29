import { BackgroundParticles } from "../components/BackgroundParticles";
import { BlurScreen } from "../components/BlurScreen";
import TitleBanner from "../components/TitleBanner";

export const HomePage = () => {
  return (
    <section>
      <TitleBanner />
      <BackgroundParticles />
      <BlurScreen />
    </section>
  );
};
