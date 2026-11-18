import { ApiStatus } from './components/ApiStatus'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Security } from './components/Security'
import { TechStack } from './components/TechStack'
import { mainContentId } from './content'
import { LocaleProvider } from './i18n/LocaleProvider'

function App() {
  return (
    <LocaleProvider>
      <Header />
      <main id={mainContentId} tabIndex={-1} className="focus:outline-none">
        <Hero />
        <HowItWorks />
        <Features />
        <Security />
        <TechStack />
        <ApiStatus />
      </main>
      <Footer />
    </LocaleProvider>
  )
}

export default App
