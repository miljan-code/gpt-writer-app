import { Sidebar } from '@/components';
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
        <div className="relative mx-auto my-6 h-[920px] w-full max-w-[1440px] overflow-hidden rounded-3xl bg-white py-[34px] px-[48px] shadow-sm">
          <div className="decor" />
          <main className="grid-main relative z-10 h-full">
            <Sidebar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
