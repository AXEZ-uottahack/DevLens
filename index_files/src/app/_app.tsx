import { ColorModeProvider } from "@/components/ui/color-mode";
import { ThemeProvider } from "next-themes";
interface appProps {
  Component: any;
  pageProps: any;
}

// doing what the doc for next-themes is doing, had to go so Arvin take it from here thanks!
// doesn't do anything yet

function MyApp({ Component, pageProps }: appProps) {
  return (
    <ThemeProvider>
      <ColorModeProvider><Component {...pageProps} /></ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
