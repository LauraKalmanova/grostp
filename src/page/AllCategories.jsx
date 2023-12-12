import {useEffect, useState} from 'react';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import {Link} from 'react-router-dom';


const AllCategories = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
            const categoriesResponseData = await categoriesResponse.json();
            setCategories(categoriesResponseData.drinks);
        })(); console.log(categories);
    }, []);

    return (
        <div>
            <Header />
            <h2>All of our categories</h2>
                {categories ? (
                    categories.map((category) => {
                        return (
                            <article>
                                <Link to={`/category/${category.strCategory}`}><h3>{category.strCategory}</h3></Link>
                            </article>
                        )
                    })) : (
                            <p>Categories are loading</p>
                        )}
            <Footer />
        </div>
    )

};

export default AllCategories;