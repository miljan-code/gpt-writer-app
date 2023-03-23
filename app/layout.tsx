import { MobileBar, Sidebar } from '@/components';
import { Manrope } from 'next/font/google';
import '@/styles/globals.css';

const manrope = Manrope({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={manrope.className}>
        <div className="relative mx-auto h-[920px] w-full max-w-[1440px] bg-white py-[34px] px-[34px] lg:px-[48px] 2xl:my-6 2xl:overflow-hidden 2xl:rounded-3xl 2xl:shadow-sm">
          <div className="decor" />
          <main className="md:grid-main relative z-10 h-full">
            <Sidebar />
            <MobileBar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
