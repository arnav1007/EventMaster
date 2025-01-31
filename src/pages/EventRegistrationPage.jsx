import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEvent } from "../store/eventSlice";
import { Box, TextField, Button, Typography, Card } from "@mui/material";
import { MobileDatePicker, MobileTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { toast } from "react-toastify";

const RegisterEventPage = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();

  // Handles form submission and stores new event
  const onSubmit = (data) => {
    const newEvent = {
      name: data.name.trim() || "Untitled Event",
      venue: data.venue.trim() || "Unknown Venue",
      date: data.date || "No Date",
      time: data.time || "No Time",
      organizer: data.organizer.trim() || "Anonymous",
      contact: data.contact.trim() || "No Contact",
      image: "https://via.placeholder.com/300",
    };
    dispatch(addEvent(newEvent));
    toast.success("Event Registered Successfully 🎉", { position: "top-right" });
    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Card sx={{ width: 400, p: 3, boxShadow: 5, borderRadius: "12px", background: "linear-gradient(135deg, #e3f2fd, #ffffff)" }}>
          <Typography variant="h5" sx={{ mb: 2, textAlign: "center", fontWeight: "bold", color: "#144987" }}>
            Register Your Event
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("name")} label="Event Name" fullWidth required sx={{ mb: 2 }} />
            <TextField {...register("venue")} label="Venue" fullWidth required sx={{ mb: 2 }} />
            <MobileDatePicker label="Date" onChange={(date) => setValue("date", date.format("YYYY-MM-DD"))} sx={{ width: "100%", mb: 2 }} />
            <MobileTimePicker label="Time" onChange={(time) => setValue("time", time.format("HH:mm"))} sx={{ width: "100%", mb: 2 }} />
            <TextField {...register("organizer")} label="Organized By" fullWidth required sx={{ mb: 2 }} />
            <TextField {...register("contact")} label="Contact Details" fullWidth required sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, background: "#144987" }}>
              Register Event
            </Button>
          </Box>
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default RegisterEventPage;
