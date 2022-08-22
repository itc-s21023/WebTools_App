import React from 'react';
import './App.css';

function App() {
  return (
    <div ClassName="container text-center">
      <p>
      現在時刻は
      </p>
    <Clock />
    </div>
  )
}

class Clock extends React.Component {
  render() {
    this.now = new Date();
    this.time = `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`;
    return <p>{this.time}</p>
  }
}

export default App;

