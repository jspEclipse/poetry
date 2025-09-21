import { Fleur_De_Leah } from "next/font/google";

const fleurDeLeah = Fleur_De_Leah({
  weight: '400', // Or the desired weight if available (e.g., 'regular', '700')
  subsets: ['latin'],
  display: 'swap', // Optional: Optimizes font loading
});

export const metadata = {
  title: "Once Upon a Time",
  description: "Generative poem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-dvh">
      <body
        className={`${fleurDeLeah.className} min-h-dvh w-screen overflow-hidden m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
