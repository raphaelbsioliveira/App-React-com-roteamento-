import React from 'react';

function Produtos(props){
        return(
            <div >
                <h2 style={{color:"#556B2F"}}>o numero é {props.numero} </h2>
                {props.numero % 2 == 0 ? <h3 style={{color:'blue'}}>PAR</h3> : <h3 style={{color:"yellow"}}>IMPAR</h3>}
            </div>
        );
}

export default Produtos;