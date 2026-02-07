import { Button } from "@chakra-ui/react";
import { Smile } from "lucide-react";


const EmojisButton = () => {
    return (
        <Button
            variant="ghost"
            size="icon_lg"
            rounded="full"
        >
            <Smile />
        </Button>
    );
}

export default EmojisButton;
