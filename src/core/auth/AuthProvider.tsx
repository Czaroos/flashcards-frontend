import React, { createContext, ReactNode, useContext } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import { auth, createUser, User, signInWithGoogle } from "@firebase";

export interface State {
  user: User | null;
  signInWithGoogle?(): void;
  logOut?(): void;
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

  componentWillUnmount() {
    this._unsubscribeFromAuth();
  }

  readonly state: typeof STATE = {
    ...STATE,
    logOut: this.logOut,
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