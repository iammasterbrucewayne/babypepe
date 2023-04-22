import { Heading } from "@chakra-ui/react";

export default function Header({ title }) {
	return (
		<Heading fontFamily="'Gochi Hand', cursive" fontSize="8xl">
			{title}
		</Heading>
	);
}
