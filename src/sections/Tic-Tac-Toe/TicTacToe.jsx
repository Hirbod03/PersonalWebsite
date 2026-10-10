// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "./TicTacToe.module.css";
import confetti from "canvas-confetti"; // Import confetti to celebrate a win

function TicTacToe() {
    // board holds 9 squares, each can be "X", "O", or null
    const [board, setBoard] = useState(Array(9).fill(null));
    // isXNext controls whose turn it is
    const [isXNext, setIsXNext] = useState(true);

    // Determine if there's a winner and which line created it
    const calculateWinner = (squares) => {
        // All possible winning triplets
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        // Check each line for three equal non-null values
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                // Return winner symbol and the winning line indices
                return { winner: squares[a], winningLine: [a, b, c] };
            }
        }
        // No winner found
        return null;
    };

    // Handle click on a square at index
    const handleClick = (index) => {
        // Ignore click if square already filled or game already won
        if (board[index] || calculateWinner(board)) return;
        // Copy board (avoid mutating state directly)
        const newBoard = board.slice();
        // Place current player's mark
        newBoard[index] = isXNext ? "X" : "O";
        // Update state with new board and toggle turn
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    // Compute current winner (if any) from board
    const result = calculateWinner(board);
    const winner = result ? result.winner : null;
    
    // When a winner appears, trigger confetti (side effect)
    useEffect(() => {
        if (winner) {
            confetti(); // Celebrate the win
        }
    }, [winner]);

    // Reset board and turn to initial state
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    // Status text: winner, draw, or whose turn it is
    const status = winner
        ? `Winner: ${winner} 🎉`
        : board.every((square) => square) // if every square is non-null -> draw
        ? "Draw!"
        : `Next player: ${isXNext ? "X" : "O"}`;

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "200px", justifyContent: "center" }}>
                <h1 className="sectionTitle">Game</h1>
            </div>
            <div className={styles.game} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>Tic-Tac-Toe</h2>
                <div className={styles.status}>{status}</div>
                <div className={styles.board}>
                    {board.map((value, index) => {
                        const row = Math.floor(index / 3) + 1;
                        const col = (index % 3) + 1;
                        return (
                        // Each square is a button that shows its value and handles clicks
                        <button
                            key={index}
                            className={`${styles.square} ${
                                // Highlight square if it's part of the winning line
                                result?.winningLine?.includes(index) ? styles.winningSquare : ""
                            }`}
                            onClick={() => handleClick(index)}
                            aria-label={value ? `${value} in row ${row}, column ${col}` : `Empty square, row ${row}, column ${col}`}
                        >
                            {value}
                        </button>
                    )})}
                </div>
                <button className={styles.resetButton} onClick={resetGame}>
                    Reset Game
                </button>
            </div>
        </div>
    );
}

export default TicTacToe;