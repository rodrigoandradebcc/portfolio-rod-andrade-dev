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
  AnimateIn,
} from "../ui";
import { personalInfo, stats } from "../../data/portfolio";
import profilePhoto from "../../assets/profile-photo.png";

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
  const primaryCtaClassName =
    "h-[46px] w-fit max-w-full justify-start rounded-[0.9rem] px-3 py-0 text-[0.85rem] font-semibold tracking-[-0.02em]";
  const secondaryCtaClassName =
    "h-[46px] w-fit max-w-full justify-start rounded-[0.9rem] border-white/12 bg-white/[0.04] px-3 py-0 text-[0.85rem] font-semibold tracking-[-0.02em] text-zinc-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/18 hover:bg-white/[0.07]";

  return (
    <section className="border-b border-white/5 pt-28 pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_28%),linear-gradient(135deg,rgba(24,24,27,0.98),rgba(31,41,55,0.92))] px-4 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:rounded-[2.75rem] sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            {/* Left column */}
            <div className="min-w-0">
              <AnimateIn delay={0}>
                <Badge
                  variant="accent"
                  className="mb-6 flex w-full max-w-full overflow-hidden text-[0.68rem] tracking-[0.14em] sm:w-auto sm:text-sm sm:tracking-[0.2em]"
                >
                  <MapPinIcon className="mr-1.5 size-3 shrink-0" />
                  <span className="block min-w-0 truncate">
                    Portfolio 2026 — {personalInfo.location}
                  </span>
                </Badge>
              </AnimateIn>

              <AnimateIn delay={1}>
                <h1 className="text-[clamp(2rem,10vw,3.25rem)] leading-[0.95] font-black tracking-[-0.05em] text-zinc-50">
                  {personalInfo.name}
                </h1>
              </AnimateIn>

              <AnimateIn delay={2}>
                <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-7 text-zinc-400 md:text-[1.25rem] md:leading-[1.65]">
                  Software Engineer com +5 anos de experiência construindo
                  produtos digitais de ponta a ponta. Especialista em React, React
                  Native e Node.js — do MVP à escala.
                </p>
              </AnimateIn>

              <AnimateIn delay={3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href={personalInfo.linkedin}
                    className={primaryCtaClassName}
                  >
                    <LinkedInIcon className="size-4" />
                    LinkedIn
                  </Button>
                  <Button
                    href={whatsappUrl}
                    className={`${primaryCtaClassName} bg-[#25D366] text-zinc-950 hover:brightness-105`}
                  >
                    <WhatsAppIcon className="size-4" />
                    WhatsApp
                  </Button>
                  {personalInfo.github && (
                    <Button
                      href={personalInfo.github}
                      variant="secondary"
                      className={secondaryCtaClassName}
                    >
                      <GitHubIcon className="size-4" />
                      GitHub
                    </Button>
                  )}
                  <Button
                    href={`mailto:${personalInfo.email}`}
                    variant="secondary"
                    className={secondaryCtaClassName}
                  >
                    <EmailIcon className="size-4" />
                    {personalInfo.email}
                  </Button>
                </div>
              </AnimateIn>

              <AnimateIn delay={4}>
                <div className="mt-8 flex flex-wrap gap-1 w-full">
                  <Badge className="w-fit max-w-full justify-center whitespace-nowrap text-[0.68rem] tracking-[0.14em] sm:justify-start sm:text-xs sm:tracking-[0.2em]">
                    React + React Native
                  </Badge>
                  <Badge className="w-fit max-w-full justify-center whitespace-nowrap text-[0.68rem] tracking-[0.14em] sm:justify-start sm:text-xs sm:tracking-[0.2em]">
                    Node.js + NestJS
                  </Badge>
                  <Badge className="w-fit max-w-full justify-center whitespace-nowrap text-[0.68rem] tracking-[0.14em] sm:justify-start sm:text-xs sm:tracking-[0.2em]">
                    AI, LLMs e MCP
                  </Badge>
                </div>
              </AnimateIn>
            </div>

            {/* Right column */}
            <div className="min-w-0 space-y-6">
              <AnimateIn delay={2}>
                <Card hover={false} className="p-4 sm:p-6 md:p-7">
                  <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-start sm:gap-6">
                    <img
                      src={profilePhoto}
                      alt={`Foto de perfil de ${personalInfo.name}`}
                      className="h-46 w-full max-w-[11.5rem] shrink-0 self-start rounded-[2rem] border border-white/10 object-cover object-center shadow-[0_24px_50px_rgba(0,0,0,0.32)] transition duration-300 hover:scale-[1.03] sm:w-42"
                    />
                    <div className="min-w-0 flex-1 text-left">
                      <p className="text-[1.05rem] leading-tight font-bold tracking-[-0.03em] text-zinc-50 sm:whitespace-nowrap md:text-[1.2rem]">
                        {personalInfo.name}
                      </p>
                      <p className="mt-2 text-[1rem] leading-[1.7] text-zinc-400 sm:text-[1.05rem] sm:leading-[1.75]">
                        React, React Native, Next.js, Node.js e arquitetura de
                        produtos digitais em escala.
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimateIn>

              <AnimateIn delay={3}>
                <Card hover={false} className="p-4 text-left sm:p-6 md:p-7">
                  <p className="text-[1rem] leading-[1.75] text-zinc-400 sm:text-[1.05rem] sm:leading-[1.8]">
                    Formado em Ciências da Computação pelo CESUPA. Interessado em
                    times que valorizem código limpo, boas práticas e produto bem
                    construído.
                  </p>
                </Card>
              </AnimateIn>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.value} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <StatCard value={stat.value} label={stat.label} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
