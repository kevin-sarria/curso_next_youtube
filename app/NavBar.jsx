import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav>

        <h2>NavBar</h2>

        <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/about'>About</Link>
        </li>
        </ul>
    </nav>
  )
}
