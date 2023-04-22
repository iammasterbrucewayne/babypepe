import { Fragment } from "react";
import Header from "../common/Header";
import CTA from "./CTA";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
	return (
		<HStack mb={16}>
			<Box>
				<Header title="$bbpepe" />
				<Text maxW={500}>
					pepe's baby bro on arbitrum, rightful heir to his throne, the crown
					prince of memes is here to carry forward pepe's mission to make meme
					coins great again
				</Text>
				<CTA />
			</Box>
			<Image src="/static/images/logo-flip.png" width="512px" height="512px" />
		</HStack>
	);
}
