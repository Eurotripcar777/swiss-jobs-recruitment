import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Wrench, Utensils, Building2, Heart, Truck } from "lucide-react"

const categories = [
  {
    icon: Building2,
    title: "Construção Civil",
    openings: 45,
    tags: ["Pedreiro", "Carpinteiro", "Eletricista"],
  },
  {
    icon: Utensils,
    title: "Hotelaria e Gastronomia",
    openings: 32,
    tags: ["Chef", "Garçom", "Recepcionista"],
  },
  {
    icon: Heart,
    title: "Saúde e Cuidados",
    openings: 28,
    tags: ["Enfermagem", "Cuidador", "Auxiliar"],
  },
  {
    icon: Wrench,
    title: "Indústria e Manufatura",
    openings: 38,
    tags: ["Operador", "Técnico", "Mecânico"],
  },
  {
    icon: Truck,
    title: "Logística e Transporte",
    openings: 22,
    tags: ["Motorista", "Operador", "Armazém"],
  },
  {
    icon: Briefcase,
    title: "Serviços Corporativos",
    openings: 18,
    tags: ["Administrativo", "TI", "Financeiro"],
  },
]

export function JobCategories() {
  return (
    <section id="jobs" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Áreas com vagas disponíveis</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Diversas oportunidades em diferentes setores da economia suíça, com salários competitivos e excelentes
            condições de trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="text-primary" size={24} />
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {category.openings} vagas
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">183 vagas abertas</span> em toda a Suíça
          </p>
        </div>
      </div>
    </section>
  )
}
