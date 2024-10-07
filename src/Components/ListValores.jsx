import Valores from "./Valores"
import "./ListValores.css"

const ListValores = () => {
    return (
        <div className="containerValores">
            <form>
            <label htmlFor="valores">Valores:</label>
            <Valores/>
            </form>
            
        </div>
    )
}

export default ListValores;