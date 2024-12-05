import React from "react";
import { useCurrentTheme } from "@dynatrace/strato-components/core";
import { Flex } from "@dynatrace/strato-components/layouts";
import { UploadIcon } from '@dynatrace/strato-icons';
import { Button } from '@dynatrace/strato-components/buttons';
import { useState } from 'react';

export const Home = () => {
  const theme = useCurrentTheme();
  const [isUploading, setIsUploading] = useState(Boolean);

  function uploadYAML() {
    setIsUploading(true);
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    document.body.appendChild(fileInput); // Append to the body

    // Listen for file selection
    fileInput.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file: File | null = target.files?.[0] || null;
      if (file) {
          console.log('File selected:', file);

          // Read the file content (for example, as text)
          const reader: FileReader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
              console.log('File content:\n', e.target?.result);
          };
          reader.readAsText(file);
      }
    });

    // Simulate click to trigger file upload
    fileInput.click();

    // Remove element from DOM
    fileInput.remove();
    setIsUploading(false);
  }
 

  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>
      <Button variant="emphasized" onClick={uploadYAML} loading={isUploading}>
        <Button.Prefix>
          <UploadIcon>
          </UploadIcon>
        </Button.Prefix>
      </Button>
    </Flex>
  );
};
