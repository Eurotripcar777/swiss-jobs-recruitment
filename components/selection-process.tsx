import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Envio de Formulário",
    description: "Preencha o formulário online com suas informações profissionais e envie seu currículo atualizado.",
    duration: "1-2 dias",
  },
  {
    number: "02",
    title: "Análise da Equipe",
    description:
      "Nossa equipe especializada avalia sua experiência, qualificações e adequação às vagas disponíveis na Suíça.",
    duration: "3-5 dias",
  },
  {
    number: "03",
    title: "Envio de Documentos",
    description:
      "Envio da documentação necessária para finalizar o processo e preparação para sua nova oportunidade profissional.",
    duration: "1 semana",
  },
]

export function SelectionProcess() {
  return (
    <section id="process" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Processo de seleção em 3 etapas</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Um processo transparente e estruturado para garantir que você esteja preparado para sua nova oportunidade
            profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium text-primary">Duração: {step.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Tempo total estimado:</span> 1-2 semanas do início ao fim
          </p>
        </div>
      </div>
    </section>
  )
}
