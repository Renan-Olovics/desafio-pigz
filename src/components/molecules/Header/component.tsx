import { Icon, Link } from '@/components/atoms'

export const Header = () => {
  return (
    <header className="flex w-full justify-between px-4 my-4">
      <Icon name="logo2" width={60} height={32} />
      <Link href="#">Já sou parceiro</Link>
    </header>
  )
}
