import './App.css';
import LetterIntro from './components/LetterIntro/LetterIntro';
import TarjetaInvitacion from './components/TarjetaInvitacion/TarjetaInvitacion';
import './components/LetterIntro/styles.scss'
import { ToggleProvider } from './hooks/useIsLetterOpen';
import { Backdrop } from './components/TarjetaInvitacion/page5/styles';
import { ImageOpenProvider } from './hooks/useImageOpen';
function App() {
  
  return (
    <ToggleProvider>
    <ImageOpenProvider>
      <div className="App" id='App' style={{position: "relative"}}>
        <LetterIntro/>
        <TarjetaInvitacion/>
      </div>
    </ImageOpenProvider>
    </ToggleProvider>
  );
}

export default App;
