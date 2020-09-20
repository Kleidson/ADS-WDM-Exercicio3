import React from 'react';
import { Panel, Button, Grid, Row, Col } from 'rsuite';
import './Carros.css'


export default () => {

    //const carros = ['Sentra', 'Brasília', 'Jaguar', 'Onix', 'Gol', 'Jetta', 'HR-V', 'Omega']

    const carros = [
        {id: 1, marca: 'Nissan', modelo: 'Sentra', ano: 2013, foto:'https://www.autoo.com.br/fotos/2019/11/960_720/nissan_sentra_2020_4_20112019_18421_960_720.jpg'},
        {id: 2, marca: 'VW', modelo: 'Brasília', ano: 1986, foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Brasilia_1973_8.jpg/240px-Brasilia_1973_8.jpg'},
        {id: 3, marca: 'Jaguar', modelo: 'XE', ano: 2010, foto:'https://img.olx.com.br/images/33/330030025546425.jpg'},
        {id: 4, marca: 'GM', modelo: 'Onix', ano: 2018, foto:'https://lh3.googleusercontent.com/proxy/ACQZIQbqKaBqU8W9wtmmvDIPbFy9GKhZgC7b-VvqaXjvmR-YnjPCPzU9r9m_bJVf3KMBOJo2oZwx0ScJO7NzT_fYvmTlX4jgB_cxdwU0warL_Q'},
        {id: 5, marca: 'VW', modelo: 'Gol', ano: 2019, foto:'https://3.bp.blogspot.com/-ytORKkZnclo/W1kqIS5etBI/AAAAAAACs1w/dOZGVsNDSycKH-2cP05VDvcT0HBxqtKAwCLcBGAs/s1600/VW-Gol-2019-automatico%2B%252819%2529.jpg'},
        {id: 6, marca: 'VW', modelo: 'Jetta', ano: 2020, foto:'https://www.revistafullpower.com.br/wp-content/uploads/2019/02/je03-750x422.jpg'},
        {id: 7, marca: 'Honda', modelo: 'HR-V', ano: 2021, foto:'https://s2.glbimg.com/iFvIjSf0Yi6v8La77r7MSYi8rC0=/512x320/smart/e.glbimg.com/og/ed/f/original/2015/03/30/2d8a0025b.jpg'},
        {id: 8, marca: 'GM', modelo: 'Omega', ano: 1982, foto:'https://www.pastorecc.com.br/site/photos/cars/359/bg_ptD6LeJbXLNWcsbj31E1.jpeg'},
    ]


    return (
       <>

        { carros.map(item=>(
           <Panel key={item.id} shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
           <img src={item.foto} className="responsive" alt={item.modelo}/>
           <Panel header={item.marca + ' - ' + item.modelo}>
               <Grid fluid>
                   <Row className="show-grid">
                       <Col xs={12} align='center'>Ano <strong>{item.ano}</strong></Col>
                       <Col xs={12}><Button color="red">Detalhes</Button></Col>
                   </Row>
               </Grid>
           </Panel>
       </Panel>
         )) 
        }


            

            
       </> 
    )
}
