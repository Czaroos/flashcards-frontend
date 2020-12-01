import { firestore } from "../config";

import { Share } from "../models";

export const shareDeck = async (deckId: string) => {
  const share = await firestore
    .collection("shares")
    .where("deckId", "==", deckId)
    .get();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const newShare = {
    deckId,
    expires: Math.floor(tomorrow.getTime() / 1000),
  };

  if (!share.empty) {
    let result: any;

    share.forEach(async (share) => {
      const { expires } = share.data();

      const now = Math.floor(new Date().getTime() / 1000);

      const timeLeft = expires - now;

      if (timeLeft > 0) {
        const stringDate = new Date(timeLeft * 1000);

        const infoString = `Your link is still available for ${stringDate
          .toUTCString()
          .substr(17, 8)} and was copied to your clipboard.`;

        result = { ...share.data(), token: share.id, infoString } as Share;
      } else {
        try {
          await share.ref.delete();
          const shareRef = await firestore.collection("shares").add(newShare);

          result = { ...newShare, token: shareRef.id } as Share;
        } catch (err) {
          return err;
        }
      }
    });
    return result;
  } else {
    try {
      const shareRef = await firestore.collection("shares").add(newShare);

      return { ...newShare, token: shareRef.id } as Share;
    } catch (err) {
      return err;
    }
  }
};

export const AcceptShareDeck = async (deckId: string) => {};
