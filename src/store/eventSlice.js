// Slice for saving event deatils and functionalities

import { createSlice } from "@reduxjs/toolkit";

// Sample data for viewing some events.

const initialState = [
  {
    id: 1,
    name: "Tech Conference",
    venue: "New York",
    date: "2025-05-20",
    time: "10:00 AM",
    organizer: "John Doe",
    contact: "+1 234 567 8901",
  },
  {
    id: 2,
    name: "Music Fest",
    venue: "Los Angeles",
    date: "2025-05-21",
    time: "06:30 PM",
    organizer: "Emma Watson",
    contact: "+1 345 678 9012",
  },
  {
    id: 3,
    name: "Startup Pitch",
    venue: "San Francisco",
    date: "2025-05-22",
    time: "02:00 PM",
    organizer: "Elon Musk",
    contact: "+1 456 789 0123",
  },
  {
    id: 4,
    name: "AI & Robotics",
    venue: "Boston",
    date: "2025-05-23",
    time: "01:00 PM",
    organizer: "Sophia Lee",
    contact: "+1 567 890 1234",
  },
  {
    id: 5,
    name: "Art Exhibition",
    venue: "Chicago",
    date: "2025-05-24",
    time: "11:00 AM",
    organizer: "Leonardo Da Vinci",
    contact: "+1 678 901 2345",
  },
  {
    id: 6,
    name: "Gaming Expo",
    venue: "Seattle",
    date: "2025-05-25",
    time: "04:00 PM",
    organizer: "Mark Johnson",
    contact: "+1 789 012 3456",
  },
];

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
// adding, reoving and editing functionality.
    addEvent: (state, action) => {
      const newEvent = {
        id: state.length + 1,
        name: action.payload.name || "Untitled Event",
        venue: action.payload.venue || "Unknown Venue",
        date: action.payload.date || "No Date",
        time: action.payload.time || "No Time",
        organizer: action.payload.organizer || "Anonymous",
        contact: action.payload.contact || "No Contact",
      };
      state.push(newEvent);
    },
    deleteEvent: (state, action) => {
      return state.filter(event => event.id !== action.payload);
    },
    editEvent: (state, action) => {
      const index = state.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload }; // Merge updated fields
      }
    },
  },
});

export const { addEvent, deleteEvent, editEvent } = eventSlice.actions;
export default eventSlice.reducer;
