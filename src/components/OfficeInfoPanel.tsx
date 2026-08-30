import { IconPin, IconPhone, IconMessage } from './icons'

const hours = [
  { day: 'Monday', time: '8:00am – 7:00pm' },
  { day: 'Tuesday', time: '8:00am – 5:00pm' },
  { day: 'Wednesday', time: '8:00am – 5:00pm' },
  { day: 'Thursday', time: '8:00am – 7:00pm' },
  { day: 'Friday', time: '8:00am – 5:00pm' },
  { day: 'Sunday', time: 'By request' },
]

export function OfficeInfoPanel({ className = '' }: { className?: string }) {
  return (
    <div className={`flex h-full flex-col items-start gap-7 rounded-3xl bg-green-dark p-[22px] md:p-9 ${className}`}>
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">Visit the office</h3>
      <div className="flex items-start gap-3">
        <IconPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-apricot" />
        <p className="text-[15px] leading-[1.55] text-white/72">
          133 East 58th Street, Suite 409, New York, NY 10022. Midtown East, near Lexington
          Avenue.
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-3 border-t border-white/[0.14] pt-6">
        <p className="text-xs font-semibold uppercase leading-none tracking-[0.12em] text-white/45">
          Office hours
        </p>
        {hours.map((row) => (
          <div key={row.day} className="flex w-full items-center justify-between">
            <span className="text-[15px] leading-[1.6] text-white/72">{row.day}</span>
            <span className="text-[15px] font-medium leading-[1.6] text-white">{row.time}</span>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-start gap-3.5 border-t border-white/[0.14] pt-6">
        <a href="tel:+12128380842" className="flex items-center gap-[11px] text-[15px] font-medium text-white">
          <IconPhone className="h-[17px] w-[17px] text-apricot" />
          Call (212) 838-0842
        </a>
        <a href="sms:+19292448140" className="flex items-center gap-[11px] text-[15px] font-medium text-white">
          <IconMessage className="h-[17px] w-[17px] text-apricot" />
          Text (929) 244-8140
        </a>
      </div>
    </div>
  )
}
