import React from "react";
import "./../Main/Main.css";
import "../Popular/Popular.css";
import "./Discover.css"
const Discover = () => {
  return (
    <main>
      <div className="container">
        <div className="block">
          <div className="sorts">
            <div className="sort-by sort">
              <span>
                <span>Sort by:</span> Popular <b>🔽</b>
              </span>
            </div>
            <div className="sort-courses sort">
              <span>
                Courses<b>🔽</b>
              </span>
            </div>
            <div className="category sort">
              <span>
                <span>Category:</span> Categories <b>🔽</b>
              </span>
            </div>
          </div>
          <div className="popular-item-block discover-section">
            <div className="box-contaienr">
              <img src="" alt="" />
              <div className="title">
                <h2>Learning JavaScript Functions</h2>
                <div className="description">
                  <span>
                    15 lessons <span>10 hours 5m</span>
                  </span>
                  <b>$140</b>
                </div>
              </div>
            </div>
            <div className="box-contaienr">
              <img src="" alt="" />
              <div className="title">
                <h2>Learning JavaScript Functions</h2>
                <div className="description">
                  <span>
                    15 lessons <span>10 hours 5m</span>
                  </span>
                  <b>$140</b>
                </div>
              </div>
            </div>
            <div className="box-contaienr">
              <img src="" alt="" />
              <div className="title">
                <h2>Learning JavaScript Functions</h2>
                <div className="description">
                  <span>
                    15 lessons <span>10 hours 5m</span>
                  </span>
                  <b>$140</b>
                </div>
              </div>
            </div>
            <div className="box-contaienr">
              <img src="" alt="" />
              <div className="title">
                <h2>Learning JavaScript Functions</h2>
                <div className="description">
                  <span>
                    15 lessons <span>10 hours 5m</span>
                  </span>
                  <b>$140</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Discover;
