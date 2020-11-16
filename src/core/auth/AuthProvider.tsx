import React, { createContext, ReactNode, useContext } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import { auth, createUser, User, signInWithGoogle } from "@firebase";

export interface State {
  user: User | null;
  signInWithGoogle?(): void;
  logOut?(): void;
  logIn?(email: string, password: string): void;
  signUp?(email: string, password: string, displayName: string): void;
}

export interface Props extends RouteComponentProps {
  children: ReactNode;
}

const STATE: State = {
  user: null,
};

const Context = createContext(STATE);

class Provider extends React.Component<Props, typeof STATE> {
  private _unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
    try {
      if (user) {
        const userRef = await createUser(user);

        userRef.onSnapshot(
          (
            snapshot: firebase.default.firestore.DocumentSnapshot<
              firebase.default.firestore.DocumentData
            >
          ) => {
            const { email, displayName, createdAt } = snapshot.data()!;
            this.setState({
              user: {
                id: snapshot.id,
                email,
                displayName,
                createdAt,
              },
            });
          }
        );
      } else {
        this.setState({ user: null });
      }
    } catch {
      this.setState({ user: null });
    }
  });

  logOut = async () => {
    try {
      await auth.signOut();

      this.setState({ user: null });
    } catch {
      this.setState({ ...STATE });
    }
  };

  logIn = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch {
      this.setState({ ...STATE });
    }
  };

  signUp = async (email: string, password: string, displayName: string) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUser(user, { displayName });
    } catch {
      this.setState({ ...STATE });
    }
  };

  componentWillUnmount() {
    this._unsubscribeFromAuth();
  }

  readonly state: typeof STATE = {
    ...STATE,
    logOut: this.logOut,
    logIn: this.logIn,
    signUp: this.signUp,
    signInWithGoogle,
  };

  render = () => (
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  );
}

const AuthProvider = withRouter(Provider);

export const useAuthProvider = () => {
  const context = useContext(Context);

  return context;
};

export default AuthProvider;
