import React, { useState } from "react";
import axios from "axios";
import "./Header.css";

function Header() {
  const [query, setQuery] = useState([""]);
  const APIkey = "at_qKYpEv26BnSr0rb8inccQrKCNoFAf";
  const RequestUrl = `https://geo.ipify.org/api/v1?apiKey=${APIkey}&ipAddress=${query}`;

  const [ip, setIP] = useState([]);
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);
  const [country, setCountry] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(RequestUrl);

    setIP(result.data.ip);
    setLat(result.data.location.lat);
    setLng(result.data.location.lng);
    setCountry(result.data.location.country);
    setQuery("");
  };
  const onChange = (eventHandle) => {
    setQuery(eventHandle.target.value);
  };
  const onClick = (eventHandle) => {
    eventHandle.preventDefault();
    fetchData();
  };
  return (
    <div>
      <img
        className="header_img"
        src="https://censys.io/static/img/censys.png"
        alt=""
      />
      <div className="search-wrap">
        <input
          onChange={onChange}
          value={query}
          className="search-input"
          type="text"
          placeholder="IPv4"
        ></input>
        <button onClick={onClick} className="search-button">
          Search
        </button>
      </div>
      <div className="search-result">
        <p>
          {" "}
          Showing results for following IPv4 address:{" "}
          <p className="search-result-ip-color">{ip}</p>
        </p>
        <p> Latitude: {lat} </p>
        <p> Longitude: {lng} </p>
        <p> Country: {country} </p>
      </div>
    </div>
  );
}

export default Header;
