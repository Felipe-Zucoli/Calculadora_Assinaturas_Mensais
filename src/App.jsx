import './App.css'
import ListApps from './Components/ListApps'
import ListValores from './Components/ListValores'
function App() {
  return (
    <div className='Body'>
      <h1 className='Titulo'>Calculadora de Assinaturas Mensais</h1>
      <p className='TextoAss'>Selecione primeiro sua assinatura.</p>
      <ListApps/>
      <p className='TextoAss'>Agora selecione o seu plano.</p>
      <ListValores/>
    </div>
  )
}

export default App
