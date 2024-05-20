import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { ControlsProvider } from "../context/ControlsContext";
import { FavoriteProvider } from "../context/FavoriteContext";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <ControlsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ControlsProvider>
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default MyApp;
