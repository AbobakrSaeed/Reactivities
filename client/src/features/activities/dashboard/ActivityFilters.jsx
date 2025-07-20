import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterListIcon from '@mui/icons-material/FilterList';
import Calendar from 'react-calendar';

const ActivityFilters = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState('All events');

  const filters = ['All events', "I'm going", "I'm hosting"];

  return (
    <Box display="flex" flexDirection="column" gap={3} width="100%">
      {/* Filter Box */}
      <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
          display="flex"
          alignItems="center"
          gap={1}
          mb={1}
        >
          <FilterListIcon fontSize="small" />
          Filters
        </Typography>

        <List disablePadding>
          {filters.map((filter) => (
            <ListItemButton
              key={filter}
              selected={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
              sx={{ borderRadius: 1 }}
            >
              <ListItemText primary={filter} />
            </ListItemButton>
          ))}
        </List>
      </Paper>

      {/* Calendar Box */}
      <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
          display="flex"
          alignItems="center"
          gap={1}
          mb={2}
        >
          <CalendarTodayIcon fontSize="small" />
          Select date
        </Typography>

        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={({ date, view }) =>
            view === 'month' &&
            date.toDateString() === selectedDate.toDateString()
              ? 'highlight'
              : null
          }
        />
      </Paper>

      {/* Custom style for selected date */}
      <style>{`
        .highlight {
          background-color:rgb(37, 111, 164) !important;
          border-radius: 4px;
        }
      `}</style>
    </Box>
  );
};

export default ActivityFilters;
