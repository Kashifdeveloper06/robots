import React, { useEffect, useState } from "react";
import {
  robotDetailAction,
  addToCard,
} from "../../redux/actions/robotDetailAction";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonGroup,
} from "@mui/material";
import demoimg from "../../assets/image/rob.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { toastr } from "react-redux-toastr";
import Moment from "react-moment";
import CurrencyFormat from "react-currency-format";
const action = {
  robotDetailAction,
  addToCard,
};

function CartItems({
  index,
  result_,
  cardArray,
  price,
  priceAction,
}) {
  const [decPrice, setPrice] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const [myCkeck, setCheck] = useState();

  useEffect(() => {
    setUnitPrice(price);
  }, [price]);

  useEffect(() => {
    if (unitPrice && decPrice) {
      const Q_Price = unitPrice * decPrice;
      priceAction?.(result_, Q_Price, decPrice);
    }
  }, [decPrice, unitPrice]);

  const handleButtonClick = (price, check, e) => {
    setCheck(check);
    if (check == 0 && decPrice !== 1) {
      setPrice(decPrice - 1);
    } else if (check == 1) {
      let totalStock = cardArray.map((item, ind) => {
        if (result_.id == item.id) {
          return item.stock;
        }
      });
      if (decPrice == totalStock[index]) {
        toastr.warning("Warning", "Stock is over");
      } else {
        setPrice(decPrice + 1);
      }
    } else {
    }
  };
  return (
    <React.Fragment>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box mt={index == 0 && index == 1 ? 6 : 2}>
          <Card>
            <CardMedia
              component="img"
              height="260"
              width="100%"
              image={result_.image || demoimg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom className="card-name" component="div">
                {result_.name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                className="card-type"
              >
                Status <span className="price-setting">{result_.material}</span>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                className="card-type"
              >
                Price{" "}
                <span className="price-setting">
                  <CurrencyFormat
                    value={result_.price}
                    displayType={"text"}
                    thousandSpacing={true}
                    thousandSeparator={true}
                    prefix={"฿"}
                  />
                </span>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                className="card-type"
              >
                Date{" "}
                <span className="price-setting">
                  <Moment format="DD-MM-YYYY">{result_.date}</Moment>
                </span>
              </Typography>
            </CardContent>
            <CardActions>
              <Box mb={1}>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  <Button
                    onClick={(index) =>
                      handleButtonClick(result_.price, 0, index)
                    }
                    size="small"
                  >
                    <RemoveIcon />
                  </Button>
                  <Button className="add-to-cart" size="small">
                    {decPrice}
                  </Button>
                  <Button
                    onClick={(index) =>
                      handleButtonClick(result_.price, 1, index)
                    }
                    size="small"
                  >
                    {" "}
                    <AddIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
const mapsToprops = (state) => {
  return {
    robotArray: state.robotDetailReducer.robotArray || [],
  };
};

export default connect(mapsToprops, action)(CartItems);
