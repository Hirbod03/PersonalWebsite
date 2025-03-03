// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "./TicTacToe.module.css";
import confetti from "canvas-confetti"; // Import confetti

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [countdown, setCountdown] = useState(null); // Countdown timer

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], winningLine: [a, b, c] };
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const result = calculateWinner(board);
    const winner = result ? result.winner : null;
    
    useEffect(() => {
        if (winner) {
            confetti(); // Trigger confetti
            setCountdown(3); // Start countdown
            const timer = setInterval(() => {
                setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);

            setTimeout(() => {
                resetGame();
                clearInterval(timer);
            }, 3000);
        }
    }, [winner]);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setCountdown(null); // Clear countdown
    };

    const status = winner
        ? `Winner: ${winner} 🎉\n(Restarting in ${countdown}s)`
        : board.every((square) => square)
        ? "Draw!\n(Restarting in 3s)"
        : `Next player: ${isXNext ? "X" : "O"}`;

    return (
        <div className={styles.game}>
            <h2>Tic-Tac-Toe</h2>
            <div className={styles.status}>{status}</div>
            <div className={styles.board}>
                {board.map((value, index) => (
                    <button
                        key={index}
                        className={`${styles.square} ${
                            result?.winningLine?.includes(index) ? styles.winningSquare : ""
                        }`}
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <button className={styles.resetButton} onClick={resetGame}>
                Reset Game
            </button>
        </div>
    );
}

export default TicTacToe;