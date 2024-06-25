import Logo from "@/components/common/logo";

export default function Navbar() {
  return (
    <nav className="p-2 bg-background-active border-b border-neutral">
      <div />
      <div className="flex flex-1 justify-center">
        <Logo className="w-44" />
      </div>
      <div />
    </nav>
  );
}
