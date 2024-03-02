import './App.css';
import React, { useState } from 'react'; // Import useState
import FlashCard from './components/flashCard';

const App = () => {
  const [cards, setCards] = useState([
    { question: "What is the name of the country for this flag?", answer: "France", difficulty: "easy" , imgurl: "images/france.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Brazil", difficulty: "easy" , imgurl: "images/brazil.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Canada", difficulty: "easy" , imgurl: "images/canada.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Mexico", difficulty: "easy" , imgurl: "images/mexico.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Italy", difficulty: "easy" , imgurl: "images/italy.jpg"},
    { question: "What is the name of the country for this flag?", answer: "United States of America or USA", difficulty: "easy" , imgurl: "images/usa.jpg"},
    { question: "What is the name of the country for this flag?", answer: "United Kingdom", difficulty: "easy" , imgurl: "images/uk.jpg"},
    { question: "What is the name of the country for this flag?", answer: "South Korea", difficulty: "intermediate" , imgurl: "images/korea.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Switzerland", difficulty: "intermediate" , imgurl: "images/switzerland.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Germany", difficulty: "intermediate" , imgurl: "images/germany.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Greece", difficulty: "intermediate" , imgurl: "images/greece.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Spain", difficulty: "intermediate" , imgurl: "images/spain.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Australia", difficulty: "intermediate" , imgurl: "images/australia.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Hungary", difficulty: "hard" , imgurl: "images/hungary.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Chad", difficulty: "hard" , imgurl: "images/chad.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Belgium", difficulty: "hard" , imgurl: "images/belgium.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Finland", difficulty: "hard" , imgurl: "images/finland.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Netherlands", difficulty: "hard" , imgurl: "images/Netherlands.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Monaco", difficulty: "hard" , imgurl: "images/monaco.jpg"},
    { question: "What is the name of the country for this flag?", answer: "Saint Kitts and Nevis", difficulty: "hard" , imgurl: "images/skn.jpg"},
    
    // Add more cards as needed
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextCard = () => {
    let nextCardIndex;
    do {
      nextCardIndex = Math.floor(Math.random() * cards.length);
    } while (nextCardIndex === currentCardIndex);

    setCurrentCardIndex(nextCardIndex);
    setShowAnswer(false);
  };

  return (
    <div className="App">
      <div className="header">
        <img src="images/countries.jpg" className="countries"/>
        <h1>Flashcards</h1>
        <h2>Guess the Name of the Country from Their Flags!</h2>
        <h3>Background of the card color indicates difficulty:</h3>
        <h3>Green - Easy, Orange - Medium, Red - Hard</h3>
        <h3>Number of Cards: {cards.length}</h3>
      </div>

      <FlashCard
        card={cards[currentCardIndex]}
        showAnswer={showAnswer}
        onClick={handleCardClick}
      />
      <button className="next-button" onClick={handleNextCard}>Next</button>

    </div>
  )
}

export default App