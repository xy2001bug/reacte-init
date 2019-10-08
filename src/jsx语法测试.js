import React from 'react';
import './App.css';

function App1() {
  return (
    <div className="App1">
        <h1>一只特立独行的狼</h1>
        <style jsx>{
          `
            .App1{
              background-color:skyblue;
            }
          ` }
        </style>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h1 className="hh11">我变颜色啦</h1>
      <div className="test1">
        <div className="test2">
          测试less语法
        </div>
      </div>
      <App1></App1>
      <style jsx>{
        `
       .hh11{
         background-color:red;
       }
       .test1{
         .test2{
           background-color:hotpink;
         }
       }
       `
      }
      </style>
    </div>
  );
}

export default App;
