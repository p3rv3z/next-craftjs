import React from "react";
import { useNode } from "@craftjs/core";

export const Button = ({ children, style, className }) => {

  const { connectors: { connect, drag } } = useNode()
  return (<button ref={ref => connect(drag(ref))} style={style} className={className} >{children}</button>)
}
