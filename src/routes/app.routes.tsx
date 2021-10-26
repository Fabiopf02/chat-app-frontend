import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Room from '../pages/Room';
import RoomDetails from '../pages/RoomDetails';
import UserDetails from '../pages/UserDetails';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" component={Home} />
        <Route exact path="/room/:id" component={Room} />
        <Route path="/room/:id/details" component={RoomDetails} />
        <Route path="/profile" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
