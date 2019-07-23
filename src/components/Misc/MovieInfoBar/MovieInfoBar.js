import React from "react";
import "./MovieInfoBar.css";

const MovieInfoBar = props => {
  const calcTime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  }

  const convertMoney = (money) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  }

  return (
    <div className="movieinfobar">
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <span className="movieinfobar-info">
            Running Time : {calcTime(props.time)}
          </span>
        </div>
        <div className="movieinfobar-content-col">
          <span className="movieinfobar-info">
            Budget : {convertMoney(props.budget)}
          </span>
        </div>
        <div className="movieinfobar-content-col">
            <span className="movieinfobar-info">
                Revenue : {convertMoney(props.revenue)}
          </span>
        </div>
        <div className="movieinfobar-content-col">
            <span className="movieinfobar-info">
                Release Date : {(props.release_date)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoBar;
