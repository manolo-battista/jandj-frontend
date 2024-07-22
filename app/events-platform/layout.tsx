import SidebarPlatform from "@/components/layout/platform/sidebar-platform";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="z-50">
        <SidebarPlatform />
      </div>
      <div className="ml-[72px] min-h-screen flex-1 bg-background-active">
        {children}
      </div>
    </div>
  );
}
