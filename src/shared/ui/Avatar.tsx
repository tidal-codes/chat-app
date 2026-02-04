import { Avatar as ChakraAvatar } from "@chakra-ui/react";

interface AvatarProps {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "2xs" | "xs"
}

const Avatar = ({ size }: AvatarProps) => {
    return (
        <ChakraAvatar.Root size={size}>
            <ChakraAvatar.Fallback name="Segun Adebayo" />
            <ChakraAvatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
        </ChakraAvatar.Root>
    );
}

export default Avatar;
