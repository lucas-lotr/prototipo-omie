import React, { Component } from "react";
import "./Balloon.css";
import moment from "moment";
import {
  Button,
  Popover,
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  TimePicker
} from "antd";
const { TextArea } = Input;

class Balloon extends Component {
  state = {
    addingTask: false,
    visible: false,
    modalVisible: false,
    tasks: [[], [], [], [], []]
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

  handleSubmit = event => {
    let { id } = this.props;
    let { task, time, responsible, obs } = event.target;
    let { tasks } = this.state;
    event.preventDefault();

    let taskObj = {
      task: task.value,
      taskName: task.childNodes[task.selectedIndex].text,
      when: document.getElementById(`when${id}`).childNodes[0].childNodes[0]
        .value,
      time: time.value,
      responsible: responsible.value,
      responsibleName: responsible.childNodes[responsible.selectedIndex].text,
      obs: obs.value
    };

    tasks[id][tasks[id].length] = taskObj;

    this.setState({
      addingTask: false
    });
  };

  render() {
    let { id } = this.props;
    let { tasks } = this.state;

    let i = 0;

    const taskList = (
      <div>
        {tasks[id].length > 0
          ? tasks[id].map(task => {
              return (
                <div key={i++}>
                  <Button className="task-list-button">{task.taskName}</Button>
                  <br />
                  <br />
                </div>
              );
            })
          : ""}
        <Button className="button-card-tasks" onClick={this.handleSwitchTask}>
          Adicionar tarefa
        </Button>
      </div>
    );

    const form = (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item className="select-etapa">
          <select name="task">
            <option value="call">Ligação</option>
            <option value="email">E-mail</option>
            <option value="meeting">Reunião</option>
            {/* <option>D</option> */}
          </select>
        </Form.Item>
        <Form.Item>
          <DatePicker
            id={`when${this.props.id}`}
            name="when"
            defaultValue={moment(
              moment(Date.now()).format("DD/MM/YYYY"),
              "DD/MM/YYYY"
            )}
            format="DD/MM/YYYY"
            label="Em"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <TimePicker
            name="time"
            defaultValue={moment(moment(Date.now()).format("HH:00"), "HH:mm")}
            format={"HH:mm"}
            size="large"
          />
        </Form.Item>
        <Form.Item className="select-etapa" label="Atribuido à">
          <select name="responsible">
            <option value="general">Geral</option>
            <option value="private">Particular</option>
            <option value="public">Público</option>
            {/* <option>Filler</option> */}
          </select>
        </Form.Item>
        <Form.Item className="select-etapa">
          <TextArea name="obs" rows={4} />
        </Form.Item>
        <Row type="flex" justify="end">
          <Col>
            <Form.Item>
              <Button className="submit-button" htmlType="submit">
                Salvar
              </Button>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item>
              <Button
                className="cancel-button"
                onClick={() => this.handleVisibleChange(false)}
              >
                <u>Cancelar</u>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );

    return (
      <Popover
        className="button-card-tasks"
        content={this.state.addingTask ? form : taskList}
        title={null}
        trigger="click"
        placement="right"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button className="button-card-tasks">Tarefa ></Button>
      </Popover>
    );
  }
}

export default Balloon;
