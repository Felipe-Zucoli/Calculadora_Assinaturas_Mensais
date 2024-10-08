import { useState } from "react";
import Apps from "./Apps";
import Valores from "./Valores";
import './ListApps.css';
import ValoresList from "./ValoresList";
import PizzaGrafico from "./GraficoPizza";
/* Fazer alteração na nomenclatura da div classname Body, usar container */
/* Fazer uma lista com todos os aplicativos */
/* Alterações Feitas */

const ListApps = () => {
    const [selectedApp, setSelectedApp] = useState("");
    const [selectedValor, setSelectedValor] = useState("");
    const [valores, setValores] = useState([]);

    const handleAppChange = (event) =>{
        setSelectedApp(event.target.value);
        setSelectedValor("");
    }
    
    const handleValorChange = (event) => {
        setSelectedValor(event.target.value);
    }
    
    const handleAddValue = () =>{
        if (selectedApp && selectedValor) {
            setValores(prev =>[...prev,{ app:selectedApp ,valor:selectedValor}]);
            setSelectedApp("");
            setSelectedValor("");
        }
    }

    return (
    <div className="container"> 
        <form>
            <label htmlFor="aplicativos">Aplicativos:</label>
            <Apps handleAppChange={handleAppChange} selectedApp={selectedApp}/>
        </form>
        {selectedApp && (
            <form>
            <label htmlFor="valores">Valores:</label>
            <Valores selectedApp={selectedApp} handleValorChange={handleValorChange}/>
            </form>
        )}
        {selectedValor &&(
            
            <button onClick={handleAddValue} className="buttonAdd">
                Adicionar valor a lista
            </button>  
            
        )}
        {valores.length > 0 && < ValoresList valores={valores}/>}
        {valores.length > 0 && <PizzaGrafico valores={valores}/>} 
    </div>
)
}

export default ListApps;