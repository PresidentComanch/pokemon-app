export function debounce (f: { (query: string): void; (...args: any[]): void; }, delay: number) {
  let timer: ReturnType<typeof setTimeout>

  return (...args: any[]) => {
    clearTimeout(timer)

    timer = setTimeout(f, delay, ...args)
  }
}
