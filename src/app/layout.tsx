import type { Metadata } from "next";
import "./globals.scss";
import "./design-overrides.css";
import "./icomoon.css";
import "../icons/icons.css";
import NextTopLoader from "nextjs-toploader";
import { buildBaseMetadata, buildLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildBaseMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <body>
        <NextTopLoader />
        <div id="canvas">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
