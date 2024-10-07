import Aplicativos from "./Aplicativos";

const Valores = () => {
    return (
        <select id="aplicativos">
        <option value="">Selecione o valor da assinatura</option>
        {Object.keys(Aplicativos).map((appKey) => (
            <option key={appKey} value={Aplicativos[appKey].valorPad}>
                {Aplicativos[appKey].valorPad}
            </option>
        ))}
    </select>
    )
}

export default Valores;