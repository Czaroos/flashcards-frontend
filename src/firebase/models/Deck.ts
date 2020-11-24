export interface Deck {
  id: string;
  name: string;
  createdAt: string;
  authors: string[];
  flashcards: string[];
  editedBy?: string;
  editedAt?: string;
}

export interface EditPayload {
  id: string;
  userId: string;
  name: string;
}
