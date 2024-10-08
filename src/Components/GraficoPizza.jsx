import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, plugins, animator } from 'chart.js';
import Aplicativos from './Aplicativos';
import "./GraficoPizza.css";
import { color } from 'chart.js/helpers';
Chart.register(ArcElement, Tooltip, Legend);

const PizzaGrafico = ({valores}) => {
    const data = {
        labels: valores.map(item => item.app),
        datasets: [{
            data: valores.map(item => parseFloat(item.valor)),
            backgroundColor: valores.map(item => Aplicativos[item.app].cor)
        }],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    font: {
                        size: 14,
                        family: "Arial",
                        weight: "bold",
                    },
                    color: "#333"
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: "rgba (0, 0, 0, 0.7)",
                titleFont: {size: 16},
                bodyFont: {size: 14},
                padding: 10
            }
        },
        animaton: {
            animateScale: true,
            animateRotate: true
        }
    }
    return(
        <div className='graficoContainer'>
            <h2>Gastos por Aplicativo</h2>
            <Pie data={data} className='graficoPizza'/>
        </div>    
    )
}

export default PizzaGrafico;