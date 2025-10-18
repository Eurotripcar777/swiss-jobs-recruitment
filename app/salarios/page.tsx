import { SalaryRanges } from "@/components/salary-ranges"

export default function SalariosPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Faixas Salariais na Suíça</h1>
          <p className="text-lg text-muted-foreground">
            Conheça os salários médios das principais profissões que recrutamos para empresas suíças. Valores em Franco
            Suíço (CHF) e Real Brasileiro (BRL).
          </p>
        </div>
        <SalaryRanges />
      </div>
    </main>
  )
}
