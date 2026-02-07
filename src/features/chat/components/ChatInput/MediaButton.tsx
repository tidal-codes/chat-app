import { Button } from '@chakra-ui/react';
import { Paperclip } from 'lucide-react';

const MediaButton = () => {
    return (
        <Button
            variant="ghost"
            size="icon_lg"
            rounded="full"
        >
            <Paperclip />
        </Button>
    );
}

export default MediaButton;
