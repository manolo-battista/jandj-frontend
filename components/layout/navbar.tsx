import Logo from "@/components/common/logo";

export default function Navbar() {
  return (
    <nav className="p-4 bg-background-active border-b">
      <div />
      <div className="flex flex-1 justify-center">
        <Logo className="w-44" />
      </div>
      <div />
    </nav>
  );
}
