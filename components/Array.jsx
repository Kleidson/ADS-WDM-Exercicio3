import React from 'react';
export default () => {

    const carros = ['Sentra', 'Brasília', 'Jaguar', 'Onix', 'Gol', 'Jetta', 'HR-V', 'Omega']


    return (
       <>
            <h2>Carros</h2>
           
            <ul>
                { carros.map(item=>(
                    <li>{item}</li>
                )) }
            </ul>
       </> 
    )
}