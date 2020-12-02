export interface Deck {
  id: string;
  name: string;
  createdAt: string;
  authors: string[];
  flashcards: string[];
  editedBy?: string;
  editedAt?: string;
  shared?: boolean;
}

export interface EditDeckPayload {
  id: string;
  userId: string;
  name: string;
}
