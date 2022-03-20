import './style.css'
const Navbar = (props) => {
    return(
        <nav className="navbar">
            <h1 className="logo">Logo</h1>
            <ul className="ul-navbar">  
                <li className="li-navbar">Link 1</li>
                <li className="li-navbar">Link 2</li>
            </ul>
        </nav>
    )
}

export default Navbar