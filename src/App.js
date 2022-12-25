import './App.css';


function App() {

  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
  
      }
    })
    .then(res => res.json());
  console.log(newData);
  }
  getData("/api");
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
