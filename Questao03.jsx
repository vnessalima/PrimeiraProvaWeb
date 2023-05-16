import React, { useEffect, useState } from 'react';

const Questao03 = () => { 
  const [capitais, setCapitais] = useState([]);

  useEffect(() => { //executado quando o componente for montado, acionado
    const fetchData = async () => { 
      try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        const data = await response.json();
        const populacaoTotal = data.reduce((total, country) => total + country.population, 0);
        const mediaPopulacao = populacaoTotal / data.length;
        const capitaisFiltradas = data.filter(country => country.population > mediaPopulacao)
          .map(country => `${country.capital[0]} - ${country.population}`);
        setCapitais(capitaisFiltradas);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); //realizar a chamada assincrona e conseguir os dados da Europa
  }, []);
 
//escreve na tela quais sao as capitais com a população acima da media
  return (
    <div>
      <h1>Capitais com população acima da média:</h1> 
      <ul>
        {capitais.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questao03;
