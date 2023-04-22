import { Box, Code, HStack, Heading, Text } from "@chakra-ui/react";
import Header from "@components/common/Header";
import Image from "next/image";
import { isMobile } from "react-device-detect";

export default function Tokenomics() {
	return (
		<HStack my={24}>
			<Box w={!isMobile && 1000}>
				<Header title="tokenomics" />
				<Heading fontFamily="'Gochi Hand', cursive" mb={isMobile ? 12 : 0}>
					token supply: 420,690,000,000,000
				</Heading>
				{isMobile && (
					<HStack justify="center" w="full">
						<Image
							src="/static/images/tokenomics.png"
							width="700px"
							height="700px"
						/>
					</HStack>
				)}
				<Text mt={12}>
					No added taxes. No Bullshit. It’s that simple. 95.7931% of the tokens
					were sent to the liquidity pool, LP tokens were burnt, and contract is
					non-urpgradable. The remaining 4.2069% is being held by the team to be
					used as tokens for future centralized exchange listings, bridges,
					liquidity pools and promos. The wallet address is
					<Code
						bg="#363015"
						color="#FFE503"
						fontFamily="'Gochi Hand', cursive"
						fontSize={18}
					>
						0x08388dcaad1236b7a0b2Ce9bb707FE325519Dd2B
					</Code>{" "}
					(this will be updated here if we move funds)
				</Text>
			</Box>
			{!isMobile && (
				<Image
					src="/static/images/tokenomics.png"
					width="700px"
					height="700px"
				/>
			)}
		</HStack>
	);
}
