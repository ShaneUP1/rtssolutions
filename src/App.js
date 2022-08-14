import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/searchPage';
import AppHeader from './headers/appHeader';
import HistoryPage from "./pages/historyPage";

const App = () => {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route  exact path='/' element={<SearchPage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
