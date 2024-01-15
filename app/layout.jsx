import { NavBar } from './NavBar';

export const metadata = {
  title: "SarriaDev",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecomerce"
}

export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    )
  }