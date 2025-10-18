import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

const salaries = [
  {
    profession: "Pedreiro",
    category: "Construção Civil",
    chf: "CHF 5.500 - 7.000",
    brl: "R$ 34.000 - 43.000",
    level: "Qualificado",
  },
  {
    profession: "Eletricista",
    category: "Construção Civil",
    chf: "CHF 6.000 - 7.500",
    brl: "R$ 37.000 - 46.000",
    level: "Especializado",
  },
  {
    profession: "Chef de Cozinha",
    category: "Hotelaria e Gastronomia",
    chf: "CHF 5.000 - 6.500",
    brl: "R$ 31.000 - 40.000",
    level: "Experiente",
  },
  {
    profession: "Garçom",
    category: "Hotelaria e Gastronomia",
    chf: "CHF 4.200 - 5.200",
    brl: "R$ 26.000 - 32.000",
    level: "Qualificado",
  },
  {
    profession: "Enfermeiro(a)",
    category: "Saúde e Cuidados",
    chf: "CHF 6.500 - 8.500",
    brl: "R$ 40.000 - 52.000",
    level: "Graduação",
  },
  {
    profession: "Cuidador(a)",
    category: "Saúde e Cuidados",
    chf: "CHF 4.500 - 5.800",
    brl: "R$ 28.000 - 36.000",
    level: "Certificado",
  },
  {
    profession: "Operador de Máquinas",
    category: "Indústria e Manufatura",
    chf: "CHF 5.200 - 6.800",
    brl: "R$ 32.000 - 42.000",
    level: "Técnico",
  },
  {
    profession: "Mecânico Industrial",
    category: "Indústria e Manufatura",
    chf: "CHF 5.800 - 7.200",
    brl: "R$ 36.000 - 44.000",
    level: "Especializado",
  },
  {
    profession: "Motorista Profissional",
    category: "Logística e Transporte",
    chf: "CHF 4.800 - 6.200",
    brl: "R$ 30.000 - 38.000",
    level: "CNH Categoria C/D",
  },
  {
    profession: "Analista de TI",
    category: "Serviços Corporativos",
    chf: "CHF 7.000 - 9.500",
    brl: "R$ 43.000 - 58.000",
    level: "Superior",
  },
  {
    profession: "Assistente Administrativo",
    category: "Serviços Corporativos",
    chf: "CHF 4.500 - 5.800",
    brl: "R$ 28.000 - 36.000",
    level: "Qualificado",
  },
  {
    profession: "Recepcionista",
    category: "Hotelaria e Gastronomia",
    chf: "CHF 4.000 - 5.000",
    brl: "R$ 25.000 - 31.000",
    level: "Idiomas",
  },
]

export function SalaryRanges() {
  return (
    <section id="salaries" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <TrendingUp size={16} />
            <span>Salários Competitivos</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Faixas salariais por profissão</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Valores mensais aproximados em Franco Suíço (CHF) e Real Brasileiro (BRL). Os salários podem variar de
            acordo com experiência, qualificações e região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salaries.map((salary, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {salary.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {salary.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{salary.profession}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Suíça (CHF)</span>
                    <span className="text-lg font-bold text-primary">{salary.chf}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Brasil (BRL)</span>
                    <span className="text-lg font-bold text-foreground">{salary.brl}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            <span className="font-semibold text-foreground">Nota:</span> Conversão aproximada de 1 CHF = R$ 6,15. Os
            valores são líquidos após impostos e incluem benefícios como seguro saúde obrigatório. Além do salário, você
            recebe <span className="font-semibold text-foreground">passagem aérea e alojamento</span> nos primeiros
            meses.
          </p>
        </div>
      </div>
    </section>
  )
}
