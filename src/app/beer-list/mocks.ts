import { Beer } from './beer';

export const BEERS : Beer[] = [
    {
        name: "Negra fuerte",
        type: "Stout",
        price: 20.99,
        stock: 100,
        date: "2020-08-18",
        quantity: 0,
        offer: true,
        image: "/images/stout.jpg"
    },
    {
        name: "Rubia suave",
        type: "Blond",
        price: 17.99,
        stock: 80,
        date: "2025-10-11",
        quantity: 0,
        offer: false,
        image: "/images/blonde.png"
    },
    {
        name: "Roja potente",
        type: "Red",
        price: 18.99,
        stock: 50,
        date: "2030-02-12",
        quantity: 0,
        offer: false,
        image: "/images/red.jpg"
    }
];