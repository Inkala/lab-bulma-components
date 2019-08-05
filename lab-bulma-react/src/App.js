import React from 'react';

import Signup from './components/Signup';
import Message from './components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      <Signup />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
