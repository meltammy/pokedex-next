import { getColors } from '@/lib/utils/getColors'
import { Badge as BadgeComponent } from './styles'

type BagdeProps = {
  text: string
  colors?: { backgroundColor: string; color: string }
}

export function Badge({ text, colors }: BagdeProps) {
  const props = colors || getColors(text)

  return <BadgeComponent {...props}>{text}</BadgeComponent>
}
