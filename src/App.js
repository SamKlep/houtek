import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import './App.css'
import HomeScreen from './components/screens/HomeScreen'
import Footer from './components/ui/Footer'
import AboutScreen from './components/screens/AboutScreen'
import ServicesScreen from './components/screens/ServicesScreen'
import PortfolioScreen from './components/screens/PortfolioScreen'
import BlogScreen from './components/screens/BlogScreen'
import ContactScreen from './components/screens/ContactScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutScreen} exact />
        <Route path='/services' component={ServicesScreen} exact />
        <Route path='/portfolio' component={PortfolioScreen} exact />
        <Route path='/blog' component={BlogScreen} exact />
        <Route path='/contact' component={ContactScreen} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
