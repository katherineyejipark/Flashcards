import React from 'react';
import './flashCard.css'; // Import the corresponding CSS file

const FlashCard = ({ card, showAnswer, onClick }) => {
  // Determine the background color based on the card's difficulty
  const backgroundColor = (() => {
    switch (card.difficulty) {
      case "easy":
        return "lightgreen";
      case "intermediate":
        return "orange";
      case "hard":
        return "red";
      default:
        return "white"; // Default background color if difficulty is not specified
    }
  })();

  return (
    <div className="flashcard" onClick={onClick} style={{ backgroundColor }}>
      {/* Image on top */}
      {card.imgurl && (
        <img src={card.imgurl} alt="Visual representation" className="flashcard-image" />
      )}
      
      {/* Question or answer text below the image */}
      <div>
        {showAnswer ? card.answer : card.question}
      </div>
    </div>
  );
};

export default FlashCard;