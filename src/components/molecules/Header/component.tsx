import { Icon, Link } from '@/components/atoms'

export const Header = () => {
  return (
    <header className="flex w-full justify-between px-4 my-4">
      <Icon name="logo2" width={60} height={32} />
      <Link target="_blank" rel="noopener noreferrer" href="https://pigz.com.br/">
        Já sou parceiro
      </Link>
    </header>
  )
}
