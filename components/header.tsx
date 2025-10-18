"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center group-hover:bg-primary/90 transition-colors">
              <span className="text-primary-foreground font-bold text-lg">SC</span>
            </div>
            <span className="font-semibold text-base lg:text-lg text-foreground">Swiss Career Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("benefits")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Processo
            </button>
            <button
              onClick={() => scrollToSection("jobs")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Vagas
            </button>
            <Link
              href="/salarios"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Salários
            </Link>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Depoimentos
            </button>
            <div className="ml-2">
              <Button onClick={() => scrollToSection("apply")} size="sm" className="text-sm">
                Candidatar-se
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-accent/50 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection("jobs")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
              >
                Vagas
              </button>
              <Link
                href="/salarios"
                onClick={() => setIsMenuOpen(false)}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
              >
                Salários
              </Link>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
              >
                Depoimentos
              </button>
              <div className="px-4 pt-2">
                <Button onClick={() => scrollToSection("apply")} className="w-full">
                  Candidatar-se
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
