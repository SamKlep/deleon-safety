import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path='/' component={HomeScreen} exact />
      </Container>
    </Router>
  )
}

export default App
