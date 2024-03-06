import { Head, Html, Main, NextScript } from 'next/document'
import Navbar from 'components/spredo_components/navigation/navbar'
import Footer from 'components/spredo_components/footer'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
// const greycliff = localFont({
//   src: [
//     {
//       path: '../../public/fonts/GreycliffCF-Medium.otf',
//       weight: '400',
//     },
//     {
//       path: '../../public/fonts/GreycliffCF-Bold.otf',
//       weight: '700',
//     },
//   ],
//   variable: '--font-greycliff',
// })

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
