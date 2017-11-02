import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import NotFound from './NotFound'

const Root = () => (
    <Router>
        <Switch>
        <Route path="/" component= {App} />
        <Route component={NotFound} />
        </Switch>
    </Router>
)

export default Root