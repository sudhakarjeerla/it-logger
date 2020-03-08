import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="dashboard">
          <div className="row">
            <div className="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://niveldecalidad.com/wp-content/uploads/2018/06/google-analytics.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <Link to="/viewlogs">
                    <Button color="primary" size="lg" block>
                      View Logs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
            <div class="card">
                <img
                  class="card-img-top"
                  src="https://niveldecalidad.com/wp-content/uploads/2018/06/google-analytics.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <Link to="/viewlogs">
                    <Button color="primary" size="lg" block>
                      Employees
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
            <div class="card">
                <img
                  class="card-img-top"
                  src="https://niveldecalidad.com/wp-content/uploads/2018/06/google-analytics.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <Link to="/viewlogs">
                    <Button color="primary" size="lg" block>
                      Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
