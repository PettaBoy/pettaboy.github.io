import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import VirtualMusicKeyboard from './screens/vmk';
import CymaticsSimulatorPage from './screens/cymatics-simulator';
import LyricsMainPage from './screens/lyrics/lyricsmain';
import LyricsPage from './screens/lyrics/lyricsfull';
import NotFound from './screens/notfound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/virtualmusickeyboard" element={<VirtualMusicKeyboard/>}/>
          <Route path="/cymaticssimulator" element={<CymaticsSimulatorPage/>}/>
          <Route path="/lyrics" element={<LyricsMainPage/>}/>
          <Route path="/lyrics/:lyricsId" element={<LyricsPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
