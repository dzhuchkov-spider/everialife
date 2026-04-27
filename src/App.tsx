import { useState } from 'react'
import MainPage from './components/MainPage'
import ContractPage from './components/ContractPage'
import Step2Content from './components/Step2Content'

function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'contract' | 'step2'>('main')

  if (currentPage === 'step2') {
    return <Step2Content onBack={() => setCurrentPage('contract')} />
  }

  if (currentPage === 'contract') {
    return <ContractPage onNext={() => setCurrentPage('step2')} />
  }

  return <MainPage onNavigateToContract={() => setCurrentPage('contract')} />
}

export default App
