import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "41762771837" // +41 76277 18 37 sem espaços e símbolos
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as oportunidades de trabalho na Suíça.")

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
