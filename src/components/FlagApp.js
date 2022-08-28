import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const FlagApp = () => {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry Something went wrong",
        });
      }
    };

    fetchData();
  }, []);
  const { loading, errorMessage, countries } = countryState;
  console.log("loading", loading);
  console.log("countries", countries);
  console.log("errorMessage", errorMessage);

  const [selectedCountry, setSelectedCountry] = useState();
  console.log("selectedCountry", selectedCountry);

  //   find selected country data
  //search selected country
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });
  console.log("searchSelectedCountry", searchSelectedCountry);

  return (
    <React.Fragment>
      <div>
        <div>
          {/* header section */}
          <div>
            
          </div>

          {/* body section */}
          <div>
              { loading === true?
               <div>
                   <p>...loading</p>
               </div>:
                  <div
                  //flag app wrapper
                  >
            
              <div>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className='country sub-input'
                  >
                  <option>--Select Country--</option>
                  {countries.map((item) => {
                      return (
                          <option key={uuidv4()} value={item.name.common}>
                        {item.name.common}
                      </option>
                    );
                })}
                </select>
              </div>
              <div>
                {searchSelectedCountry && (
                    <div>
                    <div>
                      <img
                        className='flag'
                        src={
                            searchSelectedCountry &&
                            searchSelectedCountry.flags.png
                        }
                        alt=""
                        />
                    </div>
                    <div>
                      <p
                      className='code'
                      >
                        {searchSelectedCountry &&
                          searchSelectedCountry.idd.root}
                        {searchSelectedCountry &&
                          searchSelectedCountry.idd.suffixes}
                      </p>
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="sub-input"
                        />
                    </div>
                  </div>
                )}
              </div>
              
            </div>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FlagApp;