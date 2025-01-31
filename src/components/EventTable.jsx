import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../store/eventSlice";
import { toast } from "react-toastify";

const EventTable = ({ events, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    toast.error("Event Deleted Successfully ❌", { position: "top-right" });
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflowX: "auto", // Enables horizontal scrolling on small screens
        maxWidth: "100%",
      }}
    >
      <Table sx={{ minWidth: 600 }}> {/* Ensures proper layout on wider screens */}
        <TableHead sx={{ bgcolor: "#144987" }}>
          <TableRow>
            {["Event Name", "Venue", "Date", "Time", "Organized By", "Contact", "Actions"].map((head, index) => (
              <TableCell
                key={index}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event, index) => (
            <TableRow
              key={index}
              sx={{
                bgcolor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                transition: "0.3s",
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
            >
              <TableCell sx={{ textAlign: "center", fontWeight: "500", fontSize: { xs: "0.9rem", md: "1rem" }, color: "#333", whiteSpace: "nowrap" }}>
                {event.name}
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "500", fontSize: { xs: "0.9rem", md: "1rem" }, color: "#555", whiteSpace: "nowrap" }}>
                {event.venue}
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "500", fontSize: { xs: "0.9rem", md: "1rem" }, color: "#777", whiteSpace: "nowrap" }}>
                {event.date}
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "500", fontSize: { xs: "0.9rem", md: "1rem" }, color: "#777", whiteSpace: "nowrap" }}>
                {event.time}
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "500", fontSize: { xs: "0.9rem", md: "1rem" }, color: "#777", whiteSpace: "nowrap" }}>
                {event.organizer}
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "500", fontSize: { xs: "0.9rem", md: "1rem" }, color: "#777", whiteSpace: "nowrap" }}>
                {event.contact}
              </TableCell>
              <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{
                      fontSize: { xs: "0.8rem", md: "0.9rem" },
                      fontWeight: "bold",
                      transition: "0.3s",
                      "&:hover": { transform: "scale(1.1)", background: "#43a047" },
                    }}
                    onClick={() => onEdit(event)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{
                      fontSize: { xs: "0.8rem", md: "0.9rem" },
                      fontWeight: "bold",
                      transition: "0.3s",
                      "&:hover": { transform: "scale(1.1)", background: "#d32f2f" },
                    }}
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventTable;
