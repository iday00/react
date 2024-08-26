import React, {useState} from 'react';
import api from './api';

export default function Component() {


const [data, setData] = useState("");
const cuandopresiones = () => {

api.getData().then((res)=> {
  setData(res.data);
alert(`Tu mensaje es: ${JSON.stringify(data)}`);
});
  };
  return (
    <div>
      <button onClick={cuandopresiones}>Actualizar</button>
    </div>
  )};