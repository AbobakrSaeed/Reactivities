/* eslint-disable react/prop-types */
import { Card, Typography, Grid } from "@mui/material";
import { useParams } from "react-router";
import useActivities from "../../../libs/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSideBAr";

const ActivityDetailsPage = () => {
  const params = useParams();

  const { activity } = useActivities(params.id);

  if (!activity) return <Typography>Activity not found</Typography>;

  return (
    <Card sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={10}>
          <ActivityDetailsHeader activity={activity} />
          <ActivityDetailsInfo activity={activity} />
          <ActivityDetailsChat activity={activity} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ActivityDetailsSidebar />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ActivityDetailsPage;
// /* eslint-disable react/prop-types */
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from "@mui/material";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import { Link, useNavigate, useParams } from "react-router";
// import useActivities from "../../../libs/hooks/useActivities";

// const ActivityDetailsPage = () => {
//   const params = useParams();
//   const navigate = useNavigate();

//   const { activity } = useActivities(params.id);

//   if (!activity) return <Typography>Activity not found</Typography>;

//   const { id, title, date, description, category } = activity;

//   const formattedDate = new Date(date).toLocaleDateString(undefined, {
//     weekday: "short",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });

//   const imageSrc = category
//     ? `/images/categoryImages/${category}.jpg`
//     : "/images/categoryImages/placeholder.jpg";
//   return (
//     <Card sx={{ maxWidth: 550, mt: 5, boxShadow: 5, borderRadius: 3 }}>
//       <CardMedia
//         component="img"
//         height="250"
//         image={imageSrc}
//         alt={`${category} image`}
//       />

//       <CardContent>
//         <Typography gutterBottom variant="h5">
//           {title}
//         </Typography>

//         <Typography
//           variant="body2"
//           color="text.secondary"
//           display="flex"
//           alignItems="center"
//           gap={1}
//           mb={1}
//         >
//           <CalendarMonthIcon fontSize="small" />
//           {formattedDate}
//         </Typography>

//         <Typography variant="body1">{description}</Typography>
//       </CardContent>

//       <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
//         <Button
//           component={Link}
//           to={`/form/${id}`}
//           variant="contained"
//           color="primary"
//         >
//           Edit
//         </Button>
//         <Button
//           variant="outlined"
//           color="error"
//           onClick={() => navigate("/activities")}
//         >
//           Cancel
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default ActivityDetailsPage;
