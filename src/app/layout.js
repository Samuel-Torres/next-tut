import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';

// components:
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev',
  description: 'Welcome to my site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <NavBar />
              {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
