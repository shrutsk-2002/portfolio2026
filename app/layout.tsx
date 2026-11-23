import Script from "next/script";

const SITE = "https://www.shruti-kalamdani.com";

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Shruti Kalamdani | Product Design Leader",
  description:
    "Shruti Kalamdani, product design leader. Fintech, streaming and developer tools, with a team that ships.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon-32.png", type: "image/png", sizes: "32x32" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Shruti Kalamdani",
    title: "Shruti Kalamdani | Product Design Leader",
    description:
      "Shruti Kalamdani, product design leader. Fintech, streaming and developer tools, with a team that ships.",
    url: SITE,
    images: [{ url: "/assets/img/og-image.jpg", width: 1200, height: 630, alt: "Shruti Kalamdani, Product Design Leader, Dubai" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/img/og-image.jpg"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "z12ey38hon");`}
        </Script>
      </body>
    </html>
  );
}
