import '../../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ControlsProvider } from '../context/ControlsContext';
import { RenderProvider } from '../context/RenderContext';
import { FavoriteProvider } from '../context/FavoriteContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoriteProvider>
      <ControlsProvider>
        <Component {...pageProps} />
      </ControlsProvider>
    </FavoriteProvider>
  );
}

export default MyApp;
