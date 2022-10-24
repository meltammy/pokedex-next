export function useInitAmplitude(): void {
  let amplitude

  if (typeof window !== 'undefined') {
    amplitude = require('amplitude-js')
    amplitude
      .getInstance()
      .init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY, null, {})
  }
}
