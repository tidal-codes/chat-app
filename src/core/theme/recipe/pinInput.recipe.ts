import { defineSlotRecipe } from "@chakra-ui/react"
import { pinInputAnatomy } from "@chakra-ui/react/anatomy"
import { inputRecipe } from "./input.recipe"


const { defaultVariants } = inputRecipe

export const pinInputSlotRecipe = defineSlotRecipe({
    className: "chakra-pin-input",
    slots: pinInputAnatomy.keys(),
    base: {
        input: {
            ...inputRecipe.base,
            _disabled: {
                layerStyle: "none",
                cursor: "disabled"
            },
            textAlign: "center",
            width: "var(--input-height)",
        },
        control: {
            display: "inline-flex",
            gap: "2",
            isolation: "isolate",
        },
    },
    variants: {
        attached: {
            true: {
                control: {
                    gap: "0",
                    spaceX: "-1px",
                },
                input: {
                    _notFirst: { borderStartRadius: "0" },
                    _notLast: { borderEndRadius: "0" },
                    _focusVisible: { zIndex: "1" },
                },
            },
        },
    },
    defaultVariants: defaultVariants,
})