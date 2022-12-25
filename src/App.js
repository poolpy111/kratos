import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [row, setRow] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setRow(json);
      }
      
      fetchData();
    }
    getData("/api");
  }, []);

  let loading = null
  let email_id;
  let thread_id;
  let label_ids;
  let from_text;
  let from_email;
  let cc_email;
  let bcc_email;
  let to_email;
  let date_init;
  if (!row){
    loading = 'Loading...';
  } else {
    email_id = row.result[0].email_id;
    thread_id = row.result[0].thread_id;
    label_ids = row.result[0].label_ids;
    from_text = row.result[0].from_text;
    from_email = row.result[0].from_email;
    cc_email = row.result[0].cc_email;
    bcc_email = row.result[0].bcc_email;
    to_email = row.result[0].to_email;
  }


  return (
    <div className="App">
      <div className="json-data">
        <div className='email_id'>
          <h1>Email ID: </h1>
          <h4>{loading !== null ? loading : email_id}</h4>
        </div>
        <div className='thread_id'>
          <h1>Thread ID: </h1>
          <h4>{loading !== null ? loading : thread_id}</h4>
        </div>
        <div className='label_ids'>
          <h1>Label IDs: </h1>
          <h4>{loading !== null ? loading : label_ids}</h4>
        </div>
        <div className='from_text'>
          <h1>From text: </h1>
          <h4>{loading !== null ? loading : from_text}</h4>
        </div>
      </div>
    </div> 
  );
}

export default App;
