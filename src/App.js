import './App.css';
import LetterIntro from './components/LetterIntro/LetterIntro';
import TarjetaInvitacion from './components/TarjetaInvitacion/TarjetaInvitacion';
import './components/LetterIntro/styles.scss'
function App() {
  
  return (
    <div className="App" id='App' style={{position: "relative"}}>
      <LetterIntro/>
      <TarjetaInvitacion/>
    </div>
  );
}

export default App;
