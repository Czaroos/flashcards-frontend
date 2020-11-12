import { firestore } from "../config";

export const createUser = async (
  user: firebase.default.User | null,
  ...rest: object[]
) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    const projects: string[] = [];

    const newUser = Object.assign(
      {},
      {
        displayName,
        email,
        createdAt,
        projects,
      },
      ...rest
    );

    try {
      await userRef.set(newUser);
    } catch (err) {
      return err;
    }
  }

  return userRef;
};
