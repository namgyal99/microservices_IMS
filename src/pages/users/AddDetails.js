import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  image: {
      width: 345,
      marginRight: 20
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DetailsPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent style={{paddingLeft: 0, paddingTop: 0}}>
      <img className={classes.image} src={require('../../images/apple.jpg')} />
        <Typography variant="body2" color="textSecondary" component="p">
          Apple on October 13, 2020 introduced its newest flagship iPhones, the iPhone 12 and iPhone 12 mini, which offer powerful features at an affordable price tag. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Information about Iphone:</Typography>
          <Typography paragraph>
            The 6.1-inch iPhone 12 is a successor to the iPhone 11, while the 5.4-inch iPhone 12 is an all-new size and marks the smallest iPhone Apple has introduced since the 2016 iPhone SE.
           Aside from screen size and battery size, the two phones are technically identical.
           With its small size, the iPhone 12 mini will be ideal for those who prefer an iPhone that can be used one-handed.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

