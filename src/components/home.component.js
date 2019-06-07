import React from 'react';
import Button from "@material-ui/core/Button";

const HomeComponent = (props) => {
  const { handleSend } = props;
  return (
    <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus maiores dolore voluptate, omnis quos sit repellat ullam neque non blanditiis numquam, aut reprehenderit animi nisi nostrum facere velit veritatis.</p>
      <ul>
        {props.props.mqtt.messages.map((item, i) => <li key={i}>{item.message}</li>)}
      </ul>
      <Button
        color="inherit"
        onClick={handleSend}
      >
        Enviar
      </Button>
    </div>
  )
};

export default (HomeComponent)