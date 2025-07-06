import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/salonProvenza.css';
const SalonesProvenza = () => {



    return (

    <div className="container">
      <div className="despacho"></div>
      <div className="tarima"></div>

      <div className="sala1a">
        <div className='MesaIzquierda1'>
            <div className='Mesa1'></div>
        </div>
        <div className='Mesa2'></div>
      </div>

      <div className="sala1b">
        <div className="Horizontal1">
             <div className='Mesa3'></div>
        </div>
       

        <div className='vertical1'>
            <div className='Mesa4'></div>
        <div className='Mesa5'></div>
        </div>
        
      </div>


      <div className="sala1c">
           <div className="Horizontal2">
             <div className='Mesa6'></div>
        </div>
       

        <div className='vertical2'>
            <div className='Mesa7'></div>
        <div className='Mesa8'></div>
        </div>

      </div>


      <div className="sala1d">
          
            <div className='Mesa9'></div>
        <div className='Mesa10'></div>
       
        


      </div>



      <div className="sala2a"></div>
      <div className="sala2b"></div>
      <div className="sala2c"></div>
      <div className="sala2d"></div>
    </div>



    );


};

export default SalonesProvenza;