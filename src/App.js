import './App.css';

import { useState } from 'react';
import AppRoute from "./AppRoute"

function App() {
  const [token,setToken] = useState(localStorage.getItem('userToken') ?? null);

  return <AppRoute/>
  // return (
  //   <div className="App">
  //     {token ? <> <Navbar setToken={setToken}/><Products/> </> : <Login token={token} setToken={setToken}/>}
  //   </div>
  // );

  //   const DeleteProduct = id => {
//     var data = {
//       "id": id,
//     };
//     fetch(`https://fakestoreapi.com/products/${id}`, {
//       method: "DELETE",
//       headers: {
//         Accept: 'application/form-data',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         alert(result["message"]);
//         if (result["status"] === "ok") {
//           ProductGet();
//         }
//       });
//   };
}

export default App;

