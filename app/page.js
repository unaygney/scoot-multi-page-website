import HomeContainer from "@/containers/home-container";

export const metadata = {
  title: "Scoot | Homepage",
  description:
    "Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!",
};

export default function Home() {
  return <HomeContainer />;
}
