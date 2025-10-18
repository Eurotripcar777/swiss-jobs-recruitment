"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <section id="apply" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-2xl mx-auto border-border text-center">
            <CardContent className="p-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">Candidatura enviada com sucesso!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recebemos sua candidatura e nossa equipe irá analisá-la nos próximos dias. Você receberá um e-mail com
                os próximos passos em breve.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Candidate-se agora</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Preencha o formulário abaixo e dê o primeiro passo para sua carreira internacional na Suíça.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-border">
          <CardHeader>
            <CardTitle>Formulário de Candidatura</CardTitle>
            <CardDescription>
              Todas as informações são confidenciais e serão usadas apenas para o processo seletivo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action="https://submit-form.com/lucamoretti762@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome *</Label>
                  <Input id="firstName" name="firstName" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome *</Label>
                  <Input id="lastName" name="lastName" placeholder="Seu sobrenome" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+55 (11) 99999-9999" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Área de Interesse *</Label>
                <Select name="category" required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Selecione uma área" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="construction">Construção Civil</SelectItem>
                    <SelectItem value="hospitality">Hotelaria e Gastronomia</SelectItem>
                    <SelectItem value="healthcare">Saúde e Cuidados</SelectItem>
                    <SelectItem value="industry">Indústria e Manufatura</SelectItem>
                    <SelectItem value="logistics">Logística e Transporte</SelectItem>
                    <SelectItem value="corporate">Serviços Corporativos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Anos de Experiência *</Label>
                <Select name="experience" required>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 anos</SelectItem>
                    <SelectItem value="3-5">3-5 anos</SelectItem>
                    <SelectItem value="6-10">6-10 anos</SelectItem>
                    <SelectItem value="10+">Mais de 10 anos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Conte-nos sobre sua experiência *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Descreva brevemente sua experiência profissional e por que deseja trabalhar na Suíça..."
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Currículo (PDF) *</Label>
                <Input id="resume" name="resume" type="file" accept=".pdf" required />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar Candidatura
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar este formulário, você concorda com nossa política de privacidade e processamento de dados
                pessoais.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
