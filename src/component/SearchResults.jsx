import { Link } from "react-router-dom";


const SearchResults = ({ searchCocktails }) => {

    console.log(searchCocktails)

    return (
        <>
            {searchCocktails ? (
                <div className="itemsBox">
                    {searchCocktails.map((cocktail) => {
                        return (
                            <article>
                                <Link to={`/cocktail/details/${cocktail.idDrink}`}>
                                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                </Link>
                                <div className="cocktailDetails">
                                    <h2>{cocktail.strDrink}</h2>
                                    <p>{cocktail.strInstructions}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            ) : (
                <article>
                    <div className="cocktailDetails">
                        <p>No results. Please, rewrite your input.</p>
                    </div>
                </article>
            )}

        </>
    )
};

export default SearchResults;