import { useState } from 'react'
import MainPage from './components/MainPage'
import Step1 from './components/steps/Step1'
import Step2 from './components/steps/Step2'
import Step3 from './components/steps/Step3'
import Step4 from './components/steps/Step4'
import Step5 from './components/steps/Step5'
import Step6 from './components/steps/Step6'
import Step7 from './components/steps/Step7'

function App() {
  const [currentStep, setCurrentStep] = useState<'main' | 1 | 2 | 3 | 4 | 5 | 6 | 7>('main')

  if (currentStep === 7) {
    return <Step7 onBack={() => setCurrentStep(6)} onNext={() => setCurrentStep('main')} />
  }

  if (currentStep === 6) {
    return <Step6 onBack={() => setCurrentStep(5)} onNext={() => setCurrentStep(7)} />
  }

  if (currentStep === 5) {
    return <Step5 onBack={() => setCurrentStep(4)} onSubmit={() => setCurrentStep(6)} />
  }

  if (currentStep === 4) {
    return <Step4 onBack={() => setCurrentStep(3)} onNext={() => setCurrentStep(5)} />
  }

  if (currentStep === 3) {
    return <Step3 onBack={() => setCurrentStep(2)} onNext={() => setCurrentStep(4)} />
  }

  if (currentStep === 2) {
    return <Step2 onBack={() => setCurrentStep(1)} onNext={() => setCurrentStep(3)} />
  }

  if (currentStep === 1) {
    return <Step1 onNext={() => setCurrentStep(2)} />
  }

  return <MainPage onNavigateToContract={() => setCurrentStep(1)} />
}

export default App
