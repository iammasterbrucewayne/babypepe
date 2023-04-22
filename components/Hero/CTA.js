import { Button, ButtonGroup, Link, textDecoration } from "@chakra-ui/react";

export default function CTA() {
	return (
		<ButtonGroup mt={8}>
			<Button
				as="a"
				href="https://app.uniswap.org/#/tokens/arbitrum/0x231ee5257a40d223aeee5043c88e1bcc40c57be4"
				target="_blank"
				py={8}
				px={12}
				fontSize={21}
				bg="#363015"
				border="1px solid #363015"
				color="#FFE503"
				variant="solid"
				_hover={{ "background-color": "white", "color": "#363015" }}
			>
				Trade on uniswap
			</Button>
			<Button
				as="a"
				href="https://www.dextools.io/app/en/arbitrum/pair-explorer/0x5ecb2dd1e79f7d7d20dd82d31a99752b6d681bf6"
				target="_blank"
				py={8}
				px={12}
				fontSize={21}
				borderColor="#363015"
				color="#363015"
				variant={"outline"}
			>
				See Chart
			</Button>
		</ButtonGroup>
	);
}
