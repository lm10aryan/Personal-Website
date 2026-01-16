export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warmgray">
          <p>© 2026 Aryan Thepade</p>
          <div className="flex gap-6">
            <a 
              href="mailto:aryan@fasaltech.com" 
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/aryan-thepade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/lm10aryan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
