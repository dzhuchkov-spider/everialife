import { useState } from 'react'
import MainPage from './components/MainPage'
import ContractPage from './components/ContractPage'

function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'contract'>('main')

  if (currentPage === 'contract') {
    return <ContractPage onBack={() => setCurrentPage('main')} />
  }

  return <MainPage onNavigateToContract={() => setCurrentPage('contract')} />
}

export default App
