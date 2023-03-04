import './App.css';
import ContactComponentA from './components/componentA';

function App() {
  const contactoPrueba1 = {
    nombre: 'Rauane',
    apellido: 'Lima',
    email: 'rauane@lima.com',
    conectado: false,
  };

  const contactoPrueba2 = {
    nombre: 'João',
    apellido: 'Lino',
    email: 'juao@lino.com',
    conectado: true,
  };

  return (
    <div className="App">
      <header className="App-header">
        <ContactComponentA contact={contactoPrueba1} />
        <ContactComponentA contact={contactoPrueba2} />
      </header>
    </div>
  );
}

export default App;
