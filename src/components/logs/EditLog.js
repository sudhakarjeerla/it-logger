import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";

class EditLog extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <div className="form-display">
        <h2>Edit Logs</h2>
          <div className="row">
             
            <div className="offset-md-3 col-md-8">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditLog;
