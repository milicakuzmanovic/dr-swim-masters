import "./globals.css";

export const metadata = {
  title: "DR SWIM Masters",
  description: "Masters swimming community — train, improve, race.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
