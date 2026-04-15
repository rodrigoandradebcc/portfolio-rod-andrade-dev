import { Container, SectionHeader, Button, LinkedInIcon, GitHubIcon, EmailIcon, WhatsAppIcon, AnimateIn } from '../ui'
import { personalInfo } from '../../data/portfolio'

export function Contact() {
  const whatsappUrl = `https://wa.me/55${personalInfo.phone}`
  const primaryCtaClassName =
    'h-[46px] w-fit max-w-full justify-start rounded-[0.9rem] px-3 py-0 text-[0.85rem] font-semibold tracking-[-0.02em]'
  const secondaryCtaClassName =
    'h-[46px] w-fit max-w-full justify-start rounded-[0.9rem] px-3 py-0 text-[0.85rem] font-semibold tracking-[-0.02em]'

  return (
    <section id="contato" className="py-20">
      <Container>
        <AnimateIn delay={0}>
          <SectionHeader
            label="Contato"
            title="Se você procura alguém para construir produto com qualidade, vamos conversar"
            description="Estou aberto a novas oportunidades onde possa contribuir com experiência em React, React Native e Node.js."
          />
        </AnimateIn>

        <AnimateIn delay={1}>
          <div className="flex flex-wrap gap-2">
            <Button href={personalInfo.linkedin} className={primaryCtaClassName}>
              <LinkedInIcon className="size-4" />
              LinkedIn
            </Button>
            <Button href={whatsappUrl} className={`${primaryCtaClassName} bg-[#25D366] text-zinc-950 hover:brightness-110`}>
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </Button>
            {personalInfo.github && (
              <Button href={personalInfo.github} variant="secondary" className={secondaryCtaClassName}>
                <GitHubIcon className="size-4" />
                GitHub
              </Button>
            )}
            <Button href={`mailto:${personalInfo.email}`} variant="secondary" className={secondaryCtaClassName}>
              <EmailIcon className="size-4" />
              {personalInfo.email}
            </Button>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}
