import { useState, useEffect } from "react";
import Card from "../../components/cards/card";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useLyricsQuery } from "../../generated/graphql";
import { LyricsList } from "../../types/lyrics";
import "../site.css";
import "font-awesome/css/font-awesome.min.css";
import Loading from "../loading";

const LyricsMainPage = () => {
    const [lyricsList, setLyricsList] = useState<LyricsList[]>([]);
    
    const { loading, data } = useLyricsQuery();

    useEffect(() => {
        if (data) {
            setLyricsList(data.getLyrics.map(lyric => {
                return {
                    name: lyric.name,
                    title: lyric.title,
                    album: lyric.album,
                    language: lyric.language,
                    year: lyric.year,
                    description: lyric.description,
                    cover: lyric.cover
                }
            }));
        }
    }, [data]);

    if (loading) return <Loading/>;

    return (
        <>
        <header className="container black">
            <div className="top">
                <Navbar/>
            </div>
            <h1 className="center">Lyrics</h1>
        </header>
        <div className="light-grey container center">
            <div className="content">
                {lyricsList.map(lyric => (
                    <div key={lyric.name} className="third container margin-bottom">
                        <Card title={lyric.title} album={lyric.album} description={lyric.description.split('\n')[0]} cover={lyric.cover} link={`/lyrics/${lyric.name}`}/>
                    </div>
                )
                )}
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default LyricsMainPage;