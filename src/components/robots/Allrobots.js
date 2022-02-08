import React, { useEffect, useState } from "react";
import {
  robotDetailAction,
  addToCard,
} from "../../redux/actions/robotDetailAction";
import { connect } from "react-redux";
import AlertMessage from "../AlertMessage";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Container,
  Typography,
} from "@mui/material";
import demoimg from "../../assets/image/rob.png";
import { MyCardComponent } from "./style";
import { toastr } from "react-redux-toastr";
import CartItems from "./CartItems";
import Moment from "react-moment";
import CurrencyFormat from "react-currency-format";
const action = {
  robotDetailAction,
  addToCard,
};
function Allrobots({ robotDetailAction, robotArray, addToCard, cardArray }) {
  const [search, setSearch] = useState([]);
  const [searchField, setSearchField] = useState([]);
  const [totalprice, setTotalPrice] = useState(0);
  useEffect(() => {
    robotDetailAction();
  }, []);
  useEffect(() => {
    const material = robotArray.map((item) => {
      return item;
    });
    setSearch(material);
  }, [robotArray]);
  const cardClick = (data) => {
    if (
      data.material == cardArray.map((item) => item.material) ||
      cardArray.map((item) => item?.material).includes(data.material)
    ) {
      toastr.warning("Warning", "You Can Add Only 1 Same Item");
    } else if (cardArray.length === 5) {
      toastr.warning("Warning", "You Can Add Only 5 items");
    } else {
      addToCard(data);
    }
  };
  const onChangeSearch = (e) => {
    setSearchField([(e.target.name = e.target.value)]);
    if (e.target.value.length === 0 && robotArray.length > 0) {
      setSearch(robotArray);
    }
  };
  const onClickSearch = () => {
    if (
      searchField[0] === "" &&
      searchField.filter(function (e) {
        return e.replace(/(\r\n|\n|\r)/gm, "");
      })
    ) {
    } else if (searchField.length > 0) {
      setSearch(search.filter((item) => item.material == searchField));
    } else {
    }
  };

  const handleTotalPrice = (item, price, myCheck) => {
    setTotalPrice(price);
  };

  return (
    <React.Fragment>
      <MyCardComponent>
        <Container>
          <Grid container spacing={8}>
            <Grid item lg={8} md={8} sm={8} xs={12}>
              <Box mt={10}>
                <Grid container justifyContent="center">
                  <Grid item lg={8} md={8} sm={10} xs={10}>
                    <Grid container spacing={1}>
                      <Grid item lg={10} md={10} sm={9} xs={9}>
                        <TextField
                          id="outlined-basic"
                          label="Search"
                          variant="outlined"
                          size="small"
                          fullWidth
                          onChange={onChangeSearch}
                        />
                      </Grid>
                      <Grid item lg={2} md={2} sm={3} xs={3}>
                        <Button
                          variant="contained"
                          fullWidth
                          className="add-to-cart"
                          onClick={onClickSearch}
                        >
                          {" "}
                          Search{" "}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Box my={10}>
                  <Grid container justifyContent="center" spacing={3}>
                    {search.map((result) => {
                      return (
                        <>
                          <Grid item lg={4} md={4} sm={6} xs={12}>
                            <Card>
                              <CardMedia
                                component="img"
                                height="260"
                                width="100%"
                                image={result.image ? result.image : demoimg}
                                alt="green iguana"
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  className="card-name"
                                  component="div"
                                >
                                  {result.name}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="text.secondary"
                                  className="card-type"
                                >
                                  Status{" "}
                                  <span className="price-setting">
                                    {result.material}
                                  </span>
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="text.secondary"
                                  className="card-type"
                                >
                                  Price{" "}
                                  <span className="price-setting">
                                    <CurrencyFormat
                                      value={result.price}
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
                                    <Moment format="DD-MM-YYYY">
                                      {result.date}
                                    </Moment>
                                  </span>
                                </Typography>
                              </CardContent>
                              <CardActions>
                                <Box mb={1}>
                                  <Button
                                    size="small"
                                    variant="contained"
                                    className="add-to-cart"
                                    onClick={() => cardClick(result)}
                                  >
                                    Add to Cart
                                  </Button>
                                </Box>
                              </CardActions>
                            </Card>
                          </Grid>
                        </>
                      );
                    })}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Grid container spacing={2} justifyContent="center">
                {cardArray?.map((result_, index) => {
                  return (
                    <>
                      <CartItems
                        index={index}
                        result_={result_}
                        cardArray={cardArray}
                        price={result_.price}
                        priceAction={handleTotalPrice}
                      />
                    </>
                  );
                })}
              </Grid>
              {totalprice == 0 ? (
                ""
              ) : (
                <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Total Amount
                      <span className="price-setting">
                        <CurrencyFormat
                          value={totalprice}
                          displayType={"text"}
                          thousandSpacing={true}
                          thousandSeparator={true}
                          allowNegative={false}
                          prefix={"฿"}
                        />
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        </Container>
      </MyCardComponent>
      <AlertMessage />
    </React.Fragment>
  );
}
const mapsToprops = (state) => {
  return {
    robotArray: state.robotDetailReducer.robotArray || [],
    cardArray: state.addToCardReducer.cardArray || [],
  };
};

export default connect(mapsToprops, action)(Allrobots);
