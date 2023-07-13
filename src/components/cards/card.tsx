import React from "react";
import "./card.css"

type CardProps = {
    title: string;
    album: string;
    description: string;
    cover: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, album, description, cover, link }) => {
    return (
        <div className="card">
            <img src={cover} alt={title}/>
            <div className="desc">
                <h3>{title}</h3>
                <p>Album: {album}</p>
                <p>{description}</p>
                <a href={link}>View Lyrics</a>
            </div>
        </div>
    );
}

export default Card;