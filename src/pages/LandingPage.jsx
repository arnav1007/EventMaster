// This is the homepage where user First Lands. It shows basic features of the App as well as has 2 buttons to explore and register events.

import { Box, Typography, Grid, Card, CardContent, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const featuresData = [
  { title: "Event Listings", description: "Discover and browse through various events with ease." },
  { title: "Quick Registrations", description: "Sign up for events in just a few clicks." },
  { title: "Event Creation", description: "Organize and manage your own events effortlessly." },
  { title: "Instant Updates", description: "Receive real-time notifications for event changes." },
];

const LandingPage = () => {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 6 }}>
      <Container maxWidth="lg">
        
        <Box textAlign="center" sx={{ mb: 5, px: { xs: 2, md: 0 } }}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#144987", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
            Welcome to EventMaster
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, color: "#555", fontSize: { xs: "1rem", md: "1.2rem" } }}>
            Your go-to platform for managing, discovering, and participating in events effortlessly.
          </Typography>
        </Box>

        {/* Features Section- Cards showing description */}
        <Grid container spacing={3} justifyContent="center">
          {featuresData.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 2, borderRadius: "10px", transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "#144987" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Explore and Register Events Buttons */}
        <Box textAlign="center" sx={{ mt: 6, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" component={Link} to="/register" sx={{ px: { xs: 3, md: 5 }, py: { xs: 1, md: 1.5 } }}>
            Register an Event
          </Button>
          <Button variant="outlined" component={Link} to="/events" sx={{ px: { xs: 3, md: 5 }, py: { xs: 1, md: 1.5 } }}>
            Browse Events
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
