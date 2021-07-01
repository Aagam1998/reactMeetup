import { Route, Switch } from 'react-router';
import './App.css';
import AllMeetUp from './Pages/AllMeetUp';
import Favorite from './Pages/Favorite';
import NewMeetup from './Pages/NewMeetup';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <>
    {/* <Header/>
    <SloatM x="😄" y="😄" z="😄"/>
    <SloatM x="😄" y="🍰" z="😄"/>
    <SloatM x="❤️" y="😄" z="😄"/>
    <SloatM x="🤗" y="🤗" z="🤗"/>
    <Couter/> */}

   <Layout>    
     <Switch>
      <Route path='/'exact> 
        <AllMeetUp/>
      </Route>
      <Route path='/favorites'>
        <Favorite/>
      </Route>
      <Route path='/newmeetup'>
        <NewMeetup/>
      </Route>
    </Switch>
  </Layout>

    </>
    );
}

export default App;
