import type { Metadata } from 'next'
import styles from './main.module.css'
import { initCustomTraceSubscriber } from 'next/dist/build/swc'

export const metadata: Metadata = {
  title: 'Thomas Lower',
  description: 'Portfolio for Thomas Lower',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  var gradients: string = "";
  for (var i = 0; i < Math.floor(Math.random() * 10) + 5; i++)
  {
    gradients += "radial-gradient(circle at " + (Math.floor(Math.random() * 120) - 20).toString() + "% " + (Math.floor(Math.random() * 120) - 20).toString() + "%, rgb(122, 5, 255) 2%, rgba(171, 255, 168, 0) " + (Math.floor(Math.random() * 40) + 10).toString() + "%),"
  }
  gradients = gradients.substring(0, gradients.length - 1)
  return (
    <html lang="en">
      <body className={styles.body} style={{backgroundImage: gradients, backgroundColor: "rgb(168, 255, 201)" }}>
        {children}
      </body>
    </html>
  )
}
