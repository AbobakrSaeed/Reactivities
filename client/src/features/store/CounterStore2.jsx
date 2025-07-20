// shorter way to use mobx store

import { useStore } from "../../libs/hooks/useStore";
import { observer } from "mobx-react";
import { ButtonGroup, Button, Typography, Box, ListItemText, List,Paper } from "@mui/material";
export const CounterStore2 = observer(() => {
  const { counterStore } = useStore();
  return (
    <>
    <Box display="flex" justifyContent={"space-between"}>
        <Box sx={{Width: '60%'}}>

      <Typography variant="h4">{counterStore.title}</Typography>
      <Typography variant="h5">The count is: {counterStore.count}</Typography>

      <ButtonGroup>
        <Button onClick={counterStore.increment}>Increment</Button>
        <Button onClick={counterStore.decrement}>Decrement</Button>
      </ButtonGroup>
        </Box>
        <Paper sx={{Width: '40%', p:3, mt:0}}>
        <Typography variant="h5">Events count:{counterStore.eventCount}</Typography>
        <List>
          {counterStore.events.map((event, index) => (
            <ListItemText key={index}>{event}</ListItemText>
          ))}
        </List>

        </Paper>
      </Box>
    </>
  );
});
