import type { Metadata } from 'next'
import styles from './main.module.css'

export const metadata: Metadata = {
  title: 'Thomas Lower',
  description: 'Portfolio for Thomas Lower',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  )
}
