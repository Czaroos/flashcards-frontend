import React, { useState } from "react";
import { Input, Modal } from "@components"

import { FlashcardProps } from "./model";

import {
    FlashcardContainer,
    ModalDiv,
    ChangeButton,
    EditButton
} from "./style";

export const Flashcard = ({
    id,
    variant = "tiny",
    onClick = () => { },
    answer,
    question,
}: FlashcardProps) => {
    const [page, setPage] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(question || "");
    const [currentAnswer, setCurrentAnswer] = useState(answer || "");
    const [open, setOpen] = useState(false);

    const changePage = () => setPage(prev => !prev);

    const handleSetAnswer = (value: string) => {
        setCurrentAnswer(value);
        /*implement sending to the database*/
    }

    const handleSetQuestion = (value: string) => {
        setCurrentQuestion(value)
        /*implement sending to the database*/
    }

    return (
        <FlashcardContainer onClick={onClick} variant={variant}>
            <ChangeButton onClick={() => changePage()} variant="transparent">
                <img src="https://www.flaticon.com/svg/static/icons/svg/565/565249.svg"
                    height="20"
                    width="20" />
            </ChangeButton>

            {page
                ? <>
                    <p>Question</p>
                    <p>{currentQuestion}</p>
                </>
                : <>
                    <p>Answer</p>
                    <p>{currentAnswer}</p>
                </>}

            <EditButton onClick={() => setOpen(true)} variant="transparent">
                <img src="https://www.flaticon.com/svg/static/icons/svg/598/598234.svg"
                    height="18"
                    width="18" />
            </EditButton>

            <Modal open={open} setOpen={setOpen}>
                {page
                    ? <ModalDiv>
                        Edit question
                        <Input key={1}
                            width="100%"
                            onChange={e => handleSetQuestion(e.target.value)}
                            value={currentQuestion} />
                    </ModalDiv>
                    : <ModalDiv>
                        Edit answer
                        <Input key={2}
                            width="100%"
                            onChange={e => handleSetAnswer(e.target.value)}
                            value={currentAnswer} />
                    </ModalDiv>}
            </Modal>
        </FlashcardContainer>
    );
};
