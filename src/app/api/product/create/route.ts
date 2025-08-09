import { prodcutsMockData } from "@/entity/product/mock/product.data";
import { Product } from "@/entity/product/model/product.mdodel";
import { connectDB } from "@/shared/lib/mongoose";

export async function GET(request: Request) {
  await connectDB();

  await Promise.all(prodcutsMockData.map((elem) => Product.create(elem)));

  return new Response(JSON.stringify({ message: "Products created" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

