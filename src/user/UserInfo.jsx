import React from "react";

import { Card, Button } from "antd";

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content 2</p>
          <Button type="primary">Primary</Button>
        </Card>
      </div>
    );
  }
}

export default UserInfo;
