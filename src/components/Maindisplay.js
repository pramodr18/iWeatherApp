import React, { useEffect, useState } from "react";
import humidity from "./images/humidity.png";
import rain from "./images/rain.png";
import pressure from "./images/fresh-air.png";

function Maindisplay() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mysore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=11d9492bcb02217390d3b17179342b52`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div
        className=" container  border border-dark rounded-4 shadow p-3 mb-5 bg-white rounded"
        style={{
          marginTop: "3rem",
          width: "22rem",
          height: "27rem",
          backgroundImage: "linear-gradient(18deg, #0000fdde, #00e8ff)",
          color: "white",
        }}
      >
        <form className="d-flex my-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Start Typing Your City Name.."
            aria-label="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button className="btn btn-primary " type="submit" onClick={() => alert("It's dummy button bro!")}>
            Search
          </button>
        </form>
        {!city ? (
          <>
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
                marginTop: "4rem",
              }}
            >
              No Data found :(
            </p>
            <p style={{ marginLeft: "3rem", marginTop: "-23px" }}>
              Tip : Try Searching Other Cities
            </p>
          </>
        ) : (
          <>
            <div
              className="container d-flex-row "
              style={{
                marginLeft: "3rem",
                marginTop: "4rem",
              }}
            >
              <img
                src={rain}
                alt=""
                style={{ width: "28%", marginTop: "-18%" }}
              />
              <h1 style={{ fontWeight: "500", fontSize: "3rem" }}>{search}</h1>
              <h3>{city.temp}°C</h3>
              <h5>
                Min : {city.temp_min} | Max : {city.temp_max}
              </h5>
              <div
                className="container d-flex"
                style={{ marginLeft: "-29px", marginTop: "38px" }}
              >
                <h6 className="d-flex mx-">
                  <img src={humidity} alt="" style={{ width: "25%" }} />
                  Humidity <br />
                  {city.pressure}%
                </h6>
                <h6 className="d-flex">
                  {" "}
                  <img src={pressure} alt="" style={{ width: "25%" }} />
                  Pressure <br /> {city.humidity}{" "}
                </h6>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Maindisplay;
