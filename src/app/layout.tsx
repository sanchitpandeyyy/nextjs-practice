import "./globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <p className="bg-slate-400 p-[1rem] ">Header</p>
        </header>
        {children}
        <footer>
          <p className="bg-slate-400 p-[1rem]">footer</p>
        </footer>
        </body>
    </html>
  )
}
