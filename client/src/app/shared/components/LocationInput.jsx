import { useController } from "react-hook-form";
import { Box, List, TextField, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import useLocationSuggestions from "../../../libs/hooks/useLocationSuggestions";

export default function LocationInput(props) {
  const { field, fieldState } = useController({ ...props });

  const [inputValue, setInputValue] = useState(field.value || "");

  useEffect(() => {
    if (field.value && typeof field.value === "object") {
      setInputValue(field.value.venue || "");
    } else {
      setInputValue(field.value || "");
    }
  });

  const { suggestions, loading, fetchSuggestions, setSuggestions } =
    useLocationSuggestions();

  const handleChange = async (value) => {
    field.onChange(value);
    await fetchSuggestions(value);
  };

  const handleSelect = (suggestion) => {
    const city =
      suggestion.address.city ||
      suggestion.address.town ||
      suggestion.address.village;
    const venue = suggestion.display_name;
    const latitude = suggestion.lat;
    const longitude = suggestion.lon;

    setInputValue(venue);
    field.onChange({ city, venue, latitude, longitude });
    setSuggestions([]);
  };
  //////////
  return (
    <Box>
      <TextField
        {...props}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        fullWidth
        variant="outlined"
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
      {loading && <div>Loading...</div>}

      {suggestions.length > 0 && (
        <List sx={{ border: 1 }}>
          {suggestions.map((suggestion) => (
            <ListItemButton
              divider
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.display_name}
            </ListItemButton>
          ))}
        </List>
      )}
    </Box>
  );
}
