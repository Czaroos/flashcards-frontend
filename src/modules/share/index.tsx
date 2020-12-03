import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { useAuthProvider } from "@core/auth";
import { useAlert } from "@core/alert";

import { Button } from "@components";

import { AcceptShareDeck, checkToken, Deck, getDecks } from "@firebase";

import { ShareContainer, Row } from "./style";

interface Params {
  deckId: string;
  token: string;
}

const Share = () => {
  const [deck, setDeck] = useState<Deck>();
  const [loading, setLoading] = useState(true);

  const { deckId, token } = useParams<Params>();
  const { user } = useAuthProvider();
  const { addAlert } = useAlert();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        await checkToken(token);
        const deck = await getDecks([deckId]);
        setDeck(deck[0]);
        setLoading(false);
      } catch (err) {
        addAlert(err.message, "danger");
        history.push(`/404`);
      }
    })();
  }, [token, deckId]);

  const handleAccept = async () => {
    try {
      await AcceptShareDeck(deckId, user!.id || undefined);
      history.push(`/dashboard/${user!.id}`);
      addAlert(
        `Success! Deck ${deck!.name} was added to your library.`,
        "success"
      );
    } catch (err) {
      addAlert(err.message, "danger");
    }
  };

  const handleReject = () => {
    user ? history.push(`/dashboard/${user!.id}`) : history.push("/");
  };

  return (
    <ShareContainer>
      {!loading ? (
        <>
          <h1>
            You are about to add <span>{deck?.name}</span> deck to your library
            which contains <span>{deck?.flashcards.length}</span> flashcards.
          </h1>
          <Row>
            <Button onClick={handleAccept}>Accept</Button>
            <Button variant="transparent" onClick={handleReject}>
              Reject
            </Button>
          </Row>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </ShareContainer>
  );
};

export default Share;
