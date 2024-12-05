import React from "react";
import { useState } from 'react';

import { useCurrentTheme } from "@dynatrace/strato-components/core";
import { Flex } from "@dynatrace/strato-components/layouts";
import { UploadIcon } from '@dynatrace/strato-icons';
import { Button } from '@dynatrace/strato-components/buttons';
import { Paragraph } from "@dynatrace/strato-components";

import { UploadButton } from "../components/UploadButton";

export const Home = () => {
  const theme = useCurrentTheme();

  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>
      <UploadButton/>
    </Flex>
  );
};
