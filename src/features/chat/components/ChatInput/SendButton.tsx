import { Button } from '@chakra-ui/react';
import { SendHorizontal } from 'lucide-react';

interface SendButtonProps {
    show: boolean;
    sendMessage: () => void
}

const SendButton = ({ show, sendMessage }: SendButtonProps) => {
    if (!show) return null;
    return (
        <Button
            variant="ghost"
            size="icon_lg"
            rounded="full"
            bgColor="brand.500"
            color="white"
            onClick={() => sendMessage()}
        >
            <SendHorizontal />
        </Button>
    );
}

export default SendButton;
