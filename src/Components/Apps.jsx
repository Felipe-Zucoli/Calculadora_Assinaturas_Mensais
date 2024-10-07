import Aplicativos from "./Aplicativos";

const Apps = ({handleAppChange}) => {
    return (
    <select id="aplicativos" onChange={handleAppChange}>
        <option value="">Selecione um aplicativo</option>
        {Object.keys(Aplicativos).map((appKey) => (
            <option key={appKey} value={[appKey]}>
                {Aplicativos[appKey].nome}
            </option>
        ))}
    </select>
    )
}

export default Apps; 