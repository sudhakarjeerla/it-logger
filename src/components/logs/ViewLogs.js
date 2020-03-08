import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getLogs, deleteLog, setCurrent } from "../../actions/logActions";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import AddButton from "../layout/AddButton";
import Moment from "react-moment";
import EditLog from "./EditLog";

const ViewLogs = ({ logs, loading, getLogs, setCurrent, deleteLog }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    getLogs();
  }, []);

  const onDelete = log => {
    deleteLog(log.id);
  };

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <div className="container">
      <AddButton />
      <EditLog modal={modal} toggle={toggle} />
      <Table hover>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Message</th>
            <th>Tech</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => {
            return (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td className={`${log.attention ? "text-red" : "text-blue"}`}>
                  {log.message}
                </td>
                <td>{log.tech}</td>
                <td>
                  <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => setCurrent(log)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onDelete(log)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getLogs, deleteLog, setCurrent })(
  ViewLogs
);
