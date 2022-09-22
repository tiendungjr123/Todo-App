import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
`;
export default function Todo({ todo }) {
  return (
    <ButtonStyled
      icon={
        <span
          className="check-icon"
         
        >
          <CheckOutlined
            style={{
              float: "right",
              color: "#4fff4f",
            }}
          />
        </span>
      }
      block
      type="gray"
    >
      {todo.name}
    </ButtonStyled>
  );
}
