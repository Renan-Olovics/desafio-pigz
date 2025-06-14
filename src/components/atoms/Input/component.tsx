import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'
import { Icon } from '@/components/atoms'
import { PatternFormat, PatternFormatProps } from 'react-number-format'

const styles = tv({
  base: 'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 placeholder:text-gray-300 placeholder:text-sm h-12 z-20 focus:border-primary',
  variants: {
    error: {
      true: 'border-red-500',
      false: 'border-gray-400',
    },
    isPhone: {
      true: 'pl-[116px]',
    },
  },
  defaultVariants: {
    error: false,
    isPhone: false,
  },
})

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  className?: string
  value?: string
  format?: string
  flag?: boolean
}

type FormProps<T extends FieldValues> = Omit<Props, 'name'> & {
  name: Path<T>
}

export const Input = ({
  label,
  error,
  className,
  value = '',
  format,
  type = 'text',
  flag = false,
  ...props
}: Props) => {
  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      {label && <label className="text-xs leading-[18px] text-gray-800">{label}</label>}
      {flag && (
        <div
          className={`absolute bg-[#F0F0F0] h-12 w-[100px] flex items-center justify-center p-3 rounded-l-lg ${
            label ? 'top-[22px]' : 'top-0'
          }`}
        >
          <Icon name="brazil" />
          <span className="text-sm leading-[21px] text-gray-500 pl-2 font-light">+55</span>
          <Icon name="arrow" size={50} />
        </div>
      )}
      {format ? (
        <PatternFormat
          className={styles({ error: !!error, isPhone: flag, className })}
          mask="_"
          value={value}
          {...(props as PatternFormatProps)}
          format={format}
        />
      ) : (
        <input
          className={styles({ error: !!error, className })}
          value={value}
          type={type}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}

export const FormInput = <T extends FieldValues>({ name, label, ...props }: FormProps<T>) => {
  const formContext = useFormContext<T>()

  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field, fieldState }) => (
        <Input {...field} {...props} label={label} error={fieldState.error?.message} />
      )}
    />
  )
}
