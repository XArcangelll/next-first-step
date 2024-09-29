import { ActiveLink } from "../active-link/ActiveLink";

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
        <ActiveLink path="/about" text="About" />
        <ActiveLink path="/contact" text="Contact" />
        <ActiveLink path="/pricing" text="Pricing" />
    </nav>
  );
};
