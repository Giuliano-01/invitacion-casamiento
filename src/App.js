import './App.css';
import LetterIntro from './components/LetterIntro/LetterIntro';
import TarjetaInvitacion from './components/TarjetaInvitacion/TarjetaInvitacion';
import './components/LetterIntro/styles.scss'
import { ToggleProvider } from './hooks/useIsLetterOpen';
function App() {
  
  return (
    <ToggleProvider>
      <div className="App" id='App' style={{position: "relative"}}>
        <LetterIntro/>
        <TarjetaInvitacion/>
      </div>
    </ToggleProvider>
  );
}

export default App;
