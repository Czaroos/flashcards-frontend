import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuthProvider } from "@core/auth";
import { useAlert } from "@core/alert";

import { Modal, SearchBox } from "@components";

import {
  Deck,
  getDecks,
  createDeck,
  deleteDeck,
  editDeck,
  shareDeck,
} from "@firebase";

import { AddBoard } from "@icons";

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
  SearchWrapper,
} from "./style";

const Dashboard = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [items, setItems] = useState<Deck[]>([]);
  const [currentDeck, setCurrentDeck] = useState<Deck>();

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openPlay, setOpenPlay] = useState(false);

  const [addInputValue, setAddInputValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [deleteInputValue, setDeleteInputValue] = useState("");
  const [limitInput, setLimitInput] = useState("");

  const [currentId, setCurrentId] = useState("");

  const { user } = useAuthProvider();
  const { addAlert } = useAlert();

  const history = useHistory();

  const handleNewDeck = async (e: any) => {
    e.preventDefault();

    try {
      await createDeck(addInputValue, user!.id);
      addAlert("Success! A new deck has been added.", "success");
    } catch (err) {
      addAlert(err.message, "danger");
    } finally {
      setOpenAdd(false);
    }
  };

  const handleEditDeck = async (e: any) => {
    e.preventDefault();

    try {
      await handleEdit(currentId, editInputValue);
      addAlert("Success! Editing was completed.", "success");
    } catch (err) {
      addAlert(err.message, "danger");
    } finally {
      setOpenEdit(false);
    }
  };

  const handleEdit = async (id: string, name: string) => {
    try {
      await editDeck({ id, userId: user!.id, name });

      const newDecks = decks.map((deck) => {
        if (deck.id === id) {
          return {
            ...deck,
            name,
          };
        } else return deck;
      });

      setDecks(newDecks);
    } catch (err) {
      addAlert(err.message, "danger");
    }
  };

  const handleShare = async (id: string) => {
    try {
      const deck = await getDecks([id]);
      if (deck[0].flashcards.length === 0)
        throw new Error("You cannot share an empty deck.");

      const res = await shareDeck(id);

      navigator.clipboard.writeText(
        `localhost:8080/decks/${id}/share/${res.token}`
      );

      addAlert(
        res.info ||
          "Your link is available for 24 hours and was copied to your clipboard.",
        "info"
      );
    } catch (err) {
      addAlert(err.message, "danger");
    }
  };

  const handlePlay = async (id: string) => {
    setOpenPlay(true);
    const deck = await getDecks([id]);
    setCurrentDeck(deck[0]);
  };

  useEffect(() => {
    user &&
      (async () => {
        try {
          const decks = await getDecks(user!.decks);
          setDecks(decks);
          setItems(decks);
        } catch (err) {
          addAlert(err.message, "danger");
        }
      })();
  }, [user]);

  const search = (value: string) => {
    const array: Deck[] = [];
    items.map((e: Deck) => {
      if (e.name.toLowerCase().includes(value.toLowerCase())) {
        array.push(e);
      }
    });
    setDecks(array);
  };

  return (
    <>
      <DummyBackground />
      <DashboardContainer>
        <SearchWrapper>
          <h1>Deck search</h1>
          <SearchBox onChange={(e) => search(e.target.value)} />
        </SearchWrapper>
        <DashboardGrid>
          <CreateDeck
            onClick={() => {
              setAddInputValue("");
              setOpenAdd(true);
            }}
          >
            <AddBoard />
            <h2>Create new deck</h2>
          </CreateDeck>
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
                    onClick={async (e) => {
                      e!.stopPropagation();
                      deck.flashcards.length > 0
                        ? await handlePlay(deck.id)
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
                  <h6>{deck.shared ? "SHARED" : ""}</h6>
                </DeckWrapper>
              );
            })}
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

        <Modal open={openPlay} setOpen={setOpenPlay}>
          <ModalContainer>
            <Title>
              <div>How many cards would you like to learn?</div>
              <img
                onClick={() => setOpenPlay(false)}
                src="https://www.flaticon.com/svg/static/icons/svg/447/447047.svg"
                alt="close"
                height="16"
                width="16"
              />
            </Title>
            <Separator />
            <form>
              <label>{`Limit (MAX ${currentDeck?.flashcards.length})`}</label>
              <input
                type="text"
                value={limitInput}
                onChange={(e: any) =>
                  !isNaN(e.target.value) && setLimitInput(e.target.value)
                }
              />
              <Separator />
              <MyBtn
                onClick={() => {
                  history.push(
                    `/decks/${currentDeck!.id}/play${
                      Number(limitInput.trim()) > currentDeck!.flashcards.length
                        ? `?limit=${currentDeck!.flashcards.length}`
                        : limitInput.trim()
                        ? `?limit=${limitInput.trim()}`
                        : ""
                    }`
                  );
                  Number(limitInput.trim()) > currentDeck!.flashcards.length &&
                    addAlert(
                      `Flashcards limit set to a maximum value of ${currentDeck?.flashcards.length}.`,
                      "warning"
                    );
                }}
              >
                Confirm
              </MyBtn>
            </form>
          </ModalContainer>
        </Modal>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
