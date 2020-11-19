export type CategoriesItem = {
    id: string,
    name: string
};

export interface CategoriesProps {
    items: CategoriesItem[];
}