import { useState } from "react";
import "./App.scss";
import q from "./data";
function App() {
  const item = [
    "All",
    ...new Set(
      q.map((x) => {
        return x.anime;
      })
    ),
  ];
  const [anime, setAnime] = useState(q);
  const [category, setCatogary] = useState(item);

  function categoryItem(cato) {
    if (cato === "All") {
      setAnime(q);
      return;
    }
    const i = q.filter((x) => x.anime === cato);
    setAnime(i);
  }

  return (
    <div>
      <h1 className="title">
        Anime <span className="qoutes">"quotes"</span>{" "}
      </h1>

      <div className="button">
        {category.map((xm, index) => {
          return (
            <>
              <ul>
                <li>
                  <button
                    onClick={() => {
                      categoryItem(xm);
                    }}
                  >
                    {xm}
                  </button>
                </li>
              </ul>
            </>
          );
        })}
      </div>

      {anime.map((x, index) => {
        const { character, quote } = x;
        if (index % 2 === 0) {
          return (
            <>
              <div className=" x" key={index}>
                <div>
                  <span>{index + 1})</span>
                  <br />
                  <span className="left">❝ </span>
                  <p> {quote}</p>
                  <span className="right"> ❞</span>
                </div>
                <h3 className="char">- {character}</h3>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="container y" key={index}>
                <div>
                  <span>{index + 1})</span>
                  <br />
                  <span className="left">❝ </span>
                  <p> {quote}</p>
                  <span className="right"> ❞</span>
                </div>
                <h3 className="char">- {character}</h3>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
export default App;
