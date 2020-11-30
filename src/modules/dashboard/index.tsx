import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuthProvider } from "@core/auth";

import { Modal } from "@components";

import { Deck, getDecks, createDeck, deleteDeck, editDeck } from "@firebase";
import {
  CreateDeck,
  DashboardContainer,
  DeckWrapper,
  DeleteButton,
  EditButton,
  ModalContainer,
  MyBtn,
  PlayButton,
  Separator,
  Title,
} from "./style";

const Dashboard = () => {
  const [decks, setDecks] = useState<Deck[]>([]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [addInputValue, setAddInputValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [deleteInputValue, setDeleteInputValue] = useState("");

  const [currentId, setCurrentId] = useState("");

  const { user } = useAuthProvider();

  const history = useHistory();

  const handleNewDeck = (e: any) => {
    e.preventDefault();
    createDeck(addInputValue, user!.id);
    setOpenAdd(false);
  };

  const handleEditDeck = (e: any) => {
    e.preventDefault();
    handleEdit(currentId, editInputValue);
    setOpenEdit(false);
  };

  const handleEdit = async (id: string, name: string) => {
    const error = await editDeck({ id, userId: user!.id, name });

    if (!error) {
      const newDecks = decks.map((deck) => {
        if (deck.id === id) {
          return {
            ...deck,
            name,
          };
        } else return deck;
      });

      setDecks(newDecks);
    } else alert(error.message);
  };

  useEffect(() => {
    user &&
      (async () => {
        try {
          const decks = await getDecks(user!.decks);
          setDecks(decks);
        } catch (err) {
          console.log(err);
        }
      })();
  }, [user]);

  return (
    <div>
      <DashboardContainer>
        {decks &&
          decks.map((deck, idx) => {
            return (
              <DeckWrapper
                key={idx}
                onClick={() => history.push(`/decks/${deck.id}`)}
              >
                <h2>{deck.name}</h2>
                <EditButton
                  onClick={(e) => {
                    e!.stopPropagation();
                    setOpenEdit(true);
                    setCurrentId(deck.id);
                    setEditInputValue(deck.name);
                  }}
                >
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/860/860763.svg"
                    height="23"
                    width="23"
                  />
                </EditButton>
                <DeleteButton
                  onClick={(e) => {
                    e!.stopPropagation();
                    setCurrentId(deck.id);
                    setDeleteInputValue(deck.name);
                    setOpenDelete(true);
                  }}
                >
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/1214/1214594.svg"
                    height="27"
                    width="27"
                  />
                </DeleteButton>
                <PlayButton
                  onClick={(e) => {
                    e!.stopPropagation();
                    history.push(`/decks/${deck.id}/play`);
                  }}
                >
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/13/13973.svg"
                    height="27"
                    width="27"
                  />
                </PlayButton>
              </DeckWrapper>
            );
          })}
        <CreateDeck
          onClick={() => {
            setAddInputValue("");
            setOpenAdd(true);
          }}
        >
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
            height="100"
            width="100"
          />
          <h2>Create new deck</h2>
        </CreateDeck>
      </DashboardContainer>
      <Modal open={openAdd} setOpen={setOpenAdd}>
        <ModalContainer>
          <Title>
            <div>Create deck</div>
            <img
              onClick={() => setOpenAdd(false)}
              src="https://www.flaticon.com/svg/static/icons/svg/447/447047.svg"
              alt="close"
              height="16"
              width="16"
            />
          </Title>
          <Separator />
          <form onSubmit={handleNewDeck}>
            <label>Name</label>
            <input
              type="text"
              value={addInputValue}
              onChange={(e: any) => setAddInputValue(e.target.value)}
            />
            <Separator />
            <MyBtn onClick={handleNewDeck}>Confirm</MyBtn>
          </form>
        </ModalContainer>
      </Modal>

      <Modal open={openEdit} setOpen={setOpenEdit}>
        <ModalContainer>
          <Title>
            <div>Edit</div>
            <img
              onClick={() => setOpenEdit(false)}
              src="https://www.flaticon.com/svg/static/icons/svg/447/447047.svg"
              alt="close"
              height="16"
              width="16"
            />
          </Title>
          <Separator />
          <form onSubmit={handleEditDeck}>
            <label>Name</label>
            <input
              type="text"
              value={editInputValue}
              onChange={(e: any) => setEditInputValue(e.target.value)}
            />
            <Separator />
            <MyBtn onClick={handleEditDeck}>Confirm</MyBtn>
          </form>
        </ModalContainer>
      </Modal>

      <Modal open={openDelete} setOpen={setOpenDelete}>
        <ModalContainer>
          <Title>
            <div>Delete</div>
            <img
              onClick={() => setOpenDelete(false)}
              src="https://www.flaticon.com/svg/static/icons/svg/447/447047.svg"
              alt="close"
              height="16"
              width="16"
            />
          </Title>
          <Separator />
          <p>
            Are you sure you want to delete deck: <b>{deleteInputValue}</b> ?
          </p>
          <Separator />
          <MyBtn
            onClick={() => {
              deleteDeck(currentId);
              setOpenDelete(false);
            }}
          >
            Confirm
          </MyBtn>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default Dashboard;
