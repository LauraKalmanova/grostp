import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


const RandomCategory = () => {

    const [category, setCategory] = useState(null);

    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
            const categoriesResponseData = await categoriesResponse.json();
            const randomCategory = categoriesResponseData.drinks[Math.floor(Math.random()*categoriesResponseData.drinks.length)];
            setCategory(randomCategory);
        })(); 
    }, []);


    return (
        <div className="randomBox">
            <h2>One of our <Link to={`/categories`}>categories</Link> to inspire you</h2>
            {category ? (
                <Link to={`/category/${category.strCategory}`}><h4>{category.strCategory}</h4></Link>
            ) : (
                <p>Loading a random category</p>
            )}
        </div>
    )
};

export default RandomCategory;