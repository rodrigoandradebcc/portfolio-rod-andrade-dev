import { Container, SectionHeader, Button, LinkedInIcon, GitHubIcon, EmailIcon, WhatsAppIcon } from '../ui'
import { personalInfo } from '../../data/portfolio'

export function Contact() {
  const whatsappUrl = `https://wa.me/55${personalInfo.phone}`

  return (
    <section id="contato" className="py-20">
      <Container>
        <SectionHeader
          label="Contato"
          title="Se você procura alguém para construir produto com qualidade, vamos conversar"
          description="Estou aberto a novas oportunidades onde possa contribuir com experiência em React, React Native e Node.js."
        />

        <div className="flex flex-wrap gap-4">
          <Button href={personalInfo.linkedin}>
            <LinkedInIcon className="size-8" />
            LinkedIn
          </Button>
          <Button href={whatsappUrl} className="bg-[#25D366] text-zinc-950 hover:brightness-110">
            <WhatsAppIcon className="size-8" />
            WhatsApp
          </Button>
          {personalInfo.github && (
            <Button href={personalInfo.github} variant="secondary">
              <GitHubIcon className="size-8" />
              GitHub
            </Button>
          )}
          <Button href={`mailto:${personalInfo.email}`} variant="secondary">
            <EmailIcon className="size-8" />
            {personalInfo.email}
          </Button>
        </div>
      </Container>
    </section>
  )
}
