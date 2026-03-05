"use client";

export default function MovieCard({ movie, sentiment, summary, score }: any) {
  return (
    <div className="movie-container">

      {/* LEFT SIDE */}
      <div className="poster-section">
        <img src={movie.Poster} alt={movie.Title} className="poster" />

        <div className="movie-info">
          <div className="info-row">
            <span>Release Year</span>
            <span>{movie.Year}</span>
          </div>

          <div className="info-row">
            <span>IMDb Rating</span>
            <span>⭐ {movie.imdbRating}</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="details-section">

        <h1 className="movie-title">{movie.Title}</h1>

        <h3 className="section-title">PLOT SUMMARY</h3>

        <p className="plot">{movie.Plot}</p>

        <p className="cast">
          <strong>Cast:</strong> {movie.Actors}
        </p>

        <div className="sentiment-card">

          <div className="sentiment-header">
            <h3>AI Audience Sentiment</h3>
            <span className="sentiment">{sentiment}</span>
          </div>

          <p className="sentiment-text">{summary}</p>

          <p className="score">Sentiment Score: {score}</p>

        </div>
      </div>
    </div>
  );
}