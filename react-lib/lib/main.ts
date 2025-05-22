import './tailwind/theme.css'

import { Button } from "./components/Button"
import { HomePage } from './components/HomePage';
export function helloAnything(thing: string): string {
    return `Hello ${thing}!`
}
export const isBiggerThanTen = (value: number) => value > 10;
export { Button }
export { default as HelloMessage } from "./components/HelloMessage"
export { HomePage }
