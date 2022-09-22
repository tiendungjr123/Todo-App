import { Button } from "antd";
import React from "react";

export default function TodoList() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button type="text">Item1</Button>
        <Button type="text">Item1</Button>
        <Button type="text">Item1</Button>
      </div>
    </>
  );
}
