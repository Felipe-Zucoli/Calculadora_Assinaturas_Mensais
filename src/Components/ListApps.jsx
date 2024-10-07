import { useState } from "react";
import Apps from "./Apps";
import Valores from "./Valores";
import './ListApps.css';

/* Fazer alteração na nomenclatura da div classname Body, usar container */
/* Fazer uma lista com todos os aplicativos */
/* Alterações Feitas */

const ListApps = () => {
    const [selectedApp, setSelectedApp] = useState("");
    const [SelectedValor, setSelectedValor] = useState("");

    const handleAppChange = (event) =>{
        setSelectedApp(event.target.value);
        setSelectedValor("");
    }
    
    const handleValorChange = (event) => {
        setSelectedValor(event.target.value);
    }
    
    return (
    <div className="container"> 
        <form>
            <label htmlFor="aplicativos">Aplicativos:</label>
            <Apps handleAppChange={handleAppChange}/>
        </form>
        {selectedApp && (
            <form>
            <label htmlFor="valores">Valores:</label>
            <Valores selectedApp={selectedApp} handleValorChange={handleValorChange}/>
            </form>
        )}
        {SelectedValor &&(
            <>
            <button onClick={() => alert(`Aplicativos: ${selectedApp}, Valor: ${SelectedValor}`)} className="buttonAdd">
                Adicionar valor a lista
            </button> 
            <button onClick={() => alert(`Aplicativos: ${selectedApp}, Valor: ${SelectedValor}`)} className="buttonFinalize">
                Adicionar valor a lista e finalizar
            </button> 
            </>
        )}
    </div>
)
}

export default ListApps;