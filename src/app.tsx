import { Chess, Square } from "chess.js"

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
          {Array.from({ length: 8 }).map((_, j) => {
            const square = String.fromCharCode(97 + j) + (8 - i)
            const piece = chess.get(square as Square)

            return (
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
                {piece && (
                  <img
                    src={`pieces/${piece.color}${piece.type}.svg`}
                    style={{ width: size, height: size }}
                  />
                )}
              </div>
            )
          })}
        </div>
      ))}
    </>
  )
}
