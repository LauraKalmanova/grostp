import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const AllCocktails = () => {

    const [cocktails, setCocktails] = useState();

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
            const cocktailsResponseData = await cocktailsResponse.json();
            setCocktails(cocktailsResponseData.drinks);
        })();
    }, []);

    return (
        <>
            <Header />
                <div className="cocktailsBox">
                    {cocktails ? (
                        cocktails.map((cocktail) => {
                            return (
                                <article>
                                    <Link to={`/cocktail/details/${cocktail.idDrink}`}><img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} /></Link>
                                    <div className="cocktailDetails">
                                        <h2>{cocktail.strDrink}</h2>
                                        <p>{cocktail.strInstructions}</p>
                                    </div>
                                </article>
                            )
                        })) : (
                                <p>Cocktails are loading</p>
                            )}
                </div>
            <Footer />
        </>
    )

};

export default AllCocktails;