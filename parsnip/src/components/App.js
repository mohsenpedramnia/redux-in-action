import React, { Component } from "react";
import TasksPage from "./TasksPage";

const mockTasks = [
  {
    id: 1,
    title: "Learn Redux",
    description: "the store, actions, and reducer. oh my!",
    status: "In progress"
  },
  {
    id: 2,
    title: "Peace on Earth",
    description: "No bad deal",
    status: "In progress"
  }
];

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={mockTasks} />
      </div>
    );
  }
}

export default App;
