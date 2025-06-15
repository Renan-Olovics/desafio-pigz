import { useState } from 'react'

import { Step1, Step2, Step3 } from './components'

export const FirstContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = {
    1: <Step1 next={() => setCurrentStep(2)} />,
    2: <Step2 next={() => setCurrentStep(3)} />,
    3: <Step3 />,
  }

  return (
    <div
      className="flex mx-auto flex-col bg-white w-96 rounded-3xl pt-8 pb-6 px-6"
      role="form"
      aria-label="Formulário de primeiro contato"
    >
      <div role="tabpanel" aria-label={`Etapa ${currentStep} de 3`} aria-live="polite">
        {steps[currentStep as keyof typeof steps] || steps[1]}
      </div>
    </div>
  )
}
