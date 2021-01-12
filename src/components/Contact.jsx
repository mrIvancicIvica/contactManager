import { useState, useContext } from "react";
import { ContactContext } from "../Contexts/ContactContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 400,
    marginTop: 25,
  },
  media: {
    height: 140,
  },
});

const Contacts = ({ name, email, phone, id }) => {
  const classes = useStyles();

  const [showinfo, setShowinfo] = useState(false);
  const { dispatch } = useContext(ContactContext);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {showinfo ? (
            <>
              <Typography variant="body2" color="textSecondary" component="h4">
                Email: {email}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h4">
                Phone: {phone}
              </Typography>
            </>
          ) : null}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch({ type: "REMOVE_CONTACT", id })}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => setShowinfo(!showinfo)}
        >
          Show {showinfo ? "Less" : "More"}
        </Button>
      </CardActions>
    </Card>
  );
};
export default Contacts;
