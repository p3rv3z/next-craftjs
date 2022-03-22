import { Editor, Frame, Element } from "@craftjs/core";
import React from "react";
import { Div } from "../components/Div";
import { H1 } from "../components/H1";
import { P } from "../components/P";
import { Button } from "../components/Button";
import { Counter } from "../components/Counter";
import { DynamicRender } from "../components/DynamicRender";

export default function App() {
  return (
    <div>
      <Editor resolver={{ Div, H1, P, Button, DynamicRender, Counter }}>
        <div>
          <Frame>
            <div style={{ width: "100%", height: "100%", padding: "100px" }}>
              <Element is={DynamicRender} id="DynamicRender" canvas />
            </div>
          </Frame>
        </div>
        <div></div>
      </Editor>
    </div>
  );
}
