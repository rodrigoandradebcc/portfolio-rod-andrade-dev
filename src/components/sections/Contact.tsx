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
            <LinkedInIcon />
            LinkedIn
          </Button>
          <Button href={whatsappUrl} className="bg-[#25D366] text-zinc-950 hover:brightness-110">
            <WhatsAppIcon />
            WhatsApp
          </Button>
          {personalInfo.github && (
            <Button href={personalInfo.github} variant="secondary">
              <GitHubIcon />
              GitHub
            </Button>
          )}
          <Button href={`mailto:${personalInfo.email}`} variant="secondary">
            <EmailIcon />
            {personalInfo.email}
          </Button>
        </div>
      </Container>
    </section>
  )
}
