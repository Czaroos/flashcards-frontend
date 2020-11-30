import React, { useState } from "react";

import { useAuthProvider } from "@core/auth";

import { Input, Modal } from "@components";

import CloseButton from "@images/close.png"

import { deleteFlashcard, editFlashcard } from "@firebase";

import { FlashcardProps, Color } from "./model";

import {
  FlashcardContainer,
  ModalDiv,
  ChangeButton,
  EditButton,
  DeleteButton,
} from "./style";

const COLORS: Color[] = ["red", "blue", "pink", "green", "gray"];

export const Flashcard = ({
  id,
  variant = "tiny",
  color,
  onClick = () => { },
  answer,
  question,
  onDelete,
}: FlashcardProps) => {
  const [page, setPage] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(question || "");
  const [currentAnswer, setCurrentAnswer] = useState(answer || "");
  const [open, setOpen] = useState(false);
  const [flashCardColor, setFlashCardColor] = useState(
    color || COLORS[Math.floor(Math.random() * COLORS.length)]
  );

  const { user } = useAuthProvider();

  const changePage = () => setPage((prev) => !prev);

  const handleSetAnswer = (value: string) => {
    setCurrentAnswer(value);
    editFlashcard({ id, userId: user!.id, answer: value });
  };

  const handleSetQuestion = (value: string) => {
    setCurrentQuestion(value);
    editFlashcard({ id, userId: user!.id, question: value });
  };

  return (
    <>
      <FlashcardContainer
        onClick={onClick}
        variant={variant}
        color={flashCardColor}
      >
        <NoDrag>
          <ChangeButton onClick={() => changePage()} variant="transparent">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/565/565249.svg"
              height="20"
              width="20"
            />
          </ChangeButton>
        </NoDrag>
        {page ? (
          <>
            <p>Question</p>
            <p>{currentQuestion}</p>
          </>
        ) : (
            <>
              <p>Answer</p>
              <p>{currentAnswer}</p>
            </>
          )}

        <NoDrag>
          <EditButton onClick={() => setOpen(true)} variant="transparent">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/598/598234.svg"
              height="18"
              width="18"
            />
          </EditButton>
          <DeleteButton
            onClick={() => {
              deleteFlashcard(id);
              onDelete!(id);
            }}
            variant="transparent"
          >
            <img
              src={CloseButton}
              height="12"
              width="12" />
          </DeleteButton>
        </NoDrag>
      </FlashcardContainer>
      <Modal open={open} setOpen={setOpen}>
        {page ? (
          <ModalDiv>
            Edit question
            <Input
              key={1}
              width="100%"
              onChange={(e) => handleSetQuestion(e.target.value)}
              value={currentQuestion}
            />
          </ModalDiv>
        ) : (
            <ModalDiv>
              Edit answer
              <Input
                key={2}
                width="100%"
                onChange={(e) => handleSetAnswer(e.target.value)}
                value={currentAnswer}
              />
            </ModalDiv>
          )}
      </Modal>
    </>
  );
};

const NoDrag = (props: any) => {
  return (
    <div
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      {props.children}
    </div>
  );
};
