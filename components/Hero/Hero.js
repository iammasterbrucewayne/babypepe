import { isMobile, isMobileOnly } from "react-device-detect";
import Header from "../common/Header";
import CTA from "./CTA";
import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
	return (
		<HStack my={16}>
			<VStack align="start" spacing={6}>
				{isMobile && (
					<HStack justify="center" w="full">
						<Image
							src="/static/images/logo-flip.png"
							width="256px"
							height="256px"
						/>
					</HStack>
				)}
				<Header title="$bbpepe" />
				<Text>
					pepe's baby bro on arbitrum, rightful heir to his throne... the crown
					prince of memes is here to carry forward pepe's mission to make
					memecoins great again
				</Text>
				<Link href="" target="_blank" textDecoration="underline">
					View Contract on Arbiscan
				</Link>
				<CTA />
			</VStack>
			{!isMobile && (
				<Image
					src="/static/images/logo-flip.png"
					width="512px"
					height="512px"
				/>
			)}
		</HStack>
	);
}
