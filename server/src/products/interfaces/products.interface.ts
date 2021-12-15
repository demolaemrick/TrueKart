import { Document } from 'mongoose';

interface Title {
  shortTitle: string;
  longTitle: string;
}

interface Price {
  mrp: number;
  cost: number;
  discount: string;
}

export interface Product extends Document {
  readonly _id: string;
  readonly imageUrl: string;
  readonly title: Title;
  readonly price: Price;
  readonly quantity: number;
  readonly description: string;
  readonly discount: number;
  readonly tagline: string;
}
