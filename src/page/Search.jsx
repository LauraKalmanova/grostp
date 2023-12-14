import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import SearchResults from '../component/SearchResults';

const Search = () => {
    const { query } = useParams();

    const [searchCocktails, setSearchCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const searchResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
                const searchResponseData = await searchResponse.json();

                if (!searchResponse.ok) {
                    throw new Error('Failed to fetch search results');
                }

                setSearchCocktails(searchResponseData.drinks);
            } catch (error) {
                console.error('Error fetching search results:', error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return (
        <div>
            <Header />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <SearchResults searchCocktails={searchCocktails} />
            )}
            <Footer />
        </div>
    );
};

export default Search;
