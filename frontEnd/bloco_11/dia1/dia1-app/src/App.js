import './App.css';

const comp = ['fazer compra', 'mineirar eth', 'comprar mais placa de video']

const Task = () => comp.map((tarefa) => <li>{tarefa}</li>);

function App() {
  return (
    <div className="App">
      <Task/>
    </div>
  );
}

export default App;
