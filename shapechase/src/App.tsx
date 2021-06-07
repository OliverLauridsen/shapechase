import './App.scss'
import Header from './components/HeaderMain'
import CardContainer from './components/CardContainer'
import TrainingLog from './components/TrainingLog'
import WorkoutProgram from './components/WorkoutProgram'
import Nutrition from './components/Nutrition'
import Analytics from './components/Analytics'
import Burger from './components/Burger/Burger'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="app">
        <span className="front_page_wrapper">
          <Header />
          <Burger />
          <main className="app_main">
            <Switch>
              <Route exact path="/" component={CardContainer} />
              <Route path="/training-log" component={TrainingLog} />
              <Route path="/workout-programs" component={WorkoutProgram} />
              <Route path="/nutrition" component={Nutrition} />
              <Route path="/analytics" component={Analytics} />
            </Switch>
          </main>
        </span>
      </div>
      </Router>
  ) 
  
}


export default App