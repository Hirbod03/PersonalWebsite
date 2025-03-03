// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './TicTacToe.module.css'; // Add your CSS module for styling

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(board);
    const status = winner
        ? `Winner: ${winner}`
        : board.every((square) => square)
        ? 'Draw!'
        : `Next player: ${isXNext ? 'X' : 'O'}`;

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className={styles.game}>
            <h2>Tic-Tac-Toe</h2>
            <div className={styles.status}>{status}</div>
            <div className={styles.board}>
                {board.map((value, index) => (
                    <button
                        key={index}
                        className={styles.square}
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