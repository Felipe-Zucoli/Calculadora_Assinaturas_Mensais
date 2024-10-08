import Aplicativos from "./Aplicativos";

const Apps = ({handleAppChange, selectedApp}) => {
    return (
    <select id="aplicativos" value={selectedApp} onChange={handleAppChange}>
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