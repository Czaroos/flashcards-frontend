import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuthProvider } from "@core/auth";

import { Button } from "@components";

import { Deck, getDecks, createDeck, deleteDeck, editDeck } from "@firebase";
import { DashboardContainer } from "./style";

const Dashboard = () => {
  const [decks, setDecks] = useState<Deck[]>([]);

  const { user } = useAuthProvider();

  const history = useHistory();

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
      <Button width="300px" onClick={() => createDeck("deck1", user!.id)}>
        Create new deck
      </Button>
      {decks &&
        decks.map((deck, idx) => {
          return (
            <DashboardContainer key={idx}>
              <h2 onClick={() => history.push(`/decks/${deck.id}`)}>
                {deck.name} - click me to go to my dashboard - edited at -
                {deck.editedAt}- edited by - {deck.editedBy}
              </h2>
              <Button
                onClick={() => {
                  handleEdit(deck.id, "new Name");
                }}
              >
                EDIT
              </Button>
              <Button onClick={() => deleteDeck(deck.id)}>DELETE</Button>
            </DashboardContainer>
          );
        })}
    </div>
  );
};

export default Dashboard;
