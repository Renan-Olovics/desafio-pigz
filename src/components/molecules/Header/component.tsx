import { Icon, Link } from '@/components/atoms'

export const Header = () => {
  return (
    <header className="flex w-full justify-between px-4 my-4" role="banner">
      <Icon name="logo2" width={60} height={32} aria-label="Pigz Logo" role="img" />
      <nav role="navigation" aria-label="Menu principal">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://pigz.com.br/"
          ariaLabel="Acessar área do parceiro"
        >
          Já sou parceiro
        </Link>
      </nav>
    </header>
  )
}
