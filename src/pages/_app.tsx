import '../../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ControlsProvider } from '../context/ControlsContext';
import { RenderProvider } from '../context/RenderContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RenderProvider>
      <ControlsProvider>
        <Component {...pageProps} />
      </ControlsProvider>
    </RenderProvider>
  );
}

export default MyApp;
