<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore'; 

const carritoStore = useCartStore()
</script>

<template>
    <div class="carrito">
        <p class="totalCarrito">{{ `Total: $${carritoStore.precioTotal}` }}</p>
        <div class="wrapper" v-for="book in carritoStore.books" :key="book.id">
            <div class="product-container">
                <div class="book">
                    <img :src="book.coverImg" :alt="book.title" />
                    <div class="infoBook">
                        <p class="titulo">{{ book.title }}</p>
                        <p class="autor">{{ book.author }}</p>
                        <p class="rating">{{ book.rating }}</p>
                        <p class="precio">{{ `$${book.price}` }}</p>
                    </div>
                    <p class="deleteBook" @click="carritoStore.removeBook(book)">X</p>
                </div>
            </div>
        </div>
        <button class="pedido-confirmado">Confirmar Pedido</button>
    </div>
</template>

<style scoped>
.carrito {
    width: 100%;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    flex-direction: column;
}

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative; /* Para que el botón de eliminar esté posicionado relativo a este contenedor */
}

.product-container {
    display: flex;
    align-items: center;
    width: 100%;
}

.book {
    display: flex;
    align-items: center;
    flex: 1; /* Para que ocupe el espacio disponible */
}

.book img {
    width: 80px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 15px;
}

.infoBook {
    flex: 1;
}

.infoBook p {
    margin: 5px 0;
}

.titulo {
    font-size: 16px;
    font-weight: bold;
    color: #2c3e50;
}

.autor, .rating, .precio {
    font-size: 14px;
    color: #7f8c8d;
}

.deleteBook {
    font-size: 18px;
    color: #e74c3c;
    cursor: pointer;
    font-weight: bold;
    position: absolute; /* Posicionar el botón en la esquina superior derecha */
    top: 10px; /* Ajusta la distancia desde la parte superior */
    right: 10px; /* Ajusta la distancia desde el lado derecho */
}

.totalCarrito {
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    margin-bottom: 20px; /* Espacio entre total y productos */
}

.pedido-confirmado {
    background-color: #27ae60;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    margin-top: auto; /* Para empujar el botón hacia abajo */
}

.pedido-confirmado:hover {
    background-color: #2ecc71;
}
</style>
