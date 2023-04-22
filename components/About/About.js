import { Box, HStack, Text } from "@chakra-ui/react";
import Header from "@components/common/Header";
import Image from "next/image";

export default function About() {
	return (
		<HStack my={32}>
			<Image
				src="/static/images/heir-flip.png"
				width="1024px"
				height="1024px"
			/>
			<Box>
				<Header title="about" />
				<Text maxW={1000}>
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
			</Box>
		</HStack>
	);
}
