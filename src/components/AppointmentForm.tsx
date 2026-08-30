import { useState, type FormEvent } from 'react'
import { IconArrowRight } from './icons'

const inputClass =
  'w-full rounded-xl border border-border bg-white px-3.5 py-[13px] text-[15px] text-ink placeholder:text-stone focus:border-green focus:outline-none'

export function AppointmentForm({ className = '' }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={`flex flex-col items-start gap-4 rounded-3xl border border-border bg-cream p-[22px] md:p-9 ${className}`}>
      {submitted ? (
        <div className="flex w-full flex-col items-start gap-2 py-6">
          <h3 className="text-lg font-semibold text-ink">Thank you — request received</h3>
          <p className="text-[15px] leading-[1.55] text-stone">
            The front desk will call you back shortly to confirm a time. If it is urgent, please
            call (212) 838-0842 directly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-wrap gap-3.5">
            <label className="flex min-w-[150px] flex-1 flex-col items-start gap-2">
              <span className="text-[13px] font-medium text-ink">Full name</span>
              <input required type="text" name="name" placeholder="Jordan Reyes" className={inputClass} />
            </label>
            <label className="flex min-w-[150px] flex-1 flex-col items-start gap-2">
              <span className="text-[13px] font-medium text-ink">Phone</span>
              <input
                required
                type="tel"
                name="phone"
                placeholder="(212) 555-0142"
                className={inputClass}
              />
            </label>
          </div>
          <label className="flex w-full flex-col items-start gap-2">
            <span className="text-[13px] font-medium text-ink">Email</span>
            <input required type="email" name="email" placeholder="you@email.com" className={inputClass} />
          </label>
          <label className="flex w-full flex-col items-start gap-2">
            <span className="text-[13px] font-medium text-ink">Preferred time</span>
            <select name="preferredTime" defaultValue="morning" className={inputClass}>
              <option value="morning">Weekday morning</option>
              <option value="afternoon">Weekday afternoon</option>
              <option value="evening">Evening — Monday or Thursday</option>
              <option value="sunday">Sunday by request</option>
            </select>
          </label>
          <label className="flex w-full flex-col items-start gap-2">
            <span className="text-[13px] font-medium text-ink">What brings you in?</span>
            <textarea
              name="notes"
              placeholder="A cleaning, a second opinion, something that hurts — anything helps."
              className={`${inputClass} h-24 resize-none`}
            />
          </label>
          <button
            type="submit"
            className="flex w-full items-center justify-between rounded-[14px] bg-apricot px-6 py-4 text-[15px] font-medium tracking-[-0.01em] text-ink transition-opacity hover:opacity-90"
          >
            Request an appointment
            <IconArrowRight className="h-5 w-5 text-white" />
          </button>
          <p className="text-[13px] leading-[1.5] text-stone">
            This form is not for emergencies. If you are in pain right now, call (212) 838-0842.
          </p>
        </form>
      )}
    </div>
  )
}
