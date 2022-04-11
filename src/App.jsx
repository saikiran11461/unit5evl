import { useState } from "react";

function App() {
 
  const [score, setScore] = useState(76);
  const [wicket,setWicket] = useState(2);
  const [over , setOver] = useState(50)

  if(score> 100){
    var ans = "India win"
  }
  if(wicket==10){
    var ans = "india loss"
  }
  const handle =(val)=>{
    if(val ===0){
      setScore(0);
    }
    else if(val === 4){
      setScore(score + 4);
    }
    else if(val ===6){
      setScore(score + 6);
    }
    else{
      if(score + val <0) return;
      setScore(score + val);
    }
  };

  const wickets=(wi)=>{
    if(wi===0){
      setWicket(0)
    }
    else{
      if(wicket +wi < 0) return;
      setWicket(wicket + wi)
    }
  }

  const overs =(ov)=>{
    if(ov ==0){
      setOver(0)
    }
  
  
  else{
    if(over +ov < 0) return;
    setOver(over+ ov)
  }
}

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              over
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{
          handle(1);
        }} >Add 1</button>
        <button className="addScore4" onClick={()=>{
          handle(4)
        }} >Add 4</button>
        <button className="addScore6" onClick={()=>{
          handle(6)
        }} >Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        
        <button onClick={()=>{
          wickets(1)
        }} >Add 1 wicket</button>
      </div>  

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;