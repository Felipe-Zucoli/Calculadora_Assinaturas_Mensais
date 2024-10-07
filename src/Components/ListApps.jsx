import Apps from "./Apps"
import './ListApps.css'
/* Fazer alteração na nomenclatura da div classname Body, usar container */
/* Fazer uma lista com todos os aplicativos */
const ListApps = () => {
    return (
<div className="container"> 
    <form>
        <label htmlFor="aplicativos">Aplicativos:</label>
            <Apps/>
    </form>
</div>
)
}

export default ListApps;