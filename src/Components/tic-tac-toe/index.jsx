import React, { useEffect, useState } from "react";
import "./style.css";
function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

const index = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  function handleOnClick(getCurrentIndex) {
    let cpySquares = [...squares];
    if (getWinner(squares) || cpySquares[getCurrentIndex]) return;
    cpySquares[getCurrentIndex] = isXTurn ? "X" : "0";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }
  function handleRestart(){
    setSquares(Array(9).fill(""))
    setIsXTurn(true)
  }
  useEffect(() => {
    if (getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw !Please restart the game");
    } else if (getWinner(squares)) {
      setStatus(`Player ${getWinner(squares)} wins! Please restart the game`);
    } else {
      setStatus(`Next player: ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleOnClick(0)} />
        <Square value={squares[1]} onClick={() => handleOnClick(1)} />
        <Square value={squares[2]} onClick={() => handleOnClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleOnClick(3)} />
        <Square value={squares[4]} onClick={() => handleOnClick(4)} />
        <Square value={squares[5]} onClick={() => handleOnClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleOnClick(6)} />
        <Square value={squares[7]} onClick={() => handleOnClick(7)} />
        <Square value={squares[8]} onClick={() => handleOnClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default index;
