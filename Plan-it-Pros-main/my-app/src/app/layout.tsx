import Navbar from "../components/Navbar";
import "./globals.css";
import Image from "next/image";
import earthBg from "../assets/EarthfromSpace.jpg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col overflow-x-hidden">
        {/* Background Image */}
        <Image
          src={earthBg}
          alt="Earth from Space"
          fill
          priority
          className="object-cover w-full h-full -z-10"
        />

        {/* Main layout: grow children, keep footer at bottom */}
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-grow">{children}</main> {/* Pushes footer down */}
        </div>
      </body>
    </html>
  );
}
