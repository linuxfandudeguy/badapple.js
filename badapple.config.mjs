// badapple.config.mjs
export const defaultArgs = [
  '-vo', 'caca', // Output as ASCII art
  '-framedrop', // Drop frames if playback is slow
  '-quiet'      // Suppress unnecessary logs
];

export function getArgs(customArgs = []) {
  return [...defaultArgs, ...customArgs];
}
