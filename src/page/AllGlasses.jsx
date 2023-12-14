import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const AllGlasses = () => {
    const [glasses, setGlasses] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const glassesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");

                if (!glassesResponse.ok) {
                    throw new Error("Failed to fetch glasses");
                }

                const glassesResponseData = await glassesResponse.json();
                setGlasses(glassesResponseData.drinks);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <h2 className="title">All the types of glasses</h2>
            <div className="listBox">
                {glasses ? (
                    glasses.map((glass) => {
                        return (
                            <article>
                                <Link to={`/glass/${glass.strGlass.replace(" ", "_")}`}>
                                    <h3>{glass.strGlass}</h3>
                                </Link>
                            </article>
                        )
                    })) : (
                    <p>Glasses are loading</p>
                )}
            </div>
            <Footer />
        </>
    )
};

export default AllGlasses;
