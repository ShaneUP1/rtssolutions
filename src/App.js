import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/searchPage';
import AppHeader from './headers/appHeader';

const App = () => {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/history' element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
