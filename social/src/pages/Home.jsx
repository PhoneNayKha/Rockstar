import { Avatar, Card, CardContent, Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Post from "../components/Post";

async function fetchPosts() {
  const api = "http://localhost:8080/posts";
  const res = await fetch(api);

  return res.json();
}

export default function Home() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box sx={{ p: 2 }}>
      <CardContent>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </CardContent>
    </Box>
  );
}
