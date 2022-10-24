import { AmplitudeEventsName, UTM } from '@/lib/models/Amplitude'

type AmplitudeUserProperties = Partial<UTM>

function hasUTMParams(obj?: Record<string, unknown>): obj is Partial<UTM> {
  if (!obj) return false

  return (
    'utm_campaign' in obj ||
    'utm_content' in obj ||
    'utm_medium' in obj ||
    'utm_source' in obj ||
    'utm_term' in obj
  )
}

export function getUTMDataFromURL() {
  if (typeof window === 'undefined') return

  const urlSearchParams = new URLSearchParams(window.location.search)
  const urlParams = Object.fromEntries(urlSearchParams?.entries())

  return hasUTMParams(urlParams) ? urlParams : undefined
}

type Amplitude = {
  getInstance: () => {
    logEvent: (
      event: AmplitudeEventsName,
      eventProperties?: Record<string, unknown> | null
    ) => void
    setUserProperties: (userProperties: AmplitudeUserProperties) => void
    setUserId: (id: string) => void
  }
}

export function useAmplitude() {
  const isClientSide = typeof window !== 'undefined'
  let amplitude: Amplitude

  if (isClientSide) amplitude = require('amplitude-js')

  function setUserProperties() {
    const utm = getUTMDataFromURL()
    if (utm) amplitude.getInstance().setUserProperties(utm)
  }

  const dispatchSimpleEvent = (event: AmplitudeEventsName) => {
    setUserProperties()
    amplitude.getInstance().logEvent(event)
  }

  function dispatchEvent({
    event,
    eventProperties,
  }: {
    event: AmplitudeEventsName
    eventProperties: Record<string, unknown>
  }) {
    setUserProperties()
    amplitude.getInstance().logEvent(event, { ...eventProperties })
  }

  return { dispatchEvent, dispatchSimpleEvent }
}
