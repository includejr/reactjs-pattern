import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Import Includes
import NavBar from './pages/include/Navbar';
import Footer from './pages/include/Footer';

// Import Global CSS and auth
import './global.css';
import { isAuthenticated } from './auth.js';

// Import Page Index
const Index = lazy(() => import('./pages/Index'));

// Private Route. This route is accessed only when user be authenticate
const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
);   


const Routes = () => (
    
    <BrowserRouter>
        <NavBar />

        {/* Routes */}
        <Switch >
            <Route exact path="/" component={Index}  />
            <Route path="/ajudar" component={Ajuda}  />
            <Route path="/parceiros" component={Parceiros} />
        </Switch>
        {/* Routes */}
        
        <Footer />
    </BrowserRouter>
);

export default Routes;
