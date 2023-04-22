import Head from "next/head";
import Nav from "@components/Nav/Nav";
import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Tokenomics from "@components/Tokenomics/Tokenomics";
import Roadmap from "@components/Roadmap/Roadmap";
import Contact from "@components/Contact/Contact";
import Disclaimer from "@components/Disclaimer/Disclaimer";
import { Box } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

export default function Home() {
	return (
		<Box
			bg="#FFE503"
			w={isMobile ? "fit-content" : "full"}
			px={12}
			fontFamily="'Gochi Hand', cursive"
			color="#363015"
			fontSize={24}
			pb={28}
		>
			<Head>
				<title>$BBPEPE | Crown prince of memes</title>
				<link rel="icon" href="static/images/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main>
				<Nav />
				<Box maxW={960} mx="auto" px="auto">
					<Hero />
					<About />
					<Tokenomics />
					{/* <Roadmap /> */}
					<Box textAlign="center">
						<Contact />
						<Disclaimer />
					</Box>
				</Box>
			</main>
		</Box>
	);
}
