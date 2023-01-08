import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import AnimeDetails from './Components/AnimeDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddAnime from './Components/AddAnime';
import SearchedAnime from './Components/SearchedAnime';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>

          <Route exact path="/Anime/">
            <Home />
          </Route>

          <Route path="/AnimeDetails:id">
            <AnimeDetails />
          </Route>

          <Route path="/addanime">
            <AddAnime/>
          </Route>

          <Route path="/search:searchkey">
            <SearchedAnime/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
