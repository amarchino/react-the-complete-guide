import classes from './Card.module.css';

export default function Card({ style, children }) {
  return <div className={classes.card} style={style}>{children}</div>;
};
