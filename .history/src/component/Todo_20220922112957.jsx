import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Todo({ todo }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button
        style={{ textAlign: "left", marginTop: "4px" }}
        type="gray"
        icon={<SearchOutlined />}
      >
        {todo.name}
      </Button>
    </div>
  );
}
