import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@components";

import { Flashcard, getDecks, getFlashcards } from "@firebase";

import { Params, MarkedFlashcard } from "./model";

import * as S from "./style";

const LearningGame = () => {
  const [flashcards, setFlashcards] = useState<MarkedFlashcard[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [length, setLength] = useState(-1);
  const [initialLength, setInitialLength] = useState(-1);
  const [againCount, setAgainCount] = useState(0);
  const [goodCount, setGoodCount] = useState(0);

  const { deckId } = useParams<Params>();

  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.cursor = "progress";
    (async () => {
      const deck = await getDecks([deckId]);
      const flashcards = await getFlashcards(deck[0].flashcards);

      const markedFlashcards: MarkedFlashcard[] = flashcards.map(
        (flashcard: Flashcard) => {
          return {
            ...flashcard,
            again: false,
            good: false,
          };
        }
      );

      gameContainerRef.current?.focus();

      setFlashcards(markedFlashcards);
      setIndex(0);
      setLength(flashcards.length);
      setInitialLength(flashcards.length);

      setIsLoading(false);
      gameContainerRef.current?.focus();
      document.body.style.cursor = "default";
    })();
  }, []);

  useEffect(() => {
    index > -1 && nextFlashcard();
  }, [flashcards]);

  const handleKeyboard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.key === " " && setShowAnswer(true);
    if (showAnswer) {
      e.key === "q" && handleAgain();
      e.key === "w" && handleGood();
      e.key === "e" && handleEasy();
    }
  };

  const nextFlashcard = () => {
    setShowAnswer(false);
    index !== flashcards.length - 1
      ? setIndex(index + 1)
      : setHasFinished(true);
  };

  const handleAgain = () => {
    const { good } = flashcards[index];

    good && setGoodCount(goodCount - 1);
    good && setAgainCount(againCount + 1);

    setFlashcards([
      ...flashcards,
      { ...flashcards[index], again: true, good: false },
    ]);

    againCount + goodCount !== initialLength && setAgainCount(againCount + 1);
    length !== 0 && setLength(length - 1);
  };

  const handleGood = () => {
    const { again, good } = flashcards[index];

    !good &&
      setFlashcards([
        ...flashcards,
        { ...flashcards[index], again: false, good: true },
      ]);
    !good && setGoodCount(goodCount + 1);

    again && setAgainCount(againCount - 1) && setGoodCount(goodCount + 1);
    againCount + goodCount !== initialLength && setGoodCount(goodCount + 1);
    length !== 0 && setLength(length - 1);

    good && nextFlashcard();
    good && setGoodCount(goodCount - 1);
  };

  const handleEasy = () => {
    const { again, good } = flashcards[index];

    length !== 0 && setLength(length - 1);
    good && setGoodCount(goodCount - 1);
    again && setAgainCount(againCount - 1);

    nextFlashcard();
  };

  return !isLoading ? (
    !hasFinished ? (
      <S.LearningGameContainer
        onKeyPress={(e) => handleKeyboard(e)}
        tabIndex={1}
        ref={gameContainerRef}
      >
        <S.Header>
          <h2>
            <span>{againCount}</span>/<span>{goodCount}</span>/{length}
          </h2>
        </S.Header>
        <S.Content
          again={flashcards[index].again}
          good={flashcards[index].good}
        >
          <h2>{flashcards[index].question}</h2>
          <S.Separator />
          {showAnswer ? (
            <h2>{flashcards[index].answer}</h2>
          ) : (
            <Button onClick={() => setShowAnswer(true)}>
              SHOW ANSWER (SPACE)
            </Button>
          )}
        </S.Content>
        <S.ActionButtons>
          <S.AgainButton onClick={handleAgain} disabled={!showAnswer}>
            <h3>AGAIN (Q)</h3>
          </S.AgainButton>
          <S.GoodButton onClick={handleGood} disabled={!showAnswer}>
            <h3>GOOD (W)</h3>
          </S.GoodButton>
          <S.EasyButton onClick={handleEasy} disabled={!showAnswer}>
            <h3>EASY (E)</h3>
          </S.EasyButton>
        </S.ActionButtons>
      </S.LearningGameContainer>
    ) : (
      <h2>Game finished!</h2>
    )
  ) : (
    <S.LoaderContainer>
      <h1>Loading...</h1>
    </S.LoaderContainer>
  );
};

export default LearningGame;
