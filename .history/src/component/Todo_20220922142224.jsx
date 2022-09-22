import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export default function Todo({ todo }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button
        icon={
          <CheckOutlined
            style={{
              float: "right",
              color: "#4fff4f",
              fontSize:"20px"
            }}
          />
        }
        style={{ textAlign: "left", marginTop: "4px" }}
        type='gray'
      >
        {todo.name}
      </Button>
    </div>
  );
}
