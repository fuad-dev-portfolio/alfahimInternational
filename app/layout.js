import "./globals.css";


export const metadata = {
  title: "AL Fahim International",
  description: "A trustworthy and reliable recruitment agency company that provides high-quality products and services to its customers.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
