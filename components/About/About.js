import { Box, HStack, Text } from "@chakra-ui/react";
import Header from "@components/common/Header";
import Image from "next/image";
import { isMobile } from "react-device-detect";

export default function About() {
	return (
		<HStack my={32}>
			{!isMobile && (
				<Image
					src="/static/images/heir-flip.png"
					width="1024px"
					height="1024px"
				/>
			)}
			<Box w="full">
				<Header title="about" />
				<Text maxW={1000} mb={isMobile && 12}>
					Baby pepe is here to carry forward pepe's vission to make memecoins
					great again. <br /> As the true heir to the most recognizable meme in
					the world the baby pepe is here take his reign as crown prince of the
					memes.
					<br />
					<br />
					Launched stealth with no presale, zero taxes except 1% LP fee,
					non-upgradable contract, LP burnt, $BBPEPE is a coin for the people,
					forever. Fueled by pepe's memetic power and arbitrum's scalability,
					let $BBPEPE show you the way. In Lord Kek we trust.
				</Text>
				{isMobile && (
					<HStack justify="center" w="full">
						<Image
							src="/static/images/heir-flip.png"
							width="500px"
							height="500px"
						/>
					</HStack>
				)}
			</Box>
		</HStack>
	);
}
