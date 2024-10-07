import './App.css'
import ListApps from './Components/ListApps'
import Nav from './Components/Nav'

function App() {
  return (
    <div className='Body'>
      <Nav/>
      <h1 className='Titulo'>Calculadora de Assinaturas Mensais</h1>
      <p className='TextoAss'>Selecione primeiro sua assinatura.</p>
      <ListApps/>
    </div>
  )
}

export default App
