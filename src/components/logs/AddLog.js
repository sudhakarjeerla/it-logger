import React, { Fragment, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter
} from "reactstrap";
import { addLog } from "../../actions/logActions";
import { connect } from "react-redux";

const AddLog = props => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = e => {
    if (message === "") {
      alert("Please Enter Message");
    } else {
      const newLog = {
        message: message,
        attention: attention,
        tech: tech,
        date: new Date()
      };
      props.addLog(newLog);
      // Clear Fields
      setMessage("");
      setAttention(false);
      props.toggle();
    }
  };

  return (
    <Fragment>
      <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalHeader toggle={props.toggle}>Add Logs</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label htmlFor="logMessage">Log Messaage</Label>
                <Input
                  type="text"
                  name="logMessage"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input
                  type="select"
                  name="select"
                  value={tech}
                  onChange={e => setTech(e.target.value)}
                >
                  <option>SJ</option>
                  <option>VV</option>
                  <option>SV</option>
                </Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    checked={attention}
                    value={attention}
                    onChange={e => setAttention(!attention)}
                  />{" "}
                  Attention
                </Label>
              </FormGroup>
              <ModalFooter>
                <Button onClick={onSubmit} color="primary">
                  Add Log
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
    </Fragment>
  );
};

export default connect(null, { addLog })(AddLog);
