import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import Aplicativos from './Aplicativos';

Chart.register(ArcElement, Tooltip, Legend);

const PizzaGrafico = ({valores}) => {
    const data = {
        labels: valores.map(item => item.app),
        datasets: [{
            data: valores.map(item => parseFloat(item.valor)),
            backgroundColor: valores.map(item => Aplicativos[item.app].cor)
        }],
    };
    return(
        <div>
            <h2>Gastos por Aplicativo</h2>
            <Pie data={data}/>
        </div>    
    )
}

export default PizzaGrafico;