import { twMerge } from "tailwind-merge";
import cx from "./cx";

export default function cn(...classNames: Array<string | object>) {
  return twMerge(cx(...classNames));
}
