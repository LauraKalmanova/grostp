import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                </ul>
            </nav>
        </header>
    )
};

export default Header;