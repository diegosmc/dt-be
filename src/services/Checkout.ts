import { CustomerData } from "../interfaces/CustomerData"
import { PaymentData } from "../interfaces/PaymentData"
import { FoodData } from "../interfaces/FoodData"
import { PrismaClient } from "@prisma/client"

export default class Checkout {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async process(
    cart: FoodData[],
    customer: CustomerData,
    payment: PaymentData
   ) {
    const foods = await this.prisma.food.findMany({
      where: { id: { in: cart.map((food) => food.id),
      },
    },    
  })
  console.log(`foods`, foods)
   }
}