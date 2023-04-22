import { HStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Nav() {
	return (
		<HStack maxW={1128} mx="auto">
			<Image
				src="/static/images/android-chrome-512x512.png"
				width="40px"
				height="40px"
			/>
		</HStack>
	);
}
