import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3>Your Day Off Dashboard</h3>
      <div className="choice-group">
        <p className="choice">Food: {props.food}</p>
        <p className="choice">Book: {props.book}</p>
        <p className="choice">Show: {props.show}</p>
        <p className="choice">Activity: {props.activity}</p>
      </div>
    </div>
  );
}
export default Dashboard;
