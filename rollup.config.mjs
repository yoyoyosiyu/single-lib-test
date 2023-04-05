import { defineConfig } from "rollup";
import {nodeResolve} from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
import commonjs from "@rollup/plugin-commonjs";
import chalk from "chalk"

let config  = defineConfig([
    {
        input: "./src/index.ts",
        output: {
            file: "./dist/index.cjs",
            format: "cjs"
        },
        plugins: [
            nodeResolve({extensions:[".js",".ts"]})
        ]
    },
]);

let defaultPlugins = [
    nodeResolve({extensions: [".js", ".ts"]}),
    commonjs(),
    typescript()
    
];

const presetOutputs  =  {
    "commonjs": {
        file: "index.cjs.js",
        format: "cjs"
    },
    "esm-boundle": {
        file: "index.mjs",
        format: "es"
    },
    global: {
        file: "index.global.js",
        format: "iife",
        name: "greeting"
    }
}

let expectedOutputs = ['commonjs', "esm-boundle", "global"]

let configs = expectedOutputs.map((format) => {
    return buildConfig(format, presetOutputs[format], defaultPlugins);
})

console.log(configs);
config = defineConfig(configs);


function buildConfig(format, config, plugins = defaultPlugins) {
    if (!config) {
        console.log(chalk.yellow(`invalid format: ${format}`));
        process.exit(1);
    }

    var out = config;
    out.file = `dist/${config.file}`;

    return {
        input: "./src/index.ts",
        output: {...out},
        plugins: plugins
    }
}

export default config