import { useSelector } from "react-redux";
import { useState } from "react";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import EventCard from "../components/EventCard";
import EventTable from "../components/EventTable";

const EventsListingPage = () => {
  const events = useSelector((state) => state.events);
  const [view, setView] = useState("card");
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredEvents = selectedDate
    ? events.filter((event) => dayjs(event.date).isSame(selectedDate, "day"))
    : events;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: { xs: 2, sm: 4 }, bgcolor: "#f0f5fa", minHeight: "100vh" }}>
        {/* View & Filter Section */}
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            p: 2,
            mb: 3,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #ffffff, #e3f2fd)",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
            <Button variant={view === "card" ? "contained" : "outlined"} onClick={() => setView("card")}>
              Card View
            </Button>
            <Button variant={view === "table" ? "contained" : "outlined"} onClick={() => setView("table")}>
              Table View
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
            <DatePicker label="Filter by Date" value={selectedDate} onChange={(date) => setSelectedDate(date)} sx={{ width: 200 }} />
            <Button variant="contained" color={selectedDate ? "secondary" : "primary"} onClick={() => setSelectedDate(null)}>
              {selectedDate ? "Remove Filters" : "Apply Filters"}
            </Button>
          </Box>
        </Paper>

        {/* Display Events */}
        {view === "card" ? (
          <Grid container spacing={3} justifyContent="center">
            {filteredEvents.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EventTable events={filteredEvents} />
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default EventsListingPage;
