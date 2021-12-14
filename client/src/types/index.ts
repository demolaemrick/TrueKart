interface Title {
  shortTitle: string;
  longTitle: string;
}

interface Price {
  mrp: number;
  cost: number;
  discount: string;
}

export declare interface Product {
  _id: string;
  url: string;
  detailUrl: string;
  title: Title;
  price: Price;
  quantity: number;
  description: string;
  discount: number;
  tagline: string;
}

export declare interface AppProps {
  children: React.ReactNode;
}
