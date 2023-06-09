import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <head className="w-full h-48 flex justify-between items-center">
          <div>SyncIP</div>
        </head>
        <div className="w-full h-full px-10">
          {children}
        </div>
      </body>
    </html>
  )
}
