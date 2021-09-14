
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { colors } from '@material-ui/core';

const labels = {
  0.5: '0.5',
  1: '1',
  1.5: '1.5',
  2: '2',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4',
  4.5: '4.5',
  5: '5.0',
};

const useStyles = makeStyles({
  root: {
    width: 500,
    display: 'flex',
    alignItems: 'center',
    color: '#FF6600',
  },
});

export default function HoverRating() {
  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Rating
        name="hover-feedback"
        value={value}
        size="small"
        colors={colors}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>} 
      <span className={classes.reviews} style={{ color: 'gray'}} >
      &emsp;7 reviews 19 buyers
      </span>
    </div>
  );
}