export function PartnerCompanies() {
  const partners = [
    {
      name: "Adecco Group",
      logo: "https://tse3.mm.bing.net/th/id/OIP.xODnOGGEugd4aWtAnfne5QHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Líder global em soluções de RH",
    },
    {
      name: "Swisslinx",
      logo: "https://www.swissbiotech.org/wp-content/uploads/job-manager-uploads/job_logo/2019/05/500X500_Swisslinx_Logo.png",
      description: "Especialista em recrutamento suíço",
    },
    {
      name: "Tiger Recruitment",
      logo: "https://media.licdn.com/dms/image/C4D0BAQFswmDPZuY8Sw/company-logo_200_200/0/1555320954178?e=2147483647&v=beta&t=Dv4w6q5GLX9qmsNqdzzX0QfkPVJFSAOB6Pe09h-tAsQ",
      description: "Recrutamento especializado",
    },
    {
      name: "Samsic Emploi",
      logo: "https://tse1.mm.bing.net/th/id/OIP.kZePXnpuK33bCzqD6jnTugHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Soluções de emprego na Suíça",
    },
  ]

  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Empresas Parceiras</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as principais empresas de recrutamento da Suíça para oferecer as melhores oportunidades
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center p-8 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-20 flex items-center justify-center mb-4">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`Logo ${partner.name}`}
                  className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="font-semibold text-center text-sm mb-1">{partner.name}</h3>
              <p className="text-xs text-muted-foreground text-center">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Parcerias estratégicas que garantem as melhores oportunidades de trabalho na Suíça
          </p>
        </div>
      </div>
    </section>
  )
}
