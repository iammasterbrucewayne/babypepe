import { Code, Text } from "@chakra-ui/react";
import Header from "@components/common/Header";
import { Fragment } from "react";

export default function Tokenomics() {
	return (
		<Fragment>
			<Header title="tokenomics" />
			<Text>
				No added taxes. No Bullshit. It’s that simple. 95.7931% of the tokens
				were sent to the liquidity pool, LP tokens were burnt, and contract is
				non-urpgradable. The remaining 4.2069% is being held by the team to be
				used as tokens for future centralized exchange listings, bridges,
				liquidity pools and promos. The wallet address is
				<Code>0x08388dcaad1236b7a0b2Ce9bb707FE325519Dd2B</Code> (this will be
				updated here if we move funds)
			</Text>
		</Fragment>
	);
}
