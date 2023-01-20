import React ,{useState }from "react";

const AddCajas=(props)=>{
    
    const [color,setColor]=useState('')
    const envio =(e)=>{
        e.preventDefault();
        props.guarda(color);
        setColor('');
    }
    return (<div >
        <form  onSubmit={envio} className="container">
            <div className="form">
                <label htmlFor="color" className="label-conten">Color</label>
                <input className="form_input" type="text" id="color" value={color} onChange={(e)=>{
                    setColor(e.target.value)
                }}/>
                <button className="btn" type="submit">Add</button>
            </div>
        </form>
    </div>) 
}

export default AddCajas