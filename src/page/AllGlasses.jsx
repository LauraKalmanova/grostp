import {useEffect, useState} from 'react';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import {Link} from 'react-router-dom';

const AllGlasses =() => {
    const [glasses, setGlasses] = useState(null);

    useEffect(() => {
        (async () => {
            const glassesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
            const glassesResponseData = await glassesResponse.json();
            setGlasses(glassesResponseData.drinks);
        })(); 
    }, []);

    return (
        <div>
            <Header />
            <h2>All the types of glasses</h2>
                {glasses ? (
                    glasses.map((glass) => {
                        return (
                            <article>
                                <Link to={`/glass/${glass.strGlass}`}><h3>{glass.strGlass}</h3></Link>
                            </article>
                        )
                    })) : (
                            <p>Ingredients are loading</p>
                        )}
            <Footer />
        </div>
    )
};

export default AllGlasses;
