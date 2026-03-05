"use client"

import { useState } from "react"
import { Search, ImageIcon, Star, Brain } from "lucide-react"
import axios from "axios"
import MovieCard from "@/components/MovieCard"

export default function Home() {

  const [imdbId, setImdbId] = useState("")
  const [data, setData] = useState<any>(null)

  async function handleSearch() {
    if (!imdbId) return
    const res = await axios.post("/api/movie", { imdbId })
    setData(res.data)
  }

  return (
    <main style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"40px"}}>

      {/* NAVBAR */}

      <h2 style={{color:"#60a5fa", marginBottom:"30px"}}>
        🎬 Movie Insight
      </h2>

      {/* SMALL SEARCH BAR */}

      <div style={{
        display:"flex",
        alignItems:"center",
        background:"#1e293b",
        border:"1px solid #334155",
        borderRadius:"8px",
        padding:"6px 10px",
        width:"350px",
        marginBottom:"40px"
      }}>

        <Search size={16} color="#94a3b8" />

        <input
          value={imdbId}
          onChange={(e)=>setImdbId(e.target.value)}
          placeholder="Enter IMDb ID"
          style={{
            background:"transparent",
            border:"none",
            outline:"none",
            color:"white",
            marginLeft:"8px",
            flex:1
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"6px",
            padding:"4px 10px",
            cursor:"pointer"
          }}
        >
          Search
        </button>

      </div>

      {/* MOVIE RESULT */}

      {data ? (

        <div style={{width:"900px"}}>
          <MovieCard
            movie={data.movie}
            sentiment={data.sentiment}
            summary={data.summary}
            score={data.score}
          />
        </div>

      ) : (

        <>

        {/* HERO */}

        <div style={{textAlign:"center", marginBottom:"30px"}}>

          <h1 style={{fontSize:"32px", fontWeight:"bold"}}>
            Discover <span style={{color:"#3b82f6"}}>Cinematic Gems</span>
          </h1>

          <p style={{color:"#9ca3af", fontSize:"14px"}}>
            Example: tt0111161 (The Shawshank Redemption)
          </p>

        </div>

        {/* SMALL FEATURE BOXES */}

        <div style={{
          display:"flex",
          gap:"20px",
          width:"800px",
          justifyContent:"center"
        }}>

          {/* BOX 1 */}

          <div style={{
            background:"#0f172a",
            border:"1px solid #1e293b",
            borderRadius:"10px",
            padding:"16px",
            width:"220px",
            textAlign:"center"
          }}>

            <ImageIcon size={20} color="#60a5fa"/>

            <h4 style={{marginTop:"8px"}}>
              Instant Poster
            </h4>

            <p style={{fontSize:"12px", color:"#9ca3af"}}>
              Fetch movie posters instantly.
            </p>

          </div>

          {/* BOX 2 */}

          <div style={{
            background:"#0f172a",
            border:"1px solid #1e293b",
            borderRadius:"10px",
            padding:"16px",
            width:"220px",
            textAlign:"center"
          }}>

            <Star size={20} color="#facc15"/>

            <h4 style={{marginTop:"8px"}}>
              IMDb Ratings
            </h4>

            <p style={{fontSize:"12px", color:"#9ca3af"}}>
              Sync ratings directly from IMDb.
            </p>

          </div>

          {/* BOX 3 */}

          <div style={{
            background:"#0f172a",
            border:"1px solid #1e293b",
            borderRadius:"10px",
            padding:"16px",
            width:"220px",
            textAlign:"center"
          }}>

            <Brain size={20} color="#60a5fa"/>

            <h4 style={{marginTop:"8px"}}>
              AI Insights
            </h4>

            <p style={{fontSize:"12px", color:"#9ca3af"}}>
              AI generated audience sentiment.
            </p>

          </div>

        </div>

        </>

      )}

    </main>
  )
}