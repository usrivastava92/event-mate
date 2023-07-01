// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Our Star Vendor Partners
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Look at what our star partners have to say about us.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROu78KA_037jYg30etatGJjjF1joaLMrghY80W9h3TAasCM1ldnahn0NZbgDibiqNP7qU&usqp=CAU"
                }
                name="Aishwarya Rai"
                position={{ color: "info", label: "Wedding Planner" }}
                description="Event Collaborate is an excellent platform that brings professionals together, enabling us to collectively make an impactful contribution."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={"https://i.pinimg.com/564x/4d/15/1e/4d151ef521d81ad4c76d4558a24220d0.jpg"}
                name="Kartik Aryan"
                position={{ color: "info", label: "Caterer" }}
                description={`${process.env.REACT_APP_TITLE} is a wonderful platform, that brings all us professionals together to make an impact`}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={
                  "https://www.indiancinemagallery.net/wp-content/photos/celebs/kiara-advani/Kiara-Advani-during-her-interview-19.jpg"
                }
                name="Kiara Advani"
                position={{ color: "info", label: "Photoshoot Specialist" }}
                description="Event Engage is an exceptional platform that gathers professionals, enabling us to unite and make a significant impact."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={"https://assets.telegraphindia.com/telegraph/58BDA7969B43B_IMAGE1_.jpg"}
                name="Varun Dhawan"
                position={{ color: "info", label: "Destination Wedding Planner" }}
                description="Event Connect is an incredible platform that fosters collaboration among professionals, empowering us to make a real difference."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
