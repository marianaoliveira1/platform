import Available from './components/Available';
import Header from './components/Header';
import Impact from './components/Impact';
import Member from './components/Member';
import  GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Member />
      <Available />
      <Impact />
    </>
  );
}

export default App;
