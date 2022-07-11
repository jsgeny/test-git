import React from 'react';
import reactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

import Users from "./components/users";
// console.log(Users);
const App = () => {
  return <Users />;
}

reactDOM.render(<App />, document.getElementById('root'));


