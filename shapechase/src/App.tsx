import './App.scss'
import Header from './components/HeaderMain'
import CardContainer from './components/CardContainer'
import TrainingLog from './components/TrainingLog'
import WorkoutProgram from './components/WorkoutProgram'
import Nutrition from './components/Nutrition'
import Analytics from './components/Analytics'
import Burger from './components/Burger/Burger'
import styled from 'styled-components'
import Menu from './components/Burger/Menu'

import { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const App = () => {

  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <StyledFrontPageWrapper>
          <Header />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <StyledMain>
            <Switch>
              <Route exact path="/" component={CardContainer} />
              <Route path="/training-log" component={TrainingLog} />
              <Route path="/workout-programs" component={WorkoutProgram} />
              <Route path="/nutrition" component={Nutrition} />
              <Route path="/analytics" component={Analytics} />
            </Switch>
          </StyledMain>
        </StyledFrontPageWrapper>
      </div>
      </Router>
  ) 
}


const StyledFrontPageWrapper = styled.span`
  display:flex;
  flex-direction: row;
`

const StyledMain = styled.main`
  background-color: #25294A;
  display: flex;
  color: white;
  width:100%;
  min-height: 100vh;

  @media (min-width: 1240px) {
    padding: 25px 50px 0 50px;
  }

`

export default App