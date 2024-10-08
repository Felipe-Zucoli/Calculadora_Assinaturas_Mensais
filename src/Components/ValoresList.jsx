import { useState } from "react";
import React from "react";
import "./ValoresList.css";

const ValoresList = ({valores}) => {
    const SomaValores = () => {
        return valores.reduce((acc, curr) => acc + parseFloat(curr.valor),0)
    };
    return (
        <div className="containerListFinal">
            <h2 className="TextValFim">Valores e planos</h2>
            <ul>
                {valores.map((item, index)=>(
                    <li key={index}>
                        {item.app}: R$ {item.valor}
                    </li>
                ))}
            </ul>
            <h3>Total:R${SomaValores().toFixed(2)}</h3>
        </div>
    )
}

export default ValoresList;