import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { ControlsProvider } from "../context/ControlsContext";
import { FavoriteProvider } from "../context/FavoriteContext";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <FavoriteProvider>
        <ControlsProvider>
          <Layout>
            <Head>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2529229033686497"
                crossOrigin="anonymous"
              ></script>
            </Head>
            <AnimatePresence mode="wait">
              <motion.div
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </ControlsProvider>
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default MyApp;
