import Sidebar from "@/components/layout/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[72px] flex-1 p-6 bg-background-active">
        {children}
      </div>
    </div>
  );
}
