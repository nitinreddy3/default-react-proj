require('./theme/default/stylesheets/all.sass');
require('./javascript/frontend/custom.js');
require('react-select/dist/react-select.css');
import ReactDOM from 'react-dom';
import { useRouterHistory, Router, Route } from 'react-router';
import { createHashHistory } from 'history';
import Header from './javascript/modules/commons/Header';
import Alert from './javascript/modules/commons/Alert';
import Footer from './javascript/modules/commons/Footer';
import PageNotFound from './javascript/modules/unauthorized/components/PageNotFound';
import DashboardRoutes from './javascript/modules/dashboard/routes';
const history = useRouterHistory(createHashHistory)({ queryKey: false });

const ForgotPassword = React.createClass({
  render: function () {
    return (
      <h1>Forgot me</h1>
    )
  }
});

const Root = React.createClass({
  render() {
    return (
      <div id='mainContainer'>
        <Router onUpdate={() => window.scrollTo(0, 0)} history = {history}>
          {DashboardRoutes}
          <Route path="*" component={PageNotFound}/>
        </Router>
      </div>
    );
  },
});

ReactDOM.render(<Root />, document.getElementById('app'));
