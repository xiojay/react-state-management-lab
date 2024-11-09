import React, { useState } from 'react';
import './App.css';

const zombieData = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/2a27c9',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters] = useState(zombieData)

  const calculateTotalStrength = (team) => {
    return team.reduce((total, member) => total + member.strength, 0)
  };

  const calculateTotalAgility = (team) => {
    return team.reduce((total, member) => total + member.agility, 0)
  };

  const addFighterToTeam = (zombie) => {
    if (money >= zombie.price) {
      const newTeam = [...team, zombie]
      setTeam(newTeam)
      setMoney(money - zombie.price)
      setTotalStrength(calculateTotalStrength(newTeam))
      setTotalAgility(calculateTotalAgility(newTeam))
    } else {
      alert('Not enough money!')
    }
  };

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index]
    const newTeam = team.filter((_, i) => i !== index)
    setTeam(newTeam)
    setMoney(money + removedFighter.price)
    setTotalStrength(calculateTotalStrength(newTeam))
    setTotalAgility(calculateTotalAgility(newTeam))
  };

  return (
    <div className='App'>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h2>Total Team Strength: {totalStrength}</h2>
      <h2>Total Team Agility: {totalAgility}</h2>
      <h3>Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members</p>
      ) : (
        <ul className='team-list'>
          {team.map((member, index) => (
            <li key={index} className='team-member'>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Fighters</h3>
      <ul className='zombie-fighters'>
        {zombieFighters.map((zombie, index) => (
          <li key={index} className='zombie-fighter'>
            <img src={zombie.img} alt={zombie.name} />
            <h3>{zombie.name}</h3>
            <p>Price: ${zombie.price}</p>
            <p>Strength: {zombie.strength}</p>
            <p>Agility: {zombie.agility}</p>
            <button onClick={() => addFighterToTeam(zombie)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default App;
