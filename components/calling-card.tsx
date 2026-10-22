import { Mail } from 'lucide-react'

const EMAIL = 'gs3nas.dev@gmail.com'

export function CallingCard() {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="h-3 bg-primary" aria-hidden="true" />
      <div className="flex flex-col gap-8 p-8 sm:p-10">
        <header className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground">
            Full Stack Developer
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Gregory Salazar
          </h1>
        </header>

        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          10+ years full stack developer
        </p>

        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <h2 className="text-sm font-medium text-muted-foreground">Get in touch</h2>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 self-start rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Mail className="size-5" aria-hidden="true" />
            <span className="break-all">{EMAIL}</span>
          </a>
        </div>
      </div>
    </article>
  )
}
