import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardActions, CardContent, CardMedia, Avatar } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

const useStyles = makeStyles((theme)=>({
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 240
    },
    cardActions: {
        display: 'flex',
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    }
}))

function Article ({article}) {
    const classes = useStyles();
    const {image, title, text, avatar, author, date, subject} = article;
    console.log(article)
    return (
        <Card className={classes.card}>
        <CardActionArea>
          <CardMedia 
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.subject}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src={avatar} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {author}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                {date}
              </Typography>
            </Box>
          </Box>
          <Box><BookmarkBorderIcon /></Box>
        </CardActions>
      </Card>
    )
}

export default Article