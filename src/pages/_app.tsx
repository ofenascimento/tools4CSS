import '../../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ControlsProvider } from '../context/ControlsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ControlsProvider>
      <Component {...pageProps} />
    </ControlsProvider>
  );
}

export default MyApp;
