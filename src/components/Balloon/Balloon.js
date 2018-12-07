import React, { Component } from "react";
import "./Balloon.css";
import moment from "moment";
import {
  Button,
  Popover,
  Form,
  Input,
  Modal,
  DatePicker,
  MonthPicker,
  RangePicker,
  WeekPicker,
  TimePicker
} from "antd";
const { TextArea } = Input;

class Balloon extends Component {
  state = {
    addingTask: false,
    visible: false,
    modalVisible: false
  };

  handleSwitchTask = () => {
    this.setState({
      addingTask: !this.state.addingTasks
    });
  };

  handleVisibleChange = visible => {
    this.setState({
      visible: visible
    });

    if (visible) {
      this.state.addingTask = false;
    }
  };

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      modalVisible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      modalVisible: false
    });
  };

  render() {
    return (
      <Popover
        className="button-card-tasks"
        content={
          this.state.addingTask ? (
            ""
          ) : (
            <Button onClick={(this.handleSwitchTask, this.showModal)}>
              Adicionar tarefa
            </Button>
          )
        }
        title={null}
        trigger="click"
        placement="right"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button>Tarefa ></Button>
        {/* modal adicionar tarefa */}

        <div>
          <Modal
            visible={this.state.modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            zIndex={10000}
          >
            <Form.Item>
              <div className="select-etapa">
                <select name="stage">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
            </Form.Item>
            <Form.Item>
              <div>
                <DatePicker label="Em" size="large" />
              </div>
            </Form.Item>
            <Form.Item>
              <div>
                <TimePicker
                  defaultValue={moment("12:08", "HH:mm")}
                  format={"HH:mm"}
                  size="large"
                />
              </div>
            </Form.Item>
            <Form.Item>
              <div className="select-etapa" label="Atribuido à">
                <select name="stage">
                  <option>Geral</option>
                  <option>Particular</option>
                  <option>Público</option>
                  <option>Filler</option>
                </select>
              </div>
            </Form.Item>
            <Form.Item>
              <div className="select-etapa">
                <TextArea rows={4} />
              </div>
            </Form.Item>
          </Modal>
        </div>
      </Popover>
    );
  }
}

export default Balloon;
