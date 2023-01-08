import React from 'react';
import { Link } from 'react-router-dom';

export default function AnimeList({ apiData }) {

    return (

        <div className="CardOuter">
            {
                apiData.data.map((data, index) => {
                    return (
                        <div className="Card">
                            
                            <Link to={`/AnimeDetails${data.mal_id}`}>
                                <img src={apiData.data[index].images.jpg.image_url} alt="poster" />
                            </Link>

                            <h1 className="CardContent"><label>Name:-</label> {apiData.data[index].title}</h1>
                            <h2 className="CardContent"><label>Duration:-</label> {apiData.data[index].duration}</h2>
                            <h2 className="CardContent"><label>Episodes :-</label> {apiData.data[index].episodes}</h2>
                            <h3 className="CardContent"><label>Year of release:-</label> {apiData.data[index].year}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
}
