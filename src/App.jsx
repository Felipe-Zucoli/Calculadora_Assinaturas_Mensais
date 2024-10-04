import './App.css'
import ListApps from './Components/ListApps'
function App() {
  return (
    <div className='Body'>
      <h1 className='Titulo'>Calculadora de Assinaturas Mensais</h1>
      <p className='TextoAss'>Selecione todas as suas assinaturas.</p>
      <ListApps/>
    </div>
  )
}

export default App
