import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { City } from '../pages/city/City';
import { Home } from '../pages/home/Home';
import { Layout } from './Layout';

export const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}`} element={<Home />} />
          <Route
            path={`${process.env.PUBLIC_URL}/:cityName`}
            element={<City />}
          />
        </Routes>
      </Layout>
    </Router>
  )
};
