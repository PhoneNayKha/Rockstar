import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
export default function Comment({ comment }) {
  return (
    <Card
      sx={{
        mb: 2,
        background: "transparent",
        border: `1px solid ${grey[700]}`,
      }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Avatar />
          <Typography>{comment.user.name}</Typography>
        </Box>
        <Typography>{comment.content}</Typography>
      </CardContent>
    </Card>
  );
}
