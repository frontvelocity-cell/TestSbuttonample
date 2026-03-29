import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata = {
  title: 'Grey Button App',
  description: 'A Next.js app with grey button component',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light">
        <div className="container-fluid">
          {children}
        </div>
      </body>
    </html>
  )
}