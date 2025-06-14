import { type ReactNode, useState, useEffect } from 'react'
import { tv } from 'tailwind-variants'

type Props = {
  items: ReactNode[]
}

const styles = tv({
  base: 'h-[4px] rounded-full cursor-pointer',
  variants: {
    active: {
      true: 'bg-[#FF6B00]',
      false: 'bg-[#E0E0E0]',
    },
  },
})

export const Carrousel = ({ items }: Props) => {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % items.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 w-full">
        {items.map((_, index) => (
          <span
            key={index}
            className={styles({ active: index === currentStep })}
            style={{
              width: `calc((100% - ${(items.length - 1) * 8}px) / ${items.length})`,
            }}
            onClick={() => setCurrentStep(index)}
          />
        ))}
      </div>
      {items[currentStep]}
    </div>
  )
}
