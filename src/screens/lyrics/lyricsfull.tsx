import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLyricsByNameQuery } from "../../generated/graphql";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import NotFound from "../notfound";
import "../site.css";
import { Lyrics } from "../../types/lyrics";
import Loading from "../loading";


const LyricsPage = () => {
    const [lyric, setLyric] = useState<Lyrics>({
        title: "",
        album: "",
        language: "",
        year: "",
        description: "",
        cover: "",
        content: ""
    })

    const { lyricsId } = useParams() as { lyricsId: string };
    const { loading, error, data } = useLyricsByNameQuery({
        variables: {
            name: lyricsId
        }
    });

    useEffect(() => {
        if (data) {
            setLyric({
                title: data.getLyricsByName.title,
                album: data.getLyricsByName.album,
                language: data.getLyricsByName.language,
                year: data.getLyricsByName.year,
                description: data.getLyricsByName.description,
                cover: data.getLyricsByName.cover,
                content: data.getLyricsByName.content
            });
        }
    }, [data]);

    if (error) {
        return <NotFound/>
    }

    if (loading) {
        return <Loading/>
    }

    return (
        <>
        <header className="container black">
            <div className="top">
                <Navbar/>
            </div>
            <div className="card-image half center">
                <img src={lyric.cover} alt={lyric.title}/>
            </div>
            <div className="half center">
                <h1 className="center">{lyric.title}</h1>
                <h5 className="center">Album: {lyric.album}</h5>
                <h5 className="center">In: {lyric.language}</h5>
                <h5 className="center">Year: {lyric.year}</h5>
                {lyric.description.split('\n').map((item, key) => {
                    return <h5 key={key} className="center">{item}<br/></h5>
                })}
            </div>
        </header>
        <div className="light-grey container center">
            <div className="content">
                {lyric.content.split('\n').map((item, key) => {
                    return <p key={key}>{item}<br/></p>
                }
                )}
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default LyricsPage;