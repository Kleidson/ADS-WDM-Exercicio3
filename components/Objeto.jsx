import React from 'react';

export default () => {

    //const carros = ['Sentra', 'Brasília', 'Jaguar', 'Onix', 'Gol', 'Jetta', 'HR-V', 'Omega']

    const carros = [
        {id: 1, marca: 'Nissan', modelo: 'Sentra', ano: 2013},
        {id: 2, marca: 'VW', modelo: 'Brasília', ano: 1986},
        {id: 3, marca: 'Jaguar', modelo: 'XE', ano: 1986},
        {id: 4, marca: 'GM', modelo: 'Onix', ano: 1986},
        {id: 5, marca: 'VW', modelo: 'Gol', ano: 1986},
        {id: 6, marca: 'VW', modelo: 'Jetta', ano: 1986},
        {id: 7, marca: 'Honda', modelo: 'HR-V', ano: 1986},
        {id: 8, marca: 'GM', modelo: 'HR-Omega', ano: 1986},
    ]


    return (
       <>
        <h1>Objeto</h1>

        <ul>
            { carros.map(item=>(
                <li>{item.marca} - {item.modelo} ({item.ano})</li>
            )) }
        </ul>
       </> 
    )
}
