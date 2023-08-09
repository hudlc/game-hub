import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack padding={"10px"}>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      ></Switch>
      <Text> Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
