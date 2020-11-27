import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuthProvider } from "@core/auth";

import { Button, Input, Modal } from "@components";

import { Deck, getDecks, createDeck, deleteDeck, editDeck } from "@firebase";
import { DashboardContainer, ModalContainer } from "./style";

const Dashboard = () => {
  const [decks, setDecks] = useState<Deck[]>([]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [addInputValue, setAddInputValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");

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
    // CHANGE WHEN CATEGORY / DECK COMPONENT IS FINISHED
    // THIS IS ONLY FOR TEST PURPOSES
    // BUTTON ADDS A DECK
    // CLICKING ON BUTTON NEXT TO DECK'S NAME DELETES IT
    <div>
      <Button width="300px" onClick={() => setOpenAdd(true)}>
        Create new deck
      </Button>
      {decks &&
        decks.map((deck, idx) => {
          return (
            <>
              <DashboardContainer key={idx}>
                <h2 onClick={() => history.push(`/decks/${deck.id}`)}>
                  {deck.name} - click me to go to my dashboard - edited at -
                  {deck.editedAt}- edited by - {deck.editedBy}
                </h2>
                <Button
                  onClick={() => {
                    setOpenEdit(true);
                    setCurrentId(deck.id);
                    setEditInputValue(deck.name);
                  }}
                >
                  EDIT
                </Button>
                <Button onClick={() => deleteDeck(deck.id)}>DELETE</Button>
              </DashboardContainer>
            </>
          );
        })}
      <Modal open={openAdd} setOpen={setOpenAdd}>
        <ModalContainer>
          <div className="title">
            <div>Add</div>
            <img
              onClick={() => setOpenAdd(false)}
              src="https://www.flaticon.com/svg/static/icons/svg/447/447047.svg"
              alt="close"
              height="16"
              width="16"
            />
          </div>
          <div className="separator"></div>
          <form className="form" onSubmit={handleNewDeck}>
            <label>Name</label>
            <input
              type="text"
              value={addInputValue}
              onChange={(e: any) => setAddInputValue(e.target.value)}
            />
            <div className="separator"></div>
            <div className="button">
              <Button onClick={handleNewDeck}>Confirm</Button>
            </div>
          </form>
        </ModalContainer>
      </Modal>

      <Modal open={openEdit} setOpen={setOpenEdit}>
        <ModalContainer>
          <div className="title">
            <div>Edit</div>
            <img
              onClick={() => setOpenEdit(false)}
              src="https://www.flaticon.com/svg/static/icons/svg/447/447047.svg"
              alt="close"
              height="16"
              width="16"
            />
          </div>
          <div className="separator"></div>
          <form className="form" onSubmit={handleEditDeck}>
            <label>Name</label>
            <input
              type="text"
              value={editInputValue}
              onChange={(e: any) => setEditInputValue(e.target.value)}
            />
            <div className="separator"></div>
            <div className="button">
              <Button onClick={handleEditDeck}>Confirm</Button>
            </div>
          </form>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default Dashboard;
