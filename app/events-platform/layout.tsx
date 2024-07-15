import SidebarPlatform from "@/components/layout/platform/sidebar-platform";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SidebarPlatform />
      <div className="min-h-screen ml-[72px] flex-1 bg-background-active">
        {children}
      </div>
    </div>
  );
}
