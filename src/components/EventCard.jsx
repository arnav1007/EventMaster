import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../store/eventSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const EventCard = ({ event, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    toast.error("Event Deleted Successfully ❌", { position: "top-right" });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 400 },
          borderRadius: "12px",
          textAlign: "center",
          p: 2,
          background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#144987" }}>
            {event.name}
          </Typography>
          <Typography variant="body2">📍 {event.venue}</Typography>
          <Typography variant="body2">📅 {event.date} | 🕒 {event.time}</Typography>
          <Typography variant="body2">👤 Organized By: {event.organizer}</Typography>
          <Typography variant="body2">📞 Contact: {event.contact}</Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1, flexWrap: "wrap" }}>
            <Button variant="contained" color="success" onClick={() => onEdit(event)}>
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={() => handleDelete(event.id)}>
              Delete
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EventCard;
