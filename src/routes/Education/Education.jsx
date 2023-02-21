import React from "react";
import "./Education.css";
import Bounce from "react-reveal";
import { useEffect } from "react";

export function Education() {
  // Here useEffect is used to apply some styles in body
  useEffect(() => {
    document.body.className = "educationBody";
    return () => {
      document.body.className = "";
    };
  }, []);

  return ( 
    <>
      {" "}
        <div className="Education">
        <div className="pageTitle">
          <Bounce>
            <h2>Education</h2>
          </Bounce>
        </div>
        <div className="entries">
          <div className="entry">
            <div className="title big">2018-21</div>
            <h2>BSC in computer science</h2>
            <div className="body ">
              <div className="educationImageDiv">
                <img
                  src="https://4.bp.blogspot.com/-9F6RFVCuHAQ/WSuJZyUa5SI/AAAAAAAAsrE/xKaywoWccjgvJW9Zg940c5RsqO6Aa5LtACLcB/s1600/z1594.png"
                  alt="png"
                  className="educationImage"
                />
              </div>
              <p>
                Srinivasan college of arts and science        
                <br /> perumbalur <br/>
              </p>
            </div>
          </div>
          <div className="entry school">
            <div className="title big">2018</div>
            <h2>12th standard</h2>
            <div className="body">
              <div className="educationImageDiv">
                <img
                  src="https://i.vimeocdn.com/portrait/40535108_640x640"
                  alt=""
                  className="educationImage"
                />
              </div>
              <p>
                Sowdambikaa group of school <br /> Thuraiyur,trichy,Tamilnadu {" "}
                <br /> Score : 45%
              </p>
            </div>
          </div>

          <div className="entry school">
            <div className="title">2016</div>
            <h2>10th standard</h2>
            <div classNcame="body"> 
              <p>
                Sowdambikaa group of school <br /> Thuraiyur,trichy,Tamilnadu {" "}
                <br /> Score : 70%
              </p>
            </div>
          </div>
        
        </div>
      </div>
                                                                                                                                                                                                               
<label htmlFor=""></label>
    </>
  );
}
