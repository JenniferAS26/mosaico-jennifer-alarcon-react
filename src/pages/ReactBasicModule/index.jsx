import MiContador from '../../components/MiContador'
import MiComponente from '../../components/MiComponente'
import './styles.sass'

const ReactBasicModule = () => {
  return (
    <main className='basic-module'>
      <h1>MÓDULO SOBRE REACT JS</h1>
      <MiComponente />
      <MiContador />
    </main>
  )
}

export default ReactBasicModule
