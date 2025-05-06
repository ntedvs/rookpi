import { invoke } from "@tauri-apps/api/core"
import { Chess, Square } from "chess.js"
import { useState } from "react"

const size = 80
const white = "#f0d9b5"
const black = "#b58863"

export default function App() {
  const [started, setStarted] = useState(false)
  const [whitePath, setWhitePath] = useState("")
  const [blackPath, setBlackPath] = useState("")

  const chess = new Chess()

  const files = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1]

  return (
    <>
      <h1>Rookpi</h1>

      {started ? (
        <>
          <button>Start</button>

          {ranks.map((rank, i) => {
            return (
              <div key={rank} style={{ display: "flex" }}>
                {files.map((file, j) => {
                  const piece = chess.get((file + rank) as Square)

                  return (
                    <div
                      key={file}
                      style={{
                        width: size,
                        height: size,
                        backgroundColor: (i + j) % 2 === 0 ? white : black,
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
            )
          })}
        </>
      ) : (
        <>
          <input
            value={whitePath}
            onChange={(e) => setWhitePath(e.target.value)}
          />

          <input
            value={blackPath}
            onChange={(e) => setBlackPath(e.target.value)}
          />

          <button
            onClick={async () => {
              await invoke("start", { whitePath, blackPath })
              setStarted(true)
            }}
          >
            Start
          </button>
        </>
      )}
    </>
  )
}
