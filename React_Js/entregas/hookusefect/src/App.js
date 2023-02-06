import './App.css';



function App() {

//Promise

  const task = new Promise((resolve, reject) => {
    const condition = true;

    if (condition) {
      resolve('resuelvo tarea')
    } else {
      reject('no resuelve la tarea')
    }
    
  });

  task
  .then((result) => {
    console.log('result', result);
  throw new Error('error dentro de then')});
  task.catch(()=>alert('Peligro'))

  return (
    <div className="App">
    </div>
  );
}

export default App;
