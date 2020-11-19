export interface Deck {
  id: string;
  name: string;
  createdAt: Date;
  authors: string[];
  flashcards: string[];
  editedBy?: string;
  editedAt?: Date;
}
