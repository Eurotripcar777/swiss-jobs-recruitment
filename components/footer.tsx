import { Mail, Phone, MapPin, Award, Shield, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">SC</span>
              </div>
              <span className="font-bold text-lg">Swiss Career Connect</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Conectando talentos brasileiros a oportunidades excepcionais na Suíça desde 2009.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#benefits"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Processo Seletivo
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Vagas Disponíveis
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={16} />
                <span>swisscareerconect@outlook.com</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={16} />
                <span>+41 76277 18 37</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={16} />
                <span>Zurich, Suíça</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Certificações</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">Certificado B Corp</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">
                    Altos padrões de desempenho social e ambiental
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">Licenciado pela Seco</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Licença federal de recrutamento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">Ferozmente Distinto</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Inovação e integridade</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2025 Swiss Career Connect. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
