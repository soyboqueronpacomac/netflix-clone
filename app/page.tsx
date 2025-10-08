import { Navbar } from "@/components/Shared";
import { SliderVideo } from "@/app/(routes)/home/components";

export default function PageHome() {
  return (
    <div className="relative bg-zinc-900">
      <Navbar />
      <SliderVideo />
      
    </div>
  );
}