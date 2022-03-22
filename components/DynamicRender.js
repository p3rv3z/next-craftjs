import { useNode, useEditor, Element } from "@craftjs/core";
import { useState } from "react";
import { Counter } from "./Counter";

export const DynamicRender = () => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const { actions, query } = useEditor((state) => ({
    currentJson: state.nodes,
  }));

  const [color, setColor] = useState("green");

  const renderTemplate = async () => {
    let foo = "bar";
    const names = ["John", "Jane", "Kane"];
    let isGreen = true;

    // const { content } = await (
    //   await fetch("http://localhost:3333/dynamic-component")
    // ).json();

    const testLog = () => {
      isGreen = false;
      setColor("yellow");
      console.log(color);
    };

    const jsxElements = (
      <div>
        {(foo = "foo")}
        <p>{foo}</p>
        <button onClick={testLog} style={{ backgroundColor: color }}>
          click
        </button>
        {names.map((name) => (
          <p key={name}>{name}</p>
        ))}
        <Counter />
      </div>
    );

    const nodeList = query.parseReactElement(jsxElements).toNodeTree();
    const keys = Object.keys(nodeList.nodes);

    for (let d of keys) {
      const node = nodeList.nodes[d];
      node.data.isCanvas = true;
    }

    actions.addNodeTree(nodeList, "ROOT");
  };

  return (
    <div>
      <button onClick={renderTemplate} style={{ background: "red" }}>
        Render Template
      </button>
    </div>
  );
};
