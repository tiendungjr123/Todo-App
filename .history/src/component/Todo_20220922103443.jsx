import React from "react";
import { Button } from "antd";
import styled from "styled-components";

export default function Todo() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", }}
    >
      <Button style={{textAlign: "left"}} type="primary">Item1</Button>
    </div>
  );
}
