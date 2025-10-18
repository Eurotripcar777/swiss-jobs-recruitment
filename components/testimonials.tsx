import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Técnico em Construção",
    location: "Zurique",
    image: "/professional-man-portrait.png",
    content:
      "O processo foi muito transparente e profissional. Em 6 semanas estava trabalhando em Zurique com tudo organizado: casa, documentos e um ótimo emprego.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Enfermeira",
    location: "Genebra",
    image: "/professional-woman-portrait.png",
    content:
      "Sempre sonhei em trabalhar na Suíça. A Swiss Career Connect tornou isso realidade, cuidando de cada detalhe. Estou muito feliz com minha nova vida aqui.",
    rating: 5,
  },
  {
    name: "Miguel Santos",
    role: "Chef de Cozinha",
    location: "Lausanne",
    image: "/chef-portrait.png",
    content:
      "Excelente suporte desde o primeiro contato. A equipe me ajudou com tudo, desde a entrevista até a mudança. Recomendo para todos que buscam oportunidades internacionais.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Histórias de sucesso</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Conheça profissionais que transformaram suas carreiras através das nossas oportunidades na Suíça.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-accent text-accent" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
