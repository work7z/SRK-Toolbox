/**
 * Chart tests.
 *
 * @author Matt C [me@mitt.dev]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 *
 * Modified by Raka-loah@github for zh-CN i18n
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "Scatter chart",
        input: "100 100\n200 200\n300 300\n400 400\n500 500",
        expectedMatch: /^<svg width/,
        recipeConfig: [
            {
                "op": "散点图",
                "args": ["换行", "空格", false, "time", "stress", "black", 5, false]
            }
        ],
    },
    {
        name: "Hex density chart",
        input: "100 100\n200 200\n300 300\n400 400\n500 500",
        expectedMatch: /^<svg width/,
        recipeConfig: [
            {
                "op": "六边形密度图",
                "args": ["换行", "空格", 25, 15, true, "", "", true, "white", "black", true]
            }
        ],
    },
    {
        name: "Series chart",
        input: "100 100 100\n200 200 200\n300 300 300\n400 400 400\n500 500 500",
        expectedMatch: /^<svg width/,
        recipeConfig: [
            {
                "op": "折线图",
                "args": ["换行", "空格", "", 1, "mediumseagreen, dodgerblue, tomato"]
            }
        ],
    },
    {
        name: "Heatmap chart",
        input: "100 100\n200 200\n300 300\n400 400\n500 500",
        expectedMatch: /^<svg width/,
        recipeConfig: [
            {
                "op": "热图",
                "args": ["换行", "空格", 25, 25, true, "", "", false, "white", "black"]
            }
        ],
    },
]);
