import React, { useEffect } from "react";
import { Table } from "reactstrap";
import NavBar from "../NavBar/NavBar";
import { getLogs } from "../../actions/logActions";
import { connect } from "react-redux";

const ViewLogs = props => {
  useEffect(() => {
    props.getLogs();
  }, [props.getLogs]);
  
  if (props.logs === null) {
    return <p>Loading....</p>;
  }
  return (
    <div className="container">
      <NavBar />
      <Table hover>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Tech</th>
            <th>Message</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.logs.map(s => {
            return (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.message}</td>
                <td>{s.tech}</td>
                <td>{s.date}</td>
                <td>
                  <button className="btn btn-info">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => ({
  logs: state.logs
});

export default connect(mapStateToProps, { getLogs })(ViewLogs);
