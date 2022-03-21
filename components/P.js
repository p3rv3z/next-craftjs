import React from "react";
import { useNode } from "@craftjs/core";

export const P = ({ children, style, className }) => {

  const { connectors: { connect, drag } } = useNode()
  return (<p ref={ref => connect(drag(ref))} style={style} className={className} >{children}</p>)
}
