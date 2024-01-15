import Link from "next/link";

export const metadata = {
  title: "Tienda Oficial"
}

const TiendaLayout = ({ children }) => {
  return (
    <>

        <nav>
            <h3>Seccion Tienda</h3>

            <ul>
                <li>
                  <Link href='/shop/categories'>Categorias</Link>
                </li>
                <li>
                  <Link href='/shop/categories/computer'>Computadoras</Link>
                </li>
            </ul>

        </nav>

        {children}
    </>
  )
}

export default TiendaLayout;