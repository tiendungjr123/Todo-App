import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
  background-color: #e2e2e2;
  &:hover{
    .check-icon{
      display: inline-block;
    }
  }

  .check-icon{
    display: none;

    &:hover{
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;
export default function Todo({ todo }) {
  return (
    <ButtonStyled
      icon={
        <span
          className="check-icon"
          style={{
            float: "right",
          }}
        >
          <CheckOutlined
            style={{
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
