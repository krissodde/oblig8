export default function Navigation() {
    return (
        <header>
            <nav>
                <a href="#" id="logo">
                    Logo
                </a>
            <ul>
                <li>
                    <NavLink to="home">Hjem</NavLink>
                </li>
                <li>
                    <NavLink to="produkter">Produkter</NavLink>
                </li>
            </ul>
            </nav>
        </header>
   )
 }