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
    return <p>{this.now.getYear() +1900}年{this.now.getMonth() + 1}月{this.now.getDate()} 日{this.time}</p>
  }
}

export default App;
