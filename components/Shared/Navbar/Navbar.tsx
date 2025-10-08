import { NavbarDesktop, NavbarMobile } from "@/components/Shared/Navbar";

export function Navbar() {
  return (
    <nav>
      <div className="hidden mx-auto md:block">
        {/** NavbarDesktop */} 
        <NavbarDesktop />
      </div>
      <div className="mx-auto md:hidden">
        {/** NavbarMobile */}
        <NavbarMobile />
      </div>
    </nav>
  );
}