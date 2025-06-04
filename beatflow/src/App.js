import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/HomePage';
import PreferencesPage from './pages/PreferencesPage';
import MusicListPage from './pages/MusicListPage';
import PlayerPage from './pages/PlayerPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
        <Route path="/music" element={<MusicListPage />} />
        <Route path="/player/:id" element={<PlayerPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
