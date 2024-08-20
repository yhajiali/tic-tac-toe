import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Separator, Text } from "@radix-ui/themes";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 py-2">
      <Separator orientation={"horizontal"} size="4" />
      <Flex justify={"between"} className="w-full max-w-7xl p-2 text-sm">
        <Text>
          Created by{" "}
          <a
            href="https://linkedin.com/in/yhajiali"
            target="_blank"
            className="text-blue-500 hover:underline inline-flex items-center group"
          >
            yhajiali
            <ExternalLinkIcon className="invisible group-hover:visible" />
          </a>
        </Text>

        <Flex gap="3" align="center">
          <ThemeSwitcher />
          <Separator orientation="vertical" />
          <a href="https://github.com/yhajiali" target="_blank">
            <GitHubLogoIcon />
          </a>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
