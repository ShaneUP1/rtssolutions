import { Routes, Route } from "react-router-dom";
import SearchPage from './components/pages/searchPage';
import AppHeader from './components/headers/appHeader';
import HistoryPage from "./components/pages/historyPage";

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
