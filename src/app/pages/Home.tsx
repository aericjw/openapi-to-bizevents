import React from "react";

import { useCurrentTheme } from "@dynatrace/strato-components/core";
import { Flex } from "@dynatrace/strato-components/layouts";

import { UploadButton } from "../components/UploadButton";

export const Home = () => {
  const theme = useCurrentTheme();

  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>
      <UploadButton/>
    </Flex>
  );
};
