/**
 * GetAllCasings tests.
 *
 * @author n1073645 [n1073645@gmail.com]
 * @copyright Crown Copyright 2020
 * @license Apache-2.0
 *
 * Modified by Raka-loah@github for zh-CN i18n
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "All casings of test",
        input: "test",
        expectedOutput: "test\nTest\ntEst\nTEst\nteSt\nTeSt\ntESt\nTESt\ntesT\nTesT\ntEsT\nTEsT\nteST\nTeST\ntEST\nTEST",
        recipeConfig: [
            {
                "op": "大小写穷举",
                "args": []
            }
        ]
    },
    {
        name: "All casings of t",
        input: "t",
        expectedOutput: "t\nT",
        recipeConfig: [
            {
                "op": "大小写穷举",
                "args": []
            }
        ]
    },
    {
        name: "All casings of null",
        input: "",
        expectedOutput: "",
        recipeConfig: [
            {
                "op": "大小写穷举",
                "args": []
            }
        ]
    }
]);
