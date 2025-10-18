import { Card, CardContent } from "@/components/ui/card"
import { Plane, Home, FileCheck, Headphones } from "lucide-react"

const benefits = [
  {
    icon: Plane,
    title: "Passagem Aérea",
    description: "Fornecemos passagem aérea completa para candidatos aprovados no processo seletivo.",
  },
  {
    icon: Home,
    title: "Alojamento Garantido",
    description: "Acomodação confortável e segura já preparada para sua chegada na Suíça.",
  },
  {
    icon: FileCheck,
    title: "Documentação Completa",
    description: "Auxiliamos em toda documentação necessária, vistos e permissões de trabalho.",
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo",
    description: "Acompanhamento durante todo o processo e após sua chegada ao país.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Suporte Completo Para Sua Jornada</h2>
          <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
            Oferecemos um pacote completo de benefícios para garantir sua transição tranquila e bem-sucedida para o
            mercado de trabalho suíço.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:border-primary/30 hover:shadow-md transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
