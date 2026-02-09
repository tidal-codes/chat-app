import { Avatar as ChakraAvatar } from "@chakra-ui/react";

interface AvatarProps {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "2xs" | "xs"
    w?: number | string
    h?: number | string
}

const Avatar = ({ size, h, w }: AvatarProps) => {
    return (
        <ChakraAvatar.Root size={size} w={w} h={h}>
            <ChakraAvatar.Fallback name="Segun Adebayo" />
            <ChakraAvatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
        </ChakraAvatar.Root>
    );
}

export default Avatar;
