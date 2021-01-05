import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import TrainingScreen from './screens/TrainingScreen'
import ConsultingScreen from './screens/ConsultingScreen'
import ConstructionScreen from './screens/ConstructionScreen'
import EmployersScreen from './screens/EmployersScreen'
import ContactScreen from './screens/ContactScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/about' component={AboutScreen} exact />
      <Route path='/training' component={TrainingScreen} exact />
      <Route path='/consulting' component={ConsultingScreen} exact />
      <Route path='/construction' component={ConstructionScreen} exact />
      <Route path='/employers' component={EmployersScreen} exact />
      <Route path='/contact' component={ContactScreen} exact />
      <Footer />
    </Router>
  )
}

export default App
