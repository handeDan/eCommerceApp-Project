import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  http.get("api/cart", (resolver) => {
    return HttpResponse.json({
      items: [
        {
          id: "1",
          title: "Wooden Chair",
          price: "1.100 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/wooden_chair.jpg",
        },
        {
          id: "2",
          title: "Pouf",
          price: "800 TL",
          material: "Fabric",
          description: "Free shipping",
          image: "/images/pouf.jpg",
        },
        {
          id: "3",
          title: "Modern Sofa",
          price: "5.600 TL",
          material: "Wooden&Fabric",
          description: "Free shipping",
          image: "/images/sofa.jpg",
        },
        {
          id: "4",
          title: "Modern Barstool",
          price: "1.250 TL",
          material: "Wooden&Plastic",
          description: "Free shipping",
          image: "/images/barstool.jpg",
        },
        {
          id: "5",
          title: "Minimal Sideboard",
          price: "1.800 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/sideboard.jpg",
        },
        {
          id: "6",
          title: "Block Table",
          price: "1.300 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/block_table.jpg",
        },
        {
          id: "7",
          title: "Console Bookcase",
          price: "7.500 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/console_bookcase.jpg",
        },
        {
          id: "8",
          title: "Dinner Table",
          price: "3.150 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/dining_table.jpg",
        },
        {
          id: "9",
          title: "Working Table",
          price: "6.875 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/working_table.jpg",
        },
        {
          id: "10",
          title: "Bed",
          price: "12.100 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/bed.jpg",
        },
        {
          id: "11",
          title: "Dining Table",
          price: "13.250 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/dining_table.jpg",
        },
        {
          id: "12",
          title: "Coffee Table",
          price: "1.100 TL",
          material: "Wooden",
          description: "Free shipping",
          image: "/images/sehpa.jpg",
        },
      ],
    });
  })
);
