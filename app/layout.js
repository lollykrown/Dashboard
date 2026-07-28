import { Public_Sans } from 'next/font/google';
import './globals.css';

const public_sans = Public_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Robust Dashboard',
  description: 'A multi-design admin dashboard built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={public_sans.className}>
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
