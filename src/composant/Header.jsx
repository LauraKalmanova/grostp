import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/categories"><li>Categories</li></Link>
                    <Link to="/ingredients"><li>Ingredients</li></Link>
                    <Link to="/glasses"><li>Glasses</li></Link>
                </ul>
            </nav>
        </header>
    )
};

export default Header;