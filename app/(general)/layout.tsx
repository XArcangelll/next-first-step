import { NavBar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  
  return (
    <>
    <NavBar />
    {children}
    </>
  );
}