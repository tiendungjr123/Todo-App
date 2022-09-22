import React from "react";
import { Button } from "antd";

export default function Todo(todo) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button style={{ textAlign: "left", marginTop: "4px" }} type="primary">
        item1
      </Button>
    </div>
  );
}
