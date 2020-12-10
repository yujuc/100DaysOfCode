import React from 'react';
import './App.css';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from './theme';

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import Article from './Article';
import { articleData } from './articleData';

const useStyles = makeStyles((theme)=>({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1607419727375-6dd45089fced?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}))


function App() {
  const articles = articleData;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static" className={classes.appBar}>
            <ToolBar>
              <Typography variant="h6" color="primary">
                Blog
              </Typography>
            </ToolBar>
        </AppBar>

        <Box className={classes.hero}>
          <Box>React Blog</Box>
        </Box>

        <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>

          <Grid container spacing={3}>
            {articles.map((article) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Article key={article.id} article={article} />
                </Grid>
            ))}   
          </Grid>
          <Box my={4} className={classes.paginationContainer}>
            <Pagination count={10} />
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
