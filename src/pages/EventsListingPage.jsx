// This page shows the events(saved by default + added by user). It has a Tab thathas 2 buttons to switch the page views and a date filter option.

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Box, Button, Paper, Stack, Container, Grid, Modal, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import EventCard from "../components/EventCard";
import EventTable from "../components/EventTable";
import { editEvent } from "../store/eventSlice";
import { toast } from "react-toastify";

const EventsListingPage = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [view, setView] = useState("card");
  const [selectedDate, setSelectedDate] = useState(null);
  const [editEventData, setEditEventData] = useState(null);
  const [open, setOpen] = useState(false);

  const filteredEvents = selectedDate
    ? events.filter((event) => dayjs(event.date).isSame(selectedDate, "day"))
    : events;

  const handleEdit = (event) => {
    setEditEventData(event);
    setOpen(true); // Open the modal
  };

  const handleClose = () => {
    setOpen(false);
    setEditEventData(null);
  };

  const handleSaveEdit = () => {
    dispatch(editEvent(editEventData));
    toast.success("Event Updated Successfully ✅");
    handleClose();
  };

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
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
            <Button variant={view === "card" ? "contained" : "outlined"} onClick={() => setView("card")}>
              Card View
            </Button>
            <Button variant={view === "table" ? "contained" : "outlined"} onClick={() => setView("table")}>
              Table View
            </Button>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
            <DatePicker label="Filter by Date" value={selectedDate} onChange={(date) => setSelectedDate(date)} sx={{ width: 200 }} />
            <Button variant="contained" color={selectedDate ? "secondary" : "primary"} onClick={() => setSelectedDate(null)}>
              {selectedDate ? "Remove Filters" : "Apply Filters"}
            </Button>
          </Stack>
        </Paper>

        {/* Display Events */}
        {view === "card" ? (
          <Container maxWidth="lg">
            <Grid container spacing={3} justifyContent="center">
              {filteredEvents.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.id}>
                  <EventCard event={event} onEdit={handleEdit} />
                </Grid>
              ))}
            </Grid>
          </Container>
        ) : (
          <EventTable events={filteredEvents} onEdit={handleEdit} />
        )}

        {/* Edit Event Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "white",
              p: 3,
              boxShadow: 24,
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6" textAlign="center" sx={{ mb: 2 }}>
              Edit Event
            </Typography>
            <TextField
              label="Event Name"
              fullWidth
              sx={{ mb: 2 }}
              value={editEventData?.name || ""}
              onChange={(e) => setEditEventData({ ...editEventData, name: e.target.value })}
            />
            <TextField
              label="Venue"
              fullWidth
              sx={{ mb: 2 }}
              value={editEventData?.venue || ""}
              onChange={(e) => setEditEventData({ ...editEventData, venue: e.target.value })}
            />
            <DatePicker
              label="Date"
              value={editEventData?.date ? dayjs(editEventData.date) : null}
              onChange={(date) => setEditEventData({ ...editEventData, date: date.format("YYYY-MM-DD") })}
              sx={{ mb: 2, width: "100%" }}
            />
            <TextField
              label="Time"
              fullWidth
              sx={{ mb: 2 }}
              value={editEventData?.time || ""}
              onChange={(e) => setEditEventData({ ...editEventData, time: e.target.value })}
            />
            <TextField
              label="Organized By"
              fullWidth
              sx={{ mb: 2 }}
              value={editEventData?.organizer || ""}
              onChange={(e) => setEditEventData({ ...editEventData, organizer: e.target.value })}
            />
            <TextField
              label="Contact"
              fullWidth
              sx={{ mb: 2 }}
              value={editEventData?.contact || ""}
              onChange={(e) => setEditEventData({ ...editEventData, contact: e.target.value })}
            />
            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Button variant="contained" color="success" onClick={handleSaveEdit}>
                Save Changes
              </Button>
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Box>
    </LocalizationProvider>
  );
};

export default EventsListingPage;
