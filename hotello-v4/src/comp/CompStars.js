
import React, { Component } from 'react';
import HotelData from "../hoteldata.json";

class StarRating extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (<div>{JSON.stringify(HotelData.hotel_rating)}</div>
      );
  }
}

export default StarRating;