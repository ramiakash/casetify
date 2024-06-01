import { PRODUCT_PRICES } from "@/config/products";

type Color = {
  label: string;
  value: string;
  tw: string;
};
//bg-blue-800 border-blue-800
//bg-rose-800 border-rose-800
//bg-zinc-950 border-zinc-950
export const COLORS: readonly Color[] = [
  { label: "Black", value: "black", tw: "zinc-950" },
  { label: "Blue", value: "blue", tw: "blue-800" },
  { label: "Rose", value: "rose", tw: "rose-800" },
] as const;

type ModelOption = {
  label: string;
  value: string;
};

type Model = {
  name: string;
  options: Array<ModelOption>;
};

export const MODELS: Model = {
  name: "models",
  options: [
    { label: "iPhone 13", value: "iPhone13" },
    { label: "iPhone 13 Pro", value: "iPhone13Pro" },
    { label: "iPhone 13 Plus", value: "iPhone13Plus" },
    { label: "iPhone 13 Pro Max", value: "iPhone13Promax" },
    { label: "iPhone 14", value: "iPhone14" },
    { label: "iPhone 14 Pro", value: "iPhone14Pro" },
    { label: "iPhone 14 Plus", value: "iPhone14Plus" },
    { label: "iPhone 14 Pro Max", value: "iPhone14Promax" },
    { label: "iPhone 15", value: "iPhone15" },
    { label: "iPhone 15 Pro", value: "iPhone15Pro" },
    { label: "iPhone 15 Plus", value: "iPhone15Plus" },
    { label: "iPhone 15 Pro Max", value: "iPhone15Promax" },
  ],
} as const;

type MaterialOption = {
  label: string;
  value: string;
  description: string | undefined;
  price: number;
};

type Material = {
  name: string;
  options: Array<MaterialOption>;
};

export const MATERIALS: Material = {
  name: "material",
  options: [
    {
      description: undefined,
      label: "Silicone",
      value: "silicone",
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      description: "Scatch-resistant high quality material",
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
};

type FinishOption = {
  label: string;
  value: string;
  description: string | undefined;
  price: number;
};

type Finish = {
  name: string;
  options: Array<FinishOption>;
};

export const FINISHES: Finish = {
  name: "finish",
  options: [
    {
      description: undefined,
      label: "Smooth Finish",
      value: "smooth",
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      description: undefined,
      label: "Textured Finish",
      value: "textured",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
};
