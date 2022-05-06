import Car from "./carrito/CartWidget";



function NavBar() { 
    return (
        <header>
            <nav className="header-nav"> 
                <p className="titulo-nav">Mirano-Kids</p>
                <select className="talles">
                    <option value="all">Todos</option>
                    <option value="L">Large</option>
                    <option value="M">Medium</option>
                    <option value="S">Small</option>
                </select>
                <Car />
            </nav>
        </header>
    );
}

export default NavBar;
