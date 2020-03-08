import React, { Fragment, useState } from "react";
import { Button } from "reactstrap";
import AddLog from "../logs/AddLog";
import EditLog from "../logs/EditLog";

const AddButton = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <Button color="primary" onClick={toggle} style={{ margin: "10px 0" }}>
        Add Log
      </Button>
      <AddLog modal={modal} toggle={toggle} />
    </Fragment>
  );
};

export default AddButton;
