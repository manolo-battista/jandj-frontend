import Logo from "@/components/common/logo";

interface NavbarGuestProps {}

export default function NavbarGuest(props: NavbarGuestProps) {
  return (
    <nav className="border-b border-gray bg-background-active p-4">
      <div />
      <div className="flex flex-1 justify-center">
        <Logo className="w-44" />
      </div>
      <div />
    </nav>
  );
}
