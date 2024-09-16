import './App.css'
import Footer from './components/common/Footer'
import { Toaster } from './components/ui/toaster'
import { PlaceProvider } from './context/PlaceContext'
import { PointsProvider } from './context/PointContext'
import HomePage from './pages/Home'
import MapPage from './pages/Map'

function App() {
  return (
    <PointsProvider>
      <PlaceProvider>
        <HomePage />
        <MapPage />
        <Footer />
      </PlaceProvider>
      <Toaster />
    </PointsProvider>
  )
}

export default App
