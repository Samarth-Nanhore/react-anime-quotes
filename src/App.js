import React,{useEffect, useState} from "react";
import './App.css';


const App = () => {

const [animequote, setAnimequote] = useState("");


const fetchData = async() => {
  const url = 'https://animechan.vercel.app/api/random'
  try{
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setAnimequote(json);

  } catch(error){
    console.log("error", error);
  }
};



  useEffect(() => {
  fetchData();
  },[] );

let gretting ;
var today= new Date();
if(today.getHours() >= 12){
  gretting = "Ohayou 👋";
}
else{
  gretting = "Konbanwa(こんばんは) 🙏";
}
  
const NextQuote = () => {
  fetchData();
};

// function copyQuote() {
//   navigator.clipboard.writeText(animequote.quote+ " - " + animequote.character);
// }

  return(
<div>
<h1 className="heading">Anime Quotes</h1>
<p className="greeting">{gretting}, check out your's favourite anime quote</p>
{/* <hr className="hr"></hr> */}
<div className="box">
<blockquote className="blockquote">{animequote.quote}</blockquote>
<cite className="cite">{animequote.character}, ({animequote.anime})</cite>
</div>
<div className="dabba">
<button className="button-38" onClick={NextQuote}>New One!</button>
{/* <button onClick={copyQuote} className="button-2" >Copy quote</button> */}
</div>
</div> 
  )
}

export default App;

