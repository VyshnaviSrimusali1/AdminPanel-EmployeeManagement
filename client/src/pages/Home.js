import Jumbotron from "../components/nav/cards/Jumbotron";
import { useAuth } from "../context/auth";

function Home() {
  const [auth] = useAuth(); 
  
  return (
    <div className="App">
      <Jumbotron />
    </div>
  );
}

export default Home;
