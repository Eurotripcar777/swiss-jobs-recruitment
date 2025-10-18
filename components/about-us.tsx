import { Award, Shield, Sparkles } from "lucide-react"

export function AboutUs() {
  const features = [
    {
      icon: Award,
      title: "Certificado B Corp",
      description:
        "Somos uma agência de recrutamento certificada pela B Corp, o que significa que atendemos aos altos padrões de desempenho social e ambiental, transparência e responsabilidade do B Lab. Nossas partes interessadas podem ter certeza de que nosso impacto social e comercial está constantemente sob revisão e continuaremos a compartilhar nosso progresso por meio de nosso perfil público de B Corp abertamente.",
    },
    {
      icon: Shield,
      title: "Licenciado pela Seco",
      description:
        "Como uma agência de recrutamento registrada em Zurique, possuímos uma licença federal SECO. Esta acreditação permite-nos oferecer serviços de recrutamento temporário e permanente e garante total conformidade e tranquilidade durante todo o processo de contratação.",
    },
    {
      icon: Sparkles,
      title: "Ferozmente Distinto",
      description:
        "Nossos consultores experientes fornecem serviços de recrutamento excepcionais, apoiando candidatos a emprego e empregadores a atingir seus objetivos. Isso, combinado com nossa inovação e integridade.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprometidos com excelência, transparência e responsabilidade social
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
