// src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength,setTotalStrength] = useState(0)
  const [totalAgility,setTotalAgility] = useState(0)
  const [totalBudget, setTotalBudget] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);



  const handleAddFighter = (zombieFighter) => {
    if(money >= zombieFighter.price){
       setTeam((prevTeam) => [...prevTeam, zombieFighter]);
       setMoney((prevMoney) => prevMoney - zombieFighter.price);
      console.log(`${zombieFighter.name}added to the team`)
    
        }else{
        console.log('Not enough money');
       }

    };

    const calculateTotalStrength = (team)=>{
      return team.reduce((total,member)=> total + member.strength,0);
    };
    useEffect(() => {
    setTotalStrength(calculateTotalStrength(team));
}, [team]);

  const handleRemoveFighter = (zombieFighter) => {
    setTeam((prevTeam) =>
      prevTeam.filter((member) => member.name !== zombieFighter.name)
    );
  };
    
  const CaculateTotalAgility =(team)=>{
    return team.reduce((total, member) => total + member.agility,0);
  }

   useEffect(()=>{
    setTotalAgility(CaculateTotalAgility(team));
  },[team]);

     
  const CaculateTotalBudget =(team)=>{
    return team.reduce((total, member) => total - member.price,100);
  }

   useEffect(()=>{
    setTotalBudget(CaculateTotalBudget(team));
  },[team]);
// const myTeams = (team) =>{
// if(team.length = 0){
//   console.log('Pick some team members!');
// }else 
// {setTeam
 

// }

// }



  
  return (
    <>
      <h1>my team:{JSON.stringify(team)}</h1>
      <h1>money:{money}</h1>
      <h1> zombieFighters List</h1>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li key={index}>
            <img src={zombieFighter.img} />
            <p>
              {" "}
              <span>Name:</span>
              {zombieFighter.name}
            </p>
            <p>
              <span>Price:</span>
              {zombieFighter.price}
            </p>
            <p>
              <span>Strength:</span>
              {zombieFighter.strength}
            </p>
            <p>
              <span>Agility:</span>
              {zombieFighter.agility}
            </p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h1>Total Strength:{totalStrength}</h1>
      <h1>Total Agility:{totalAgility}</h1>
      <h1>Total Budget:{totalBudget}</h1>
      <ul>
        {team.length === 0 ? (
          <p> Pick some team members!</p>
        ) : (
          team.map((member, index) => (
            <li key={index}>
              <p> Name:{member.name}</p>
              <img src={member.img} alt="Team Member" />
              <p>Strength:{member.strength}</p>
              <p>Price:{member.price}</p>
              <p>Agility:{member.agility}</p>
              <button onClick={() => handleRemoveFighter(member)}>
                remove
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};



export default App;
