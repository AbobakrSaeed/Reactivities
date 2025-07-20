import { useMemo, useState } from "react";
import axios from "axios";
import { debounce } from "@mui/material";

export default function useLocationSuggestions() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const locationIqKey = "pk.7c153c18ab7a42cf0b9ed472db295901";
  const locationUrl = `https://api.locationiq.com/v1/autocomplete?key=${locationIqKey}&limit=5&dedupe=1&`;

  const fetchSuggestions = useMemo(
    () =>
      debounce(async (query) => {
        if (!query || query.length < 3) {
          setSuggestions([]);
          return;
        }

        setLoading(true);
        try {
          const response = await axios.get(`${locationUrl}q=${query}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error("Failed to fetch suggestions:", error);
        } finally {
          setLoading(false);
        }
      }, 500),
    [locationUrl]
  );

  return { suggestions, loading, fetchSuggestions, setSuggestions };
}
