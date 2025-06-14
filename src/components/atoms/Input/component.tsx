import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'
import { Icon } from '@/components/atoms'
import { PatternFormat, PatternFormatProps } from 'react-number-format'

const input = tv({
  base: 'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 placeholder:text-gray-300 placeholder:text-sm h-12',
  variants: {
    error: {
      true: 'border-red-500',
      false: 'border-gray-400 z-20',
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

type BaseProps = {
  label?: string
  error?: string
  className?: string
  value?: string
}

type PhoneInputProps = BaseProps &
  Omit<PatternFormatProps, 'format' | 'mask' | 'value'> & {
    type: 'phone'
  }

type RegularInputProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'> & {
    type?: Exclude<InputHTMLAttributes<HTMLInputElement>['type'], 'phone'>
  }

type Props = PhoneInputProps | RegularInputProps

type FormProps<T extends FieldValues> = Omit<Props, 'name'> & {
  name: Path<T>
}

export const Input = ({ label, error, className, value = '', type = 'text', ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1 relative">
      {label && <label className="text-xs leading-[18px] text-gray-800">{label}</label>}
      {type === 'phone' && (
        <div className="absolute bottom-0 bg-[#F0F0F0] h-12 w-[100px] flex items-center justify-center p-3 rounded-l-lg">
          <Icon name="brazil" />
          <span className="text-sm leading-[21px] text-gray-500 pl-2 font-light">+55</span>
          <Icon name="arrow" size={50} />
        </div>
      )}
      {type === 'phone' ? (
        <PatternFormat
          className={input({ error: !!error, isPhone: true, className })}
          mask="_"
          value={value}
          {...(props as PatternFormatProps)}
          format="(##) #####-####"
        />
      ) : (
        <input
          className={input({ error: !!error, className })}
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
