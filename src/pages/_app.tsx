import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { ControlsProvider } from "../context/ControlsContext";
import { FavoriteProvider } from "../context/FavoriteContext";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <FavoriteProvider>
        <ControlsProvider>
          <Layout>
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
