import { EmailIcon } from "@chakra-ui/icons";
import { HStack, IconButton } from "@chakra-ui/react";
import Header from "@components/common/Header";
import { Fragment } from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function Contact() {
	return (
		<Fragment>
			<Header title="contact" />
			<HStack spacing={6} justify="center">
				<IconButton
					as="a"
					target="_blank"
					aria-label="twitter"
					href="https://twitter.com/babypepe_arb"
					borderColor="#363015"
					color="#363015"
					variant={"outline"}
					icon={<FaTwitter />}
				/>
				<IconButton
					as="a"
					target="_blank"
					aria-label="telegram"
					href="https://t.me/babypepe_arb"
					borderColor="#363015"
					color="#363015"
					variant={"outline"}
					icon={<FaTelegram />}
				/>
				<IconButton
					as="a"
					target="_blank"
					borderColor="#363015"
					color="#363015"
					variant={"outline"}
					href="mailto:batman@bbpepe.lol"
					icon={<EmailIcon />}
				/>
			</HStack>
		</Fragment>
	);
}
