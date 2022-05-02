function NavBar() { 
    return (
        <header>
            <nav>
                <p>Mirano-Kids</p>
                <select >
                    <option value="all">Todos</option>
                    <option value="L">Large</option>
                    <option value="M">Medium</option>
                    <option value="S">Small</option>
                </select>
            </nav>
        </header>
    );
}

export default NavBar;
