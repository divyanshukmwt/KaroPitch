import "./globals.css";

export const metadata = {
  title: "Karo Pitch — Pitch Your Startup to India's Top Investors",
  description:
    "Karo Pitch helps founders from across India present their startups to investors and unlock funding opportunities. Apply today.",
  keywords:
    "startup pitch, Indian investors, funding, KaroStartup, founders, Bharat startups",

  icons: {
    icon: "/Logo.png",
  },

  openGraph: {
    title: "Karo Pitch — India's Premier Startup Pitch Platform",
    description:
      "Connect with top investors. Pitch your startup. Raise funding.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-ink-950 font-body antialiased">
        {children}
      </body>
    </html>
  );
}