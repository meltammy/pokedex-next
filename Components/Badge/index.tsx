import { getColors } from '@/lib/utils/getColors'
import { Badge as BadgeComponent } from './styles'

type BagdeProps = {
  text: string
}

export function Badge({ text }: BagdeProps) {
  const props = getColors(text)
  return <BadgeComponent {...props}>{text}</BadgeComponent>
}
