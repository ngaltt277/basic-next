import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { RouterPath } from '@/enums/router-path';
import { MainLayout } from '@/components/layouts/main-layout';

export default function App({ Component, pageProps, router }: AppProps) {
  const pathsWithLayout: string[] = [RouterPath.Login, RouterPath.Register];

  if (pathsWithLayout.includes(router.pathname)) {
    return <Component {...pageProps} />;
  }
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
