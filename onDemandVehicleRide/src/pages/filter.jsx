import React from 'react';

const FilterPage = () => {
  return (
    <div className="container mt-5">
      {/* First Big Card: Make */}
      <div className="card mb-3">
        <div className="card-header bg-primary text-white">Make</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">Toyota</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">Honda</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">MG</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">Tesla</button>
            </div>
            {/* Add buttons for other makes */}
          </div>
          {/* Add more rows for other makes */}
        </div>
      </div>

      {/* Second Big Card: Price */}
      <div className="card mb-3">
        <div className="card-header bg-primary text-white">Price</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">₹3,000 - ₹8,000</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">₹8,000 - ₹14,000</button>
            </div>
            {/* Add buttons for other price ranges */}
          </div>
          {/* Add more rows for other price ranges */}
        </div>
      </div>

      {/* Third Big Card: Model */}
      <div className="card mb-3">
        <div className="card-header bg-primary text-white">Model</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">Toyota Model 1</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">Toyota Model 2</button>
            </div>
            {/* Add buttons for other models */}
          </div>
          {/* Add more rows for other models */}
        </div>
      </div>

      {/* Fourth Big Card: Year */}
      <div className="card mb-3">
        <div className="card-header bg-primary text-white">Year</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">2013</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">2014</button>
            </div>
            {/* Add buttons for other years */}
          </div>
          {/* Add more rows for other years */}
        </div>
      </div>

      {/* Fifth Big Card: Day of Return */}
      <div className="card mb-3">
        <div className="card-header bg-primary text-white">Day of Return</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">5-10</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">11-20</button>
            </div>
            {/* Add buttons for other day ranges */}
          </div>
          {/* Add more rows for other day ranges */}
        </div>
      </div>

      {/* Sixth Big Card: Color */}
      <div className="card mb-3">
        <div className="card-header bg-primary text-white">Color</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">Red</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary btn-block">Blue</button>
            </div>
            {/* Add buttons for other colors */}
          </div>
          {/* Add more rows for other colors */}
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
