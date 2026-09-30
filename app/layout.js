import "./globals.css";

export const metadata = {
  title: "DR SWIM Masters",
  description: "DR SWIM Masters — ozbiljan trening, dobra ekipa i ljubav prema vodi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
