import '@/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  
  );
}

export default MyApp;
