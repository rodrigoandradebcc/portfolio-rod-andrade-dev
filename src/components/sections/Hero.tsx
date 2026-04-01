import {
  Container,
  Badge,
  Button,
  Card,
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "../ui";
import { personalInfo, stats } from "../../data/portfolio";
import profilePhoto from "../../assets/profile-photo.webp";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="flex h-full min-h-[180px] flex-col items-start justify-start p-5 text-left md:min-h-[200px] md:p-6">
      <p className="text-[1.7rem] leading-none font-black tracking-[-0.04em] text-zinc-50 md:text-[2.1rem]">
        {value}
      </p>
      <p className="mt-3 text-[1.05rem] leading-[1.7] text-zinc-400 md:text-[1.2rem]">
        {label}
      </p>
    </Card>
  );
}

export function Hero() {
  const whatsappUrl = `https://wa.me/55${personalInfo.phone}`;

  return (
    <section className="border-b border-white/5 pt-28 pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_28%),linear-gradient(135deg,rgba(24,24,27,0.98),rgba(31,41,55,0.92))] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-10 lg:px-14 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            {/* Left column */}
            <div>
              <Badge variant="accent" className="mb-6">
                <MapPinIcon className="mr-1.5 size-3" />
                Portfolio 2026 — {personalInfo.location}
              </Badge>

              <h1 className="text-[2.7rem] leading-[0.95] font-black tracking-[-0.05em] text-zinc-50 md:text-[3.25rem]">
                {personalInfo.name}
              </h1>

              <p className="mt-5 max-w-[34rem] text-base leading-7 text-zinc-400 md:text-[1.25rem] md:leading-[1.65]">
                Software Engineer com +5 anos de experiência construindo
                produtos digitais de ponta a ponta. Especialista em React, React
                Native e Node.js — do MVP à escala.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={personalInfo.linkedin}>
                  <LinkedInIcon />
                  LinkedIn
                </Button>
                <Button
                  href={whatsappUrl}
                  className="bg-[#25D366] text-zinc-950 hover:brightness-110"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </Button>
                {personalInfo.github && (
                  <Button href={personalInfo.github} variant="secondary">
                    <GitHubIcon />
                    GitHub
                  </Button>
                )}
                <Button
                  href={`mailto:${personalInfo.email}`}
                  variant="secondary"
                >
                  <EmailIcon />
                  Email
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Badge>React + React Native</Badge>
                <Badge>Node.js + NestJS</Badge>
                <Badge>AI, LLMs e MCP</Badge>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <Card hover={false} className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <img
                    src={profilePhoto}
                    alt={`Foto de perfil de ${personalInfo.name}`}
                    className="h-46 w-42 shrink-0 rounded-[2rem] border border-white/10 object-cover object-center shadow-[0_24px_50px_rgba(0,0,0,0.32)]"
                  />
                  <div className="min-w-0 flex-1 text-left">
                    <p className="whitespace-nowrap text-[1.05rem] leading-none font-bold tracking-[-0.03em] text-zinc-50 md:text-[1.2rem]">
                      {personalInfo.name}
                    </p>
                    <p className="mt-2 text-[1.05rem] leading-[1.75] text-zinc-400">
                      React, React Native, Next.js, Node.js e arquitetura de
                      produtos digitais em escala.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-left text-[1.05rem] leading-[1.8] text-zinc-400">
                  Formado em Ciências da Computação pelo CESUPA. Interessado em
                  times que valorizem código limpo, boas práticas e produto bem
                  construído.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.value}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
