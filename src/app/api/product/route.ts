import { Product } from "@/entity/product/model/product.mdodel";
import { connectDB } from "@/shared/lib/mongoose";

export async function GET(request: Request) {
  await connectDB();

  try {
    const products = await Product.find().lean();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
