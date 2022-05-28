import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Layout } from './Layout';

export const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  )
};
