import React from "react";
import { useNode } from "@craftjs/core";

export const H1 = ({ children, style, className }) => {

  const { connectors: { connect, drag } } = useNode()
  return (<h1 ref={ref => connect(drag(ref))} style={style} className={className} >{children}</h1>)
}
