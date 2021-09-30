import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import Register from './views/register';
import Home from './views/home';
import NotFound from './views/notFound';
import Login from './views/login';
import Perfil from './views/perfil';
import { PrivateRoute } from './rutas/PrivateRoute';



const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/perfil" component={Perfil}/>
                <Route component={NotFound} />
            </Switch> 
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);