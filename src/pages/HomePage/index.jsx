import { useEffect, useState } from 'react';
import './style.css';

export const HomePage = () => {
const [datetime, setDatetime] = useState('');

    
  
  useEffect(() => {
    //  alert("Prague time...");
    // setDatetime('2020-11-13T22:46');
    const fetchTime = async () => {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/Europe/Prague`);
      const data = await response.json();
      setDatetime(data.datetime);
    };
    fetchTime();
  }, []);
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace</h1>
      </header>
      <main>
      <div>Hodnota datetime: {datetime}</div>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          {" "}
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>
          .
        </p>
        
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
