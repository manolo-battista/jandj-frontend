import Logo from "@/components/common/logo";

interface NavbarGuestProps {}

export default function NavbarGuest(props: NavbarGuestProps) {
  return (
    <nav className="p-4 bg-background-active border-b border-gray">
      <div />
      <div className="flex flex-1 justify-center">
        <Logo className="w-44" />
      </div>
      <div />
    </nav>
  );
}
