//IMPORTS
import './App.css';
//Componentes
import Navigation from "./Components/Navigation/Navigation";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';
import ItemCount from './Components/ItemCount/ItemCount';
//React-Router-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Nosotros from "./Pages/Nosotros";
import Error from "./Pages/Error"; 
//Function
function App() {
	return (
		<Router>
			<div className="App">
				<div className='header-container'>
					<Navigation />
				</div>
				<div className='main-container'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Nosotros" element={<Nosotros />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="*" element={<Error />} />
						<Route path="/category/:categoryId" element={<ItemListContainer/>} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<ItemCount />} />
					</Routes>
				</div>
				<div className='footer-container'>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
