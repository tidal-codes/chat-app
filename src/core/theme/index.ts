import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { inputRecipe } from "./recipe/input.recipe";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand: {
                    50: { value: "#f1e9ff" },
                    100: { value: "#d7c8ff" },
                    200: { value: "#bca5ff" },
                    300: { value: "#a083ff" },
                    400: { value: "#8a69ff" },
                    500: { value: "#774cff" },
                    600: { value: "#693fe0" },
                    700: { value: "#5732b8" },
                    800: { value: "#452691" },
                    900: { value: "#2b1663" },
                }
            },
            fonts: {
                body: {
                    value: "DM Sans, sans-serif"
                }
            }
        },
        semanticTokens: {
            colors: {
                border: {
                    value: {
                        _light: "{colors.gray.800}",
                        _dark: "{colors.gray.500}"
                    }
                },
                ring : {
                    value : {
                        _light : "{colors.brand.800}",
                        _dark : "{colors.brand.500}"
                    }
                }
            }
        },
        recipes: {
            input: inputRecipe
        }
    },
})

const system = createSystem(defaultConfig, config);
export default system;