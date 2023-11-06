import "@/app/ui/global.css";
import { inter } from "@/app/ui/myFonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
