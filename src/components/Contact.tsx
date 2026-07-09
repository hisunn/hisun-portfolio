import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { CheckCircle2, Loader2, Mail } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { sendContact } from '@/lib/api'
import { links } from '@/lib/data'

const schema = z.object({
  name: z.string().min(2, 'Name needs at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(10, 'Message needs at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const mutation = useMutation({
    mutationFn: sendContact,
    onSuccess: () => reset(),
  })

  return (
    <section id="contact" className="mx-auto max-w-site px-5 py-16">
      <SectionHeading field="F43" title="Contact">
        Open to backend and payments engineering roles. Message me here or email
        directly — I usually reply within a day.
      </SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-2 font-mono text-sm text-approved-dark transition hover:text-ink"
          >
            <Mail size={15} aria-hidden />
            {links.email}
          </a>
          <p className="text-[14px] leading-6 text-muted">
            Also on{' '}
            <a href={links.github} target="_blank" rel="noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:decoration-approved">
              GitHub
            </a>{' '}
            and{' '}
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:decoration-approved">
              LinkedIn
            </a>
            .
          </p>
        </div>

        {mutation.isSuccess ? (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-approved/30 bg-approved-soft p-5"
          >
            <CheckCircle2 className="mt-0.5 shrink-0 text-approved-dark" size={18} aria-hidden />
            <div>
              <p className="font-mono text-sm font-semibold text-approved-dark">
                Response code 00 — message sent.
              </p>
              <p className="mt-1 text-sm text-approved-dark/80">
                Thanks for reaching out. I usually reply within a day.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit((values) => mutation.mutate(values))} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label mb-1.5 block">
                  Name
                </label>
                <input id="name" className="input-field" placeholder="Your name" {...register('name')} />
                {errors.name && <p className="mt-1 text-xs text-stamp">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="field-label mb-1.5 block">
                  Email
                </label>
                <input id="email" type="email" className="input-field" placeholder="you@company.com" {...register('email')} />
                {errors.email && <p className="mt-1 text-xs text-stamp">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="field-label mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="input-field resize-y"
                placeholder="What are you working on?"
                {...register('message')}
              />
              {errors.message && <p className="mt-1 text-xs text-stamp">{errors.message.message}</p>}
            </div>

            {mutation.isError && (
              <p className="rounded-md border border-stamp/30 bg-stamp/5 px-3 py-2 text-sm text-stamp">
                Couldn't reach the API. Email me directly at {links.email}.
              </p>
            )}

            <button type="submit" disabled={mutation.isPending} className="btn-primary disabled:opacity-60">
              {mutation.isPending ? (
                <>
                  <Loader2 size={14} className="animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                'Send message'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
