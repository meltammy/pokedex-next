export function formatClassName(classNames: (string | null | undefined)[]) {
  return classNames.filter((className) => Boolean(className)).join(" ");
}
