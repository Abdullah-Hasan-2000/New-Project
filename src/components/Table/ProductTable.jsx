import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ProductTable({ refresh }) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Failed to fetch posts:', err));
  }, [refresh]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="posts table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Views</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell align="right">{post.views}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
