import { DefaultTheme, GlobalStyle } from '@/styles/global';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;
