import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const foods = [
    {
    food: "pizza",
    name: "Calabresa",
    description: "Molho de tomate artesanal, mussarela, calabresa, cheddar, caputiry e orégano.",
    price: 25,
    image: "https://i.imgur.com/5rjJGkV.jpg"
    },
    {
    food: "pizza",
    name: "Portuguesa",
    description: "Molho de tomate artesanal, mussarela, presunto, ovo, cebola, ervilha, azeitonas e orégano.",
    price: 28.5,
    image: "https://i.imgur.com/WCoyGoI.png"
    },
    {
    food: "pizza",
    name: "Frango com Catupiry",
    description: "Molho de tomate artesanal, mussarela, frango desfiado, catupiry e orégano",
    price: 24,
    image: "https://i.imgur.com/BuXrO8d.jpg"
    },
    {
    food: "pizza",
    name: "Na Medida",
    description: "Molho de tomate artesanal, mussarela, calabresa, bacon e orégano.",
    price: 30,
    image: "https://i.imgur.com/u3DfvCE.jpg"
    },
    {
    food: "pizza",
    name: "Mussarela",
    description: "Molho de tomate artesanal, mussarela, azeitonas e orégano. ",
    price: 20.5,
    image: "https://i.imgur.com/kPNXpa0.jpg"
    },    
    {
    food: "bebida",
    name: "Coca-Cola 2L",
    description: "Coca-cola extremamente gelada.",
    price: 12,
    image: "https://i.imgur.com/Lg3aKhf.jpg"
    },
    {
    food: "bebida",
    name: "Guaraná Antartica",
    description: "Combina demais com a pizza de mussarela.",
    price: 6.5,
    image: "https://i.imgur.com/hOBrOIm.jpg"
    },
    {
    food: "bebida",
    name: "Suco de Abacaxi",
    description: "Suco natural de abacaxi.",
    price: 8,
    image: "https://i.imgur.com/VV9qTMh.jpg"
    },
    {
    food: "bebida",
    name: "Suco de Laranja",
    description: "Suco natural de laranja.",
    price: 8,
    image: "https://i.imgur.com/2Lf2gHy.jpg"
    },
]

async function main() {
  await prisma.food.createMany({
    data: foods,
    skipDuplicates: true,
  })
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })