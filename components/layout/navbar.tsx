import Logo from "@/components/common/logo";

export default function Navbar() {
  return (
    <nav className="p-2 bg-background border-b border-primary">
      <div />
      <div className="flex flex-1 justify-center">
        <Logo className="w-36" />
      </div>
      <div />
    </nav>
  );
}
