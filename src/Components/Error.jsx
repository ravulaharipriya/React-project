import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="parent">
      <div className="error-div">
        <h1 className="error-heading">404 NOT fOUND</h1>
        <img
          className="error-img"
          src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1880.jpg?size=626&ext=jpg&ga=GA1.1.242411196.1701943679&semt=ais"
          alt=""
        />
        <Link to="/" className="btn">Back To Home</Link>
        
      
      </div>
      
    </div>
  );
}
