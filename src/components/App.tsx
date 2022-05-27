import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { RootRouter } from './router/RootRouter';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
