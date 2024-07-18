import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Inventory from './components/Inventory';
import Pricing from './components/Pricing';
import Orders from './components/Orders';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink 
                to="/inventory" 
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
              >
                Inventory
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/pricing" 
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/orders" 
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
              >
                Orders
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function NotFound() {
  return <h2>Page Not Found</h2>;
}

export default App;
