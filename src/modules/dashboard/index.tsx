import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuthProvider } from "@core/auth";
import { useAlert } from "@core/alert";

import { Modal } from "@components";

import {
  Deck,
  getDecks,
  createDeck,
  deleteDeck,
  editDeck,
  shareDeck,
  Share,
} from "@firebase";

import {
  CreateDeck,
  DashboardContainer,
  DashboardGrid,
  DeckWrapper,
  DeleteButton,
  DummyBackground,
  EditButton,
  ModalContainer,
  MyBtn,
  PlayButton,
  ShareButton,
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
  const { addAlert } = useAlert();

  const history = useHistory();
  console.log(history);

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
    } else addAlert(error.message, "danger");
  };

  const handleShare = async (id: string) => {
    const res = await shareDeck(id);

    navigator.clipboard.writeText(
      `localhost:8080/decks/${id}/share/${res.token}`
    );

    addAlert(
      res.infoString ||
        "Your link is available for 24 hours and was copied to your clipboard.",
      "info"
    );
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
    <>
      <DummyBackground />
      <DashboardContainer>
        <DashboardGrid>
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
                      deck.flashcards.length > 0
                        ? history.push(`/decks/${deck.id}/play`)
                        : addAlert("This deck is empty!", "danger");
                    }}
                  >
                    <img
                      src="https://www.flaticon.com/svg/static/icons/svg/13/13973.svg"
                      height="27"
                      width="27"
                    />
                  </PlayButton>
                  <ShareButton
                    onClick={async (e) => {
                      e!.stopPropagation();
                      handleShare(deck.id);
                    }}
                  >
                    <img
                      src="https://www.flaticon.com/svg/static/icons/svg/929/929610.svg"
                      height="27"
                      width="27"
                    />
                  </ShareButton>
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
              height="80"
              width="80"
            />
            <h2>Create new deck</h2>
          </CreateDeck>
        </DashboardGrid>
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
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
