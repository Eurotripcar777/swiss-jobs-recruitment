import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { SelectionProcess } from "@/components/selection-process"
import { JobCategories } from "@/components/job-categories"
import { SalaryRanges } from "@/components/salary-ranges"
import { Testimonials } from "@/components/testimonials"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <SelectionProcess />
      <JobCategories />
      <SalaryRanges />
      <Testimonials />
      <ApplicationForm />
      <Footer />

      {/* 👇 Formulário oculto para o Netlify detectar e ativar o Forms */}
      <form name="application" data-netlify="true" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="message"></textarea>
      </form>
    </main>
  )
}

