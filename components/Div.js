import React from "react";
import { useNode } from "@craftjs/core";

export const Div = ({ children, style, className }) => {

  const { connectors: { connect, drag } } = useNode()
  return (<div ref={ref => connect(drag(ref))} style={style} className={className} >{children}</div>)
}
