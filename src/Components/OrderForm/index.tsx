import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { Cart } from "Components/Cart";
import { OrderOption, Pizza, priceMap, sizeOption, toppingOption } from "Utils";

export interface OrderFormProps {
  pizza: Pizza[];
  onAdd: Function;
}

export const OrderForm = ({ pizza, onAdd }: OrderFormProps) => {
  const [pizzaDetail, setPizzaDetail] = useState<Pizza>({
    size: { name: "small", price: priceMap.small },
    toppings: [],
    quantity: 1,
  });

  const handleChange = (
    name: string,
    value: OrderOption | OrderOption[] | number
  ) => {
    setPizzaDetail({ ...pizzaDetail, [name]: value });
  };

  return (
    <>
      <FormControl>
        <FormLabel>Size</FormLabel>
        <RadioGroup
          aria-label="size"
          name="size"
          value={pizzaDetail?.size.name}
          onChange={({ target: { name, value } }) =>
            handleChange(name, { name: value, price: priceMap[value] })
          }
        >
          {sizeOption.map((size, idx) => (
            <FormControlLabel
              key={size + idx}
              value={size}
              control={<Radio />}
              label={size}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Toppings</FormLabel>
        <FormGroup>
          {toppingOption.map((topping, idx) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={pizzaDetail.toppings.some(
                    (selectedTopping) => selectedTopping.name === topping
                  )}
                  onChange={({ target: { checked } }) =>
                    checked
                      ? handleChange("toppings", [
                          ...pizzaDetail.toppings,
                          {
                            name: topping,
                            price: priceMap[topping],
                          },
                        ])
                      : handleChange(
                          "toppings",
                          pizzaDetail.toppings.filter(
                            (selectedTopping) =>
                              selectedTopping.name !== topping
                          )
                        )
                  }
                  name={topping}
                />
              }
              label={topping}
              key={topping + idx}
            />
          ))}
        </FormGroup>
      </FormControl>
      <TextField
        type="number"
        value={pizzaDetail.quantity}
        onChange={({ target: { value } }) =>
          handleChange("quantity", Number(value))
        }
        InputProps={{
          inputProps: {
            min: 1,
          },
        }}
        label="Quantity"
      />
      <Button
        size="medium"
        variant="contained"
        color="primary"
        onClick={() =>
          onAdd({ target: { id: "pizza", value: [...pizza, pizzaDetail] } })
        }
      >
        Add to order
      </Button>
      <Cart pizza={[...pizza, pizzaDetail]} />
    </>
  );
};
