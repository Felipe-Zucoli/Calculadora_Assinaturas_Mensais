import Aplicativos from "./Aplicativos";

const Valores = ({selectedApp, handleValorChange}) => {
    const appDetails = Aplicativos[selectedApp];
    return (
        <select id="valores" onChange={handleValorChange}>
        <option value="">Selecione o valor da assinatura</option>
        {appDetails &&(
            <>
            <option value={appDetails.valorBar}>Básico: R${appDetails.valorBar}</option>
            <option value={appDetails.valorPad}>Padrão: R${appDetails.valorPad}</option>
            <option value={appDetails.valorPre}>Premium: R${appDetails.valorPre}</option>
            </>
        )}
    </select>
    );
};

export default Valores;