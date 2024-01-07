import { lexendDeca, spaceMono } from "@/lib/font";

export const metadata = {
  title: "Scoot | Homepage",
  description:
    "Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!",
};
export default function Home() {
  return (
    <div>
      <h2 className={`${lexendDeca.className} text-2xl`}>deneme1</h2>
      <h2 className={`${spaceMono.className} text-2xl`}>deneme1</h2>
    </div>
  );
}
