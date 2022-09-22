import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
  background-color: #e2e2e2;

  ${(p) =>
    p.isCompleted &&
    css`
      text-decoration: line-through;
    `}
  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;
export default function Todo({ todo, onCheckBtnClick }) {
  return (
    <ButtonStyled
      isCompleted = {todo.isCompleted}
      icon={
        <span
          className="check-icon"
          style={{
            float: "right",
          }}
          onClick={() => onCheckBtnClick(todo.id)}
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
