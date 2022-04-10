import './NavBar.css'

const NavBar =()=>{
    return <header className='header'>
        <div className='logo'>
        <a href="#home">RM</a>
        </div>
        <div>
        <nav className='navbar'>
            <a href="#meat">Meat</a>
            <a href="#chiken">Chiken</a>
            <a href="#vegan">Vegan</a>
        </nav>
        </div>
        <div><button className='button'>Login</button></div>
    </header>
};

export default NavBar;