import { useStore } from "../../libs/hooks/useStore";
import { Observer } from "mobx-react";
import { ButtonGroup, Button, Typography } from "@mui/material";
export const CounterStore1 = () => {
  const { counterStore } = useStore();
  return (
    <>
      <Observer>
        {() => (
          <>
            <Typography variant="h4">{counterStore.title}</Typography>
            <Typography variant="h5">The count is: {counterStore.count}</Typography>
          </>
        )}
      </Observer>

      <ButtonGroup>
        <Button onClick={counterStore.increment}>Increment</Button>
        <Button onClick={counterStore.decrement}>Decrement</Button>
      </ButtonGroup>
    </>
  );
};
