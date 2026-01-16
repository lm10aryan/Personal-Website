import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'Story' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-charcoal/10">
      <div className="container-custom py-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold hover:text-accent transition-colors">
          Aryan Thepade
        </Link>
        
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                router.pathname === link.href ? 'text-accent' : 'text-warmgray'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
