import './index.css'
import {Cell} from './Cell'
import {useState} from 'react'

export default function App() {

let empt=["","","","","","","","",""]
let empt_=empt.slice();
let rnd=Math.floor(Math.random()*9);
empt_[rnd]="X";
let coin=Math.floor(Math.random()*2);
let ch=[empt_,empt];
  let [cells,setCells]=useState(ch[coin]);

let players=["X","O"];

let [compSym, setCompSym]=useState(players[coin]);
let [player, setPlayer]=useState(players[1-coin]);

function refreshPage() {
    window.location.reload(false);
}
  
const compDraw = (arr) => {
  let bij=[];
  
  for(let i=0;i<9;i++){
    if(arr[i]==""){
      bij.push(i);
    }
  }
  let l=bij.length;
  let r=Math.floor(Math.random()*l);
    if(arr[0]!="" && arr[1]!="" && arr[2]=="" && arr[0]==arr[1]){
    arr[2]=compSym; return;
  }
  else if(arr[0]!="" && arr[1]=="" && arr[2]!="" && arr[0]==arr[2]){
    arr[1]=compSym; return;
  }
  else if(arr[0]=="" && arr[1]!="" && arr[2]!="" && arr[1]==arr[2]){
    arr[0]=compSym; return;
  }
    if(arr[3]!="" && arr[4]!="" && arr[5]=="" && arr[3]==arr[4]){
    arr[5]=compSym; return;
  }
  else if(arr[3]!="" && arr[4]=="" && arr[5]!="" && arr[3]==arr[5]){
    arr[4]=compSym; return;
  }
  else if(arr[3]=="" && arr[4]!="" && arr[5]!="" && arr[4]==arr[5]){
    arr[3]=compSym; return;
  }
  else if(arr[6]!="" && arr[7]!="" && arr[8]=="" && arr[6]==arr[7]){
    arr[8]=compSym; return;
  }
  else if(arr[6]!="" && arr[7]=="" && arr[8]!="" && arr[6]==arr[8]){
    arr[7]=compSym; return;
  }
  else if(arr[6]=="" && arr[7]!="" && arr[8]!="" && arr[7]==arr[8]){
    arr[6]=compSym; return;
  }
else if(arr[0]!="" && arr[3]!="" && arr[6]=="" && arr[0]==arr[3]){
    arr[6]=compSym; return;
  }
  else if(arr[0]!="" && arr[3]=="" && arr[6]!="" && arr[0]==arr[6]){
    arr[3]=compSym; return;
  }
  else if(arr[0]=="" && arr[3]!="" && arr[6]!="" && arr[3]==arr[6]){
    arr[0]=compSym; return;
  }
  else if(arr[1]!="" && arr[4]!="" && arr[7]=="" && arr[1]==arr[4]){
    arr[7]=compSym; return;
  }
  else if(arr[1]!="" && arr[4]=="" && arr[7]!="" && arr[1]==arr[7]){
    arr[4]=compSym; return;
  }
  else if(arr[1]=="" && arr[4]!="" && arr[7]!="" && arr[4]==arr[7]){
    arr[1]=compSym; return;
  }
  else if(arr[2]!="" && arr[5]!="" && arr[8]=="" && arr[2]==arr[5]){
    arr[8]=compSym; return;
  }
  else if(arr[2]!="" && arr[5]=="" && arr[8]!="" && arr[2]==arr[8]){
    arr[5]=compSym; return;
  }
  else if(arr[2]=="" && arr[5]!="" && arr[8]!="" && arr[5]==arr[8]){
    arr[2]=compSym; return; 
  }
  else if(arr[0]!="" && arr[4]!="" && arr[8]=="" && arr[0]==arr[4]){
    arr[8]=compSym; return;
  }
  else if(arr[0]!="" && arr[4]=="" && arr[8]!="" && arr[0]==arr[8]){
    arr[4]=compSym; return;
  }
  else if(arr[0]=="" && arr[4]!="" && arr[8]!="" && arr[4]==arr[8]){
    arr[0]=compSym; return;
  }
  else if(arr[2]!="" && arr[4]!="" && arr[6]=="" && arr[2]==arr[4]){
    arr[6]=compSym; return;
  }
  else if(arr[2]!="" && arr[4]=="" && arr[6]!="" && arr[2]==arr[6]){
    arr[4]=compSym; return;
  }
  else if(arr[2]=="" && arr[4]!="" && arr[6]!="" && arr[4]==arr[6]){
    arr[2]=compSym; return;
  }
  else{arr[bij[r]]=compSym;}
  setCells(arr);
}
let expl=`Your Turn: ${player}`;
const handleClick = (i) => {
  let cells_ = cells.slice();
  if(winner){return;}
  if (cells_[i] == "" && !winner) {
      cells_[i] = player;
      
      setCells(cells_);
      compDraw(cells_);
    }
  else {
      alert("Already taken")
    }
  
    ;
}
  
let msg2;
  
function calculateWinner(cells) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if ((cells[a]=="X"||cells[a]=="O") && cells[a] === cells[b] && cells[a] === cells[c]) {
                expl="";
                if(cells[a]==player){
                  msg2="You win!"
                }
               else {msg2="You lose!"}
                return cells[a];
            }
        }
  for(let i=0;i<9;i++){
    if(cells[i]==""){
      return null;
    }
  }
  expl="";
  return "Tied";
}
  
let msg;
let winner = calculateWinner(cells);
    
    if (winner && winner!="Tied") {
        msg = 'Winner: ' + winner;
    } 
    if(winner=="Tied"){msg=winner;}
  return (
    <main>
    <h2 id="title">A Simple Tic-Tac-Toe Game</h2>
    <h3>{expl}</h3>
      <div className="board">
        {cells.map((cell,index)=><Cell key={index} id={index} value={cells[index]} onClick={() => handleClick(index)}/>)}
        </div>
   <h2 className="msg">{msg}</h2>  
   <h2 className="msg2">{msg2}</h2>
      {winner && <h2><button className="btn" onClick={refreshPage}>Reset</button></h2>}
    </main>
  )
}

