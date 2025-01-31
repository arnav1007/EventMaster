import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SiteFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #144987, #1e73c3)",
        color: "white",
        py: 3,
        textAlign: "center",
        mt: 4,
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.2)",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Footer Branding */}
      <Typography variant="h6" fontWeight="bold">
        EventMaster
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5, px: { xs: 2, md: 0 } }}>
        Connecting People, Creating Experiences
      </Typography>

      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 2 }}>
        {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((SocialIcon, index) => (
          <IconButton key={index} sx={{ color: "white", transition: "0.3s", "&:hover": { transform: "scale(1.2)", color: "#ffcc00" } }}>
            <SocialIcon fontSize="medium" />
          </IconButton>
        ))}
      </Box>

      {/* Copyright Notice */}
      <Typography variant="body2" sx={{ mt: 2, opacity: 0.7, px: { xs: 2, md: 0 } }}>
        © {new Date().getFullYear()} EventMaster. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default SiteFooter;
