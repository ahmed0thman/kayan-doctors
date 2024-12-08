import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './Settings/store/store';
import { router } from './Settings/router/router';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
