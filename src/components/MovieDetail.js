import React from "react";
import PropTypes from "prop-types";

function MovieDetail({url, year, rating, coverImg, title, summary, genres}) {
    return (
        <div>
                <img src={coverImg} alt="cover img"/><br></br>
                <a href={url}>Go To Site</a>
                <h2>Title : {title}</h2>
                <ul>
                    {
                        genres ? genres.map((g) => (<li key={g}>{g}</li>)) : null
                    }
                </ul>
                <p>Year : {year}</p>
                <p>Summary : {summary}</p>
                <p>Rating : {rating} stars</p>
        </div>
    );
};

MovieDetail.propTypes = {
    url: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
};

export default MovieDetail;