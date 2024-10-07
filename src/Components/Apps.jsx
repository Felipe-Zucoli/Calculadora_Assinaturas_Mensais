import Aplicativos from "./Aplicativos";

const Apps = () => {
    return (
    <select id="aplicativos">
        <option value="">Selecione os aplicativos</option>
        {Object.keys(Aplicativos).map((appKey) => (
            <option key={appKey} value={Aplicativos[appKey].nome}>
                {Aplicativos[appKey].nome}
            </option>
        ))}
    </select>
    )
}

export default Apps; 