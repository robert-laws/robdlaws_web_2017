var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, hashHistory } from 'react-router'
import { App } from './components/App'
import { Page404 } from './components/Page404'

window.React = React

render(
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="*" component={Page404} />
        </Router>,
        document.getElementById("app")
    )
