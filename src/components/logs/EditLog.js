import React, { Fragment, useState, useEffect } from "react";
import { updateLog } from "../../actions/logActions";
import { connect } from "react-redux";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter,
  Button
} from "reactstrap";

const EditLog = props => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (props.current) {
      props.toggle();
      setMessage(props.current.message);
      setAttention(props.current.attention);
      setTech(props.current.tech);
    }
  }, [props.current]);

  const onSubmit = () => {
    if (message === "") {
      alert("please enter ");
    } else {
      const updLog = {
        id: props.current.id,
        message,
        attention,
        tech,
        date: new Date()
      };

      props.updateLog(updLog);

      // Clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
      props.toggle();
    }
  };

  return (
    <Fragment>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Edit Logs</ModalHeader>
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
                />
                Attention
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onSubmit} color="primary">
            Add Log
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { updateLog })(EditLog);
