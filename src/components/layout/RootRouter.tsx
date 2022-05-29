import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { City } from '../pages/city/City';
import { Home } from '../pages/home/Home';
import { Layout } from './Layout';

export const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:cityName" element={<City />} />
        </Routes>
      </Layout>
    </Router>
  )
};
