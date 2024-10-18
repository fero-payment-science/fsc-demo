
import { Merriweather_Sans } from "next/font/google";

export const merriweather_init = Merriweather_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-merriweather",
    weight: ["300","400", "500", "700", "800"]
});

export const merriweather = merriweather_init.variable;