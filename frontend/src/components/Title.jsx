import React from 'react';
import logo from '../images/jason.jpg';

const Title = () => {
  return (
    <div className="wrapperTitle">
      <img src={logo} alt="todo-list images" width="30px" />
      <h1 className="todo-title">TASKFORCE</h1>
    </div>
  );
};

export default Title;
