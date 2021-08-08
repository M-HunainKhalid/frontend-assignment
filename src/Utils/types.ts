export interface OrderOption {
  name: string;
  price: number;
}

export interface Pizza {
  size: OrderOption;
  toppings: OrderOption[];
  quantity: number;
}
