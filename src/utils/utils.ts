/**
 * Generates a "random" number
 * @returns {Integer} The current timestamp milliseconds (ms)
 */
export function time() {
  return Math.floor(new Date().getTime() / 1000)
}
