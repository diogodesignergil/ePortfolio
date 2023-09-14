import React, { useState, useEffect } from "react";
import "./TypewriterAnimation.css";

const TypewriterAnimation = () => {
  const words = ["Designer", "Developer", "Freelancer"];
  const colors = ["#C10000", "#FFCE00", "#0076BF"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const wordToType = words[currentWordIndex];
    let timeout;

    if (isTyping) {
      if (currentWord.length < wordToType.length) {
        timeout = setTimeout(() => {
          setCurrentWord(wordToType.substring(0, currentWord.length + 1));
        }, 150); // Velocidade de digitação (ajuste conforme necessário)
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            timeout = setTimeout(() => {
              setCurrentWord("");
            }, 500); // Tempo de espera após digitar antes de apagar (ajuste conforme necessário)
          }, 1000); // Tempo de pausa entre palavras (ajuste conforme necessário)
        }, 500); // Tempo de pausa após a palavra ser completamente digitada (ajuste conforme necessário)
      }
    } else {
      if (currentWord.length > 0) {
        timeout = setTimeout(() => {
          setCurrentWord(currentWord.substring(0, currentWord.length - 1));
        }, 150); // Velocidade de apagamento (ajuste conforme necessário)
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentWord, currentWordIndex, isTyping]);

  return (
    <div className="typewriter">
      <span
        style={{
          color: colors[currentWordIndex],
        }}
      >
        {currentWord}
      </span>
    </div>
  );
};

export default TypewriterAnimation;
