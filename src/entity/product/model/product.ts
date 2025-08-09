export interface ProductModel {
  _id: string;
  name: { ua: string; eng: string };
  description: { ua: string; eng: string };
  price: number;
}
