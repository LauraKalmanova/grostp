import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';


const AllCategories = () => {

    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");

                if (!categoriesResponse.ok) {
                    throw new Error("Failed to fetch categories");
                }

                const categoriesResponseData = await categoriesResponse.json();
                setCategories(categoriesResponseData.drinks);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <h2 className="title">All of our categories</h2>
            <div className="listBox">
                {categories ? (
                    categories.map((category) => {
                        return (
                            <article>
                                <Link to={`/category/${category.strCategory.replace(" \/ ", "_")}`}>
                                    <h3>{category.strCategory}</h3>
                                </Link>
                            </article>
                        )
                    })) : (
                    <p>Categories are loading</p>
                )}
            </div>
            <Footer />
        </>
    )

};

export default AllCategories;