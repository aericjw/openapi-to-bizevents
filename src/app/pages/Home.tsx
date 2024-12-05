import React from "react";

import { useCurrentTheme } from "@dynatrace/strato-components/core";
import { Flex } from "@dynatrace/strato-components/layouts";
import {
  Heading,
  Paragraph,
  Strong,
} from "@dynatrace/strato-components/typography";
import { Card } from "../components/Card";

export const Home = () => {
  const theme = useCurrentTheme();
  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>
    </Flex>
  );
};
