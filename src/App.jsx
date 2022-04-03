import React from "react";

import "antd/dist/antd.css";

import { Button } from "antd";

import UserInfo from "./user/UserInfo";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>React Vitejs Antd template0</p>
        <p>
          <Button type="primary">Primary</Button>
        </p>
        <br/>
        <div style={{ padding: 5 }}>
          <UserInfo/>
        </div>
      </div>
    );
  }
}

export default App;
