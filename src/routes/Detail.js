// URL값을 반환해줌
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from "react";
import MovieDetail from './../components/MovieDetail';

function Detail () {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);

    const getMovie = async() => {
        const json = await 
        (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
        .json();
        console.log(json);
        setMovieInfo(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
       getMovie();
    }, []);

    return (
        loading
            ? <div className='loadingWrapper'><h1 className="loading">Loading....</h1></div>
            : <MovieDetail
                url={movieInfo.url}
                year={movieInfo.year}
                rating={movieInfo.rating}
                coverImg={movieInfo.medium_cover_image}
                title={movieInfo.title_long}
                summary={movieInfo.description_full}
                genres={movieInfo.genres} />
        );
}

export default Detail;