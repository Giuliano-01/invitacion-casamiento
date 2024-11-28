import './App.css';
import LetterIntro from './components/LetterIntro/LetterIntro';
import TarjetaInvitacion from './components/TarjetaInvitacion/TarjetaInvitacion';
import './components/LetterIntro/styles.scss'
function App() {
  
  return (
    <div className="App">
      <LetterIntro/>
      <TarjetaInvitacion/>
    </div>
  );
}

export default App;
