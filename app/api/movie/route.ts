import { NextResponse } from "next/server";
import axios from "axios";

/* ===============================
   Lightweight NLP Sentiment Engine
================================== */

function analyzeSentiment(reviews: string) {
  const positiveWords = [
    "amazing", "great", "excellent", "love", "loved",
    "fantastic", "brilliant", "awesome", "wonderful",
    "masterpiece", "outstanding", "incredible"
  ];

  const negativeWords = [
    "bad", "boring", "worst", "poor", "terrible",
    "awful", "disappointing", "slow", "waste",
    "predictable", "weak"
  ];

  const words = reviews.toLowerCase().split(/\W+/);

  let score = 0;

  words.forEach(word => {
    if (positiveWords.includes(word)) score++;
    if (negativeWords.includes(word)) score--;
  });

  let sentiment = "Mixed";

  if (score > 2) sentiment = "Positive";
  else if (score < -2) sentiment = "Negative";

  const summary = generateSummary(sentiment, score);

  return {
    sentiment,
    summary,
    score
  };
}

function generateSummary(sentiment: string, score: number) {
  if (sentiment === "Positive") {
    return `Audiences responded very positively. Reviews highlight strong performances, engaging storytelling, and overall satisfaction. The movie appears to have left a strong impression.`;
  }

  if (sentiment === "Negative") {
    return `Audience reactions were largely negative. Reviews frequently mention weak storytelling or disappointing execution. Overall reception appears unfavorable.`;
  }

  return `Audience reactions are mixed. While some viewers appreciated certain aspects, others expressed criticism. The movie has generated balanced opinions overall.`;
}

/* ===============================
   API Route
================================== */

export async function POST(req: Request) {
  try {
    const { imdbId } = await req.json();

    if (!/^tt\d{7,8}$/.test(imdbId)) {
      return NextResponse.json(
        { error: "Invalid IMDb ID format" },
        { status: 400 }
      );
    }

    const movieRes = await axios.get(
      `http://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.OMDB_API_KEY}`
    );

    const movie = movieRes.data;

    if (movie.Response === "False") {
      return NextResponse.json(
        { error: "Movie not found" },
        { status: 404 }
      );
    }

    /* Simulated audience reviews
       (Can later replace with real review scraping) */
    const sampleReviews = `
      Amazing performances and brilliant direction.
      Loved the cinematography but some scenes felt slow.
      Overall a great and enjoyable experience.
    `;

    const analysis = analyzeSentiment(sampleReviews);

    return NextResponse.json({
      movie,
      sentiment: analysis.sentiment,
      summary: analysis.summary,
      score: analysis.score
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}