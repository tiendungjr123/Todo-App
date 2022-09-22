import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  
`;
export default function Todo({ todo }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ButtonStyled
        icon={
          <span
            className="check-icon"
            style={{
              float: "right",
              color: "#4fff4f",
            }}
          >
            <CheckOutlined
              style={{
                float: "right",
                color: "#4fff4f",
              }}
            />
          </span>
        }
        
        type="gray"
      >
        {todo.name}
      </ButtonStyled>
    </div>
  );
}
