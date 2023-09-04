import { useState } from "react";

export default function RabbitChoices(): JSX.Element {
  const [boxButtonOne, setBoxButtonOne] = useState(false);
  const [boxButtonTwo, setBoxButtonTwo] = useState(false);
  const [boxButtonThree, setBoxButtonThree] = useState(false);
  const [winCount, setWinCount] = useState<number>(0);

  function handleButtonOne() {
    setBoxButtonOne(true);
    alert("🥕 Yay! you found a carrot!");
    !boxButtonOne && setWinCount((prev) => prev + 1);
    setBoxButtonOne(false);
  }

  function handleButtonTwo() {
    setBoxButtonTwo(false);
    alert("🦊 Game over! You have eaten by a fox!");
    setWinCount(0);
  }

  function handleButtonThree() {
    setBoxButtonThree(false);
    alert("🦊 Game over! You have eaten by a fox!");
    setWinCount(0);
  }

  return (
    <>
      <div>
        <h1 className="text">Your wins: {winCount}</h1>
      </div>
      {winCount === 3 && (
        <div>
          <h1 className="text">Hooray! You found all 3 carrots!</h1>
          <button
            className="reset"
            onClick={() => {
              setWinCount(0);
            }}
          >
            Reset
          </button>
        </div>
      )}
      {winCount > 1 && winCount < 3 && (
        <div>
          <button className="button-second" onClick={handleButtonThree}>
            📦
          </button>

          <button className="button-second" onClick={handleButtonTwo}>
            📦
          </button>

          <button className="button-second" onClick={handleButtonOne}>
            📦
          </button>
          {winCount === 2 && (
            <div>
              <h1 className="rabbit">🐰</h1>
            </div>
          )}
        </div>
      )}
      {winCount > 0 && winCount < 3 && (
        <div>
          <button className="button-second" onClick={handleButtonThree}>
            📦
          </button>

          <button className="button-second" onClick={handleButtonTwo}>
            📦
          </button>

          <button className="button-second" onClick={handleButtonOne}>
            📦
          </button>
          {winCount === 1 && (
            <div>
              <h1 className="rabbit">🐰</h1>
            </div>
          )}
        </div>
      )}
      {winCount < 3 && (
        <div>
          <button className="button" onClick={handleButtonOne}>
            📦
          </button>

          <button className="button" onClick={handleButtonTwo}>
            📦
          </button>

          <button className="button" onClick={handleButtonThree}>
            📦
          </button>
          {winCount === 0 && (
            <div>
              <h1 className="rabbit">🐰</h1>
            </div>
          )}
        </div>
      )}
    </>
  );
}
