import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimeList from './AnimeList';

export default function SearchedAnime() {
    let { searchkey } = useParams();

    let [apiData, setapiData] = useState(null);
    let [pending, setpending] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/anime")
            .then((response) => {
                if (response.ok === false) {
                    throw Error("Searching data not found")
                }
                return response.json()
            })
            .then((datas) => { setapiData(datas); setpending(false) })
            .catch((err) => { setError(err.message) })
    }, [pending]);

    return (
        <>
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"> </div>}
            {apiData && <div className="Home">
                <AnimeList apiData={apiData.data.filter((data, index) => {
                    return (
                        apiData.data[index].title.toUpperCase().includes(searchkey.toUpperCase())
                    )
                })} />
            </div>}
        </>
    );
}
