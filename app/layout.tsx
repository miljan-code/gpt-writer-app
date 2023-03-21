import { Header, Sidebar } from '@/components';
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
        <div className="relative mx-auto my-6 w-full max-w-[1440px] overflow-hidden rounded-3xl bg-white py-[34px] px-[38px] shadow-sm">
          <div className="decor" />
          <Header />
          <main className="grid-main relative z-10">
            <Sidebar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
