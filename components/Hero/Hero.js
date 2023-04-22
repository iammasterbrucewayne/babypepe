import { Fragment } from "react";
import Header from "../common/Header";
import CTA from "./CTA";
import { Box, HStack, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
	return (
		<HStack my={16}>
			<Box maxW={500}>
				<Header title="$bbpepe" />
				<Text mb={4}>
					pepe's baby bro on arbitrum, rightful heir to his throne... the crown
					prince of memes is here to carry forward pepe's mission to make memecoins great again
				</Text>
				<Link href="" target="_blank" textDecoration="underline">
					View Contract on Arbiscan
				</Link>
				<CTA />
			</Box>
			<Image src="/static/images/logo-flip.png" width="512px" height="512px" />
		</HStack>
	);
}
