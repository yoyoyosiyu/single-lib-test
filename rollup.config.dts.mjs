import { defineConfig } from "rollup"
import dts from "rollup-plugin-dts"
const config  = defineConfig([{
    input: "dist/types/index.d.ts",
    output: {
        file: "dist/index.d.ts",
        format: "es"
    },
    plugins: [
        dts()
    ]
}]);

export default config;