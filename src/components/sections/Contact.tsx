import { Container, SectionHeader, Button, LinkedInIcon, GitHubIcon, EmailIcon } from '../ui'
import { personalInfo } from '../../data/portfolio'

export function Contact() {
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
