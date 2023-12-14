import { Link } from 'react-router-dom';
import { useState } from "react";

const Header = () => {

    const [message, setMessage] = useState(null)

    const handleChange = event => {
        setMessage(event.target.value);
        console.log(message);
    }

    return (
        <header>
            <nav>
            <img src="https://th.bing.com/th/id/R.c754b4d41b6fe4fb2c6d7229817b8109?rik=AP%2bhB967rbn5oA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-qQicCoVpVN4%2fUDQgU1953_I%2fAAAAAAAAATM%2f3oJ_FvgkdPk%2fs1600%2flarge-final.png&ehk=k2qWu41c7Iv8sPS02N5v%2fmKjQQxbEZgv9%2b4UcgHbCB0%3d&risl=&pid=ImgRaw&r=0" alt="logo" />
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/categories"><li>Categories</li></Link>
                    <Link to="/cocktails"><li>Cocktails</li></Link>
                    <Link to="/ingredients"><li>Ingredients</li></Link>
                    <Link to="/glasses"><li>Glasses</li></Link>
                </ul>
                <form>
                    <input type="text" name="search" onChange={handleChange} />
                    <Link to={"/search/" + message}>
                        <button>Search</button>
                    </Link>
                </form>
            </nav>
        </header>
    )
};

export default Header;