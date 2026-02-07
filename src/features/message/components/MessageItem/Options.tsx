import { Box, Button } from '@chakra-ui/react';
import { EllipsisVertical } from 'lucide-react';

const Options = () => {
    return (
        <Box h="full">
            <Button size="icon_sm" variant="ghost">
                <EllipsisVertical/>
            </Button>
        </Box>
    );
}

export default Options;
