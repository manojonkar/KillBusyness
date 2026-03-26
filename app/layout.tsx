import "./globals.css";
export const metadata = {
  title: "Kill Busyness | NFR Leadership",
  description: "Stop the follow-up tax. Move to High-Performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
