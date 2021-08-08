import { Box } from "@material-ui/core";
import { Pizza } from "Utils";

export interface CartProps {
  pizza: Pizza[];
}

export const Cart = ({ pizza }: CartProps) => (
  <>
    {pizza.map(({ toppings, quantity, size: { name, price } }, idx) => (
      <Box key={`${idx} pizza`}>
        <Box>{`pizza ${idx + 1}`}</Box>
        <Box>
          {name} (${price})
        </Box>
        <Box>
          {toppings.map(({ name, price }) => `${name} ($${price})`).join(", ")}
        </Box>
        <Box>
          $
          {(toppings.reduce((acc, cur) => acc + cur.price, 0) + price) *
            quantity}
        </Box>
      </Box>
    ))}
  </>
);
