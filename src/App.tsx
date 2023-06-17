import { Navigate, Route, Routes } from 'react-router-dom';

import Error from './pages/error/Error';
import Recipes from './pages/recipes/Recipes';
import Ingredients from './pages/ingredients/Ingredients';

import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route
          path="/recipes"
          element={
            <MainLayout>
              <Recipes />
            </MainLayout>
          }
        />
        <Route
          path="/ingredients"
          element={
            <MainLayout>
              <Ingredients />
            </MainLayout>
          }
        />
        <Route path="/404" element={<Error statusCode={404} />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
