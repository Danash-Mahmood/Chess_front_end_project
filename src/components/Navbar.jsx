import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/playerstats">Player's Stats</Link></li>
                    <li><Link to = "/playergames">Player's Games</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;