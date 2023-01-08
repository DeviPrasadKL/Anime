import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function AddAnime() {

    let h = useHistory();

    const [title, settitle] = useState("");
    const [duration, setduration] = useState("");
    const [episodes, setepisodes] = useState("");
    const [year, setyear] = useState("");
    const [score, setscore] = useState("");
    const [url, seturl] = useState("");

    let handleAddAnime = (e) => {
        e.preventDefault();
        let newAnime = { title, duration, episodes, year, score, url }

        fetch("https://api.jikan.moe/v4/anime", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAnime)
        })
            .then(() => {
                alert("new movie succesfully added")
                h.push("/")
            })
    }

    return (
        <div className="AddOuter">
            <div className="Add-Anime">
                <div className="AddAnime-h1">
                    <h1>Add New Anime</h1>
                </div>
                <hr />

                <form onSubmit={handleAddAnime}>
                    <label>Anime Name: </label> <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} />
                    <label>Duration: </label> <input type="text" value={duration} onChange={(e)=>{setduration(e.target.value)}} />
                    <label>Episodes: </label> <input type="number" value={episodes} onChange={(e)=>{setepisodes(e.target.value)}} />
                    <label>Year: </label> <input type="number" value={year} onChange={(e)=>{setyear(e.target.value)}} />
                    <label>Score: </label> <input type="number" min="0.1" max="10" step="0.1" value={score} onChange={(e)=>{setscore(e.target.value)}} />
                    <label>Complete Details URL: </label> <input type="url" value={url} onChange={(e)=>{seturl(e.target.value)}} />

                    <input type="submit" value="Add Anime" id="submitbtn" />
                </form>

            </div>
        </div>
    );
}
