import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'
import { tv } from 'tailwind-variants'
import { Icon } from '@/components/atoms'

export type SelectOption = {
  value: string | number
  label: string
}

const containerStyles = tv({
  base: 'flex flex-col gap-1 relative',
})

const selectStyles = tv({
  base: 'block w-full border-[1px] border-white rounded p-1 pl-4 text-black bg-transparent transition-all duration-200 ease-in-out focus:outline-none focus:border-primary h-[48px] appearance-none pr-8 relative overflow-hidden whitespace-nowrap text-ellipsis',
  variants: {
    error: {
      true: 'border-red-500',
      false: 'border-gray-400',
    },
    disabled: {
      true: 'bg-gray-100 text-gray-400 cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    error: false,
    disabled: false,
  },
})

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[]
  label?: string
  error?: string
  className?: string
  disabled?: boolean
}

type FormProps<T extends FieldValues> = Omit<Props, 'name'> & {
  name: Path<T>
}

export const Select = ({ options, label, error, className, disabled, ...rest }: Props) => {
  return (
    <div className={containerStyles({ className })}>
      {label && <label className="text-xs leading-[18px] text-gray-800">{label}</label>}
      <div className="relative">
        <select
          className={selectStyles({ error: !!error, disabled, className })}
          disabled={disabled}
          {...rest}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value} className="bg-transparent text-black">
              {label}
            </option>
          ))}
        </select>
        <Icon
          name="arrow"
          size={20}
          className={`absolute right-2.5 top-1/2 -translate-y-1/2 brightness-0 ${
            disabled ? 'opacity-50' : ''
          }`}
        />
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}

export const FormSelect = <T extends FieldValues>({ name, label, ...props }: FormProps<T>) => {
  const formContext = useFormContext<T>()

  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field, fieldState }) => (
        <Select {...field} {...props} label={label} error={fieldState.error?.message} />
      )}
    />
  )
}
