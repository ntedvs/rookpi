import { Chess, Piece as P } from "chess.js"

const size = 80
const white = "#f0d9b5"
const black = "#b58863"

export default function App() {
  const chess = new Chess()

  return (
    <>
      <h1>Rookpi</h1>

      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ display: "flex" }}>
          {Array.from({ length: 8 }).map((_, j) => (
            <div
              key={j}
              style={{
                width: size,
                height: size,
                backgroundColor: (i + j) % 2 === 0 ? white : black,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Piece piece={chess.get("a1")} />
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

function Piece({ piece }: { piece?: P }) {
  if (!piece) return null

  return (
    <img
      src={`pieces/${piece.color}${piece.type}.svg`}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
