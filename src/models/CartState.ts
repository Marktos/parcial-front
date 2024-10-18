import type { Book } from "./BookModel";

export interface CartState {
    books: Book[],
    precioTotal: number,
};