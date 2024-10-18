//importo pinia para utilizar defineStore y ademas el modelo de libro y mi esatado del carrito
import { defineStore } from "pinia";
import type { Book } from "@/models/BookModel";
import type { CartState } from "@/models/CartState";

export const useCartStore = defineStore({
    id: 'cart',
    state: (): CartState => ({
        books: [] as Book[],
        precioTotal: 0,
    }),
    actions: {
        //Utilizo la accion ya creada en el bookStore para sumar un libro a mi carrito
        addBook(book: Book):  void {
            this.books.push(book);
        },

        //Utilizo otra accion ya creada en el bookStore para eliminar un libro de mi carrito
        removeBook(book: Book): void {
            this.books = this.books.filter((item) => item.id !== book.id);  
        },
    },
    getters: {
        // Getter para calcular el precio total del carrito
        precioTotal: (state): number => {
            return state.books.reduce((total, book) => total + book.price, 0);
        },
    },
})