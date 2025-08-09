"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { ProductModel } from "../../model";
import { useLanguageStore } from "@/entity/language";



interface ProductCardProps {
  product: ProductModel;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguageStore()
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>{product.name[language]}</CardTitle>
        <CardDescription>{product.description[language]}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-lg font-semibold">{product.price}{language == "ua" ? "грн" : "hrn"}</div>
        <Button variant="default">{language == "ua" ? "Купити" : "buy"}</Button>
      </CardContent>
    </Card>
  );
}
