import React from "react";
import HelloWorldGreetingProps from "@interfaces/HelloWorldGreetingProps";
import "./HelloWorldGreeting.scss";

const HelloWorldGreeting: React.FC<HelloWorldGreetingProps> = (props) => {
  return (
    <h2 className="text-muted">Hello, world!</h2>
  );
};

export default HelloWorldGreeting;
