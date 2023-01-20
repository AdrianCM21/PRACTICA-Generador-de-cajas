import React from "react";
const Mostrar=(props)=>{
    const cajas=props.contenido;
    return (<div className="mostrar">
        {
            cajas.map((e,i)=>{
                return <div className="conten-mostrar" key={i} style={{background:e, width:'100px', height:'100px'}}></div>
            })
        }
    </div>)
}

export default Mostrar