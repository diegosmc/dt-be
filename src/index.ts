import { PrismaClient } from '@prisma/client';
import cors from "cors"
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

import { CustomerData } from "./interfaces/CustomerData"
import { PaymentData } from "./interfaces/PaymentData"
import { FoodData } from "./interfaces/FoodData"

import Checkout from './services/Checkout';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  const { message } = req.body

  if (!message) return res.status(400).send({ error: "Opa, uma mensgem é desejada"})
  
  res.send({ message })
})

app.get("/foods", async (req: Request, res: Response) => {
  const { food } = req.query

  if (!food) return res.status(400).send({ error: "Opa, falta um parâmetro"})

  const foods = await prisma.food.findMany({
    where: {
      food: {
        equals: food as string,
      },
    },
  })
  res.send(foods)
})

app.get("/orders/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  const order = await prisma.order.findUnique({
    where: {
      id: +id,
    },
  })

  if (!order) return res.status(404).send({ error: "Pedido não encontrado" })

  res.send(order)
})

interface CheckoutRequest extends Request {
  body: {
    cart: FoodData[]
    customer: CustomerData
    payment: PaymentData
  }
}

app.post("/checkout", async (req: CheckoutRequest, res: Response) => {
  const { cart, customer, payment } = req.body

  const checkout = new Checkout()
  checkout.process(cart, customer, payment)
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})