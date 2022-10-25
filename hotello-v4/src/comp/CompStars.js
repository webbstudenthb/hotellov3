//Detta är en fil som inte används. Vi försökte att ta bort samt flytta koden till ett annat projekt. Men då krashade appen. Därför låter vi dem vara kvar


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