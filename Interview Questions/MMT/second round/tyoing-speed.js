import React, { useState, useEffect } from 'react';

const TypingSpeedGame = () => {
  const [text, setText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder text for the game
  const placeholderText = "The quick brown fox jumps over the lazy dog.";

  useEffect(() => {
    if (isPlaying) {
      setStartTime(Date.now());
    } else {
      setEndTime(Date.now());
    }
  }, [isPlaying]);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setText(userInput);

    // Check if the user has completed typing
    if (userInput === placeholderText) {
      setIsPlaying(false);
    }
  };

  const handleStartGame = () => {
    setText('');
    setIsPlaying(true);
  };

  const calculateTypingSpeed = () => {
    if (startTime && endTime) {
      const timeInSeconds = (endTime - startTime) / 1000;
      const wordsTyped = text.split(' ').filter(word => word !== '').length;
      const typingSpeed = Math.round((wordsTyped / timeInSeconds) * 60);
      return typingSpeed;
    }
    return 0;
  };

  return (
    <div>
      <h1>Typing Speed Game</h1>
      <p>{placeholderText}</p>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleInputChange}
        placeholder="Start typing here..."
        disabled={!isPlaying}
      />
      <button onClick={handleStartGame} disabled={isPlaying}>
        Start Game
      </button>
      {!isPlaying && endTime && (
        <p>Your typing speed: {calculateTypingSpeed()} words per minute</p>
      )}
    </div>
  );
};

export default TypingSpeedGame;
