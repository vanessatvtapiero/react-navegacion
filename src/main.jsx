
import ReactDOM from 'react-dom/client'
import './index.css'   // <- Asegúrate de tener esta línea
import './index.css'   // (deja solo una si ya existía)
import Navbar from './Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<Navbar/>)