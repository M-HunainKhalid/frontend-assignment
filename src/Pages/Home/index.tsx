import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={() => history.push("/order")}
    >
      Let's Order!
    </Button>
  );
};
