import { React, useState} from "react";
import AppRouter from "components/Router";
import authorServie from "fb";

console.log(authorServie.currentUser);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authorServie.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
