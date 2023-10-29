import { useState } from 'react';
import './App.css';

function App() {
const [counter,setcounter] = useState(0)

const counterHander = (num)=>{
  const update = counter+num
  console.log(update);
  if(update>=0){
    setcounter(update)
  }
  
}

  return (
    <div className='main'>
      <h1>Counter</h1>
      <div className="counter-num">
        <button onClick={()=>counterHander(1)}>Increase </button>
        <h2>{counter}</h2>
        <button onClick={()=>counterHander(-1)}>Decrease </button>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [player1, setplayer1] = useState({
//     name: "player1",
//     soces: 0,
//     active: true,
//   });
//   const [player2, setplayer2] = useState({
//     name: "player1",
//     soces: 0,
//     active: true,
//   });
//   const [dice, setdice] = useState({
//     name: "player1",
//     soces: 0,
//     active: true,
//   });

//   const rollDice = () => {
//   const num = Math.floor(Math.random()*7)
//   setdice(num) 
//     if(player1.active){
//       setplayer1({
//         ...player1,
//         soces: player1.soces+num,
//         active: num !== 0,
//       })
//       setplayer2({
//         ...player2,
//         active: num ===0
//       })
//     }
//   };

//   return (
//     <div className="contaniner">
//       <h1>Roll Dice</h1>
//       <div className="wappers">
//         <div className="user-first">
//           <h2>{player1.name}</h2>
//           <h3>{player1.soces}</h3>
//         </div>
//         <div className="user-second">
//         <h2>{player2.name}</h2>
//           <h3>{player2.soces}</h3>
//         </div>
//       </div>
//       <div>
//         <h3>{dice}</h3>
//         <button
//           onClick={() => {
//             rollDice();
//           }}
//         >
//           Roll
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
