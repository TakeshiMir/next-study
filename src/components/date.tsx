import { parseISO, format } from 'date-fns'

interface type {
  dateString: string
}

export default function Date({ dateString }: type) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
