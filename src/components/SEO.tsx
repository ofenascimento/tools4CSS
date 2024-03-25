import Head from "next/head";
import Script from "next/script";

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
};

export function SEO({ title, description, image, shouldExcludeTitleSuffix = false, shouldIndexPage = true }: SEOProps) {
  function makePageTitle(pageTitle: string, excludeTitleSuffix: boolean) {
    const suffix = excludeTitleSuffix ? "" : " | Tools4CSS";

    return pageTitle + suffix;
  }

  const pageTitle = makePageTitle(title, shouldExcludeTitleSuffix);

  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/${image}` : null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XT9VNYPKE0`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XT9VNYPKE0');
        `}
      </Script>
      <Head>
        <title>{pageTitle}</title>

        {description && <meta name="description" content={description} />}
        {image && <meta name="image" content={pageImage ?? undefined} />}

        {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}
        <meta name="google-site-verification" content="2lY706DMH74WLj3g_B35OkbkFWSh41iWN7DrexrZGDM" />
        <meta name="google-adsense-account" content="ca-pub-2529229033686497"></meta>



        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#ff9d71" />
        <meta name="msapplication-TileColor" content="#ff9d71" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="{process.env.NEXT_PUBLIC_SITE_URL}" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:image" content={pageImage ?? undefined} />
        <meta property="og:image:secure_url" content={pageImage ?? undefined} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={pageImage ?? undefined} />
        <meta name="twitter:image:src" content={pageImage ?? undefined} />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="620" />
      </Head>
    </>
  );
}
