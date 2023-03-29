import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './routes/Home';
import CalculatorPage from './routes/CalculatorPage';
import Quote from './routes/Quote';
import NotMatch from './routes/NotMatch';
import './styles/App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Calculator" element={<CalculatorPage />} />
      <Route path="Quote" element={<Quote />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default App;
