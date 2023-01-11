import React from 'react';
import { Link } from 'react-router-dom';

export default function AnimeList({ apiData }) {

    return (

        <div className="CardOuter">
            {
                apiData.map((data, index) => {
                    return (
                        <div className="Card">
                            
                            <Link to={`/AnimeDetails${data.mal_id}`}>
                                <img src={apiData[index].images.jpg.image_url} alt="poster" />
                            </Link>

                            <h1 className="CardContent"><label>Name:-</label> {apiData[index].title}</h1>
                            <h2 className="CardContent"><label>Duration:-</label> {apiData[index].duration}</h2>
                            <h2 className="CardContent"><label>Episodes :-</label> {apiData[index].episodes}</h2>
                            <h3 className="CardContent"><label>Year of release:-</label> {apiData[index].year}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
}
