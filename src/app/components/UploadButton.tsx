import React from "react";
import { useState } from 'react';

import { useCurrentTheme } from "@dynatrace/strato-components/core";
import { UploadIcon } from '@dynatrace/strato-icons';
import { Button } from '@dynatrace/strato-components/buttons';

import { validate, dereference } from '@scalar/openapi-parser';

export const UploadButton = () => {
  const theme = useCurrentTheme();
  const [isUploading, setIsUploading] = useState(Boolean);
  const [openApi, setOpenApi] = useState(Object);

  async function uploadYAML() {
    setIsUploading(true);
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    document.body.appendChild(fileInput); // Append to the body

    // Listen for file selection
    fileInput.addEventListener('change', async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file: File | null = target.files?.[0] || null;
      if (file) {
          // extract file content & validate
          const fileContent = await file.text();
          console.log('File selected:', file);
          console.log('File content:\n');
          console.log(fileContent);
          const { valid, errors } = await validate(fileContent);
          console.log('Valid:', valid);

          if (valid) {
            const { schema, errors } = await dereference(fileContent);
            console.log(schema);
            setOpenApi(schema);
          }
          else {
            console.error(errors);
          }
      }
    });

    // Simulate click to trigger file upload
    fileInput.click();

    // Remove element from DOM
    fileInput.remove();
    setIsUploading(false);
  }

  return (
      <Button variant="emphasized" onClick={uploadYAML} loading={isUploading}>
        <Button.Prefix>
          <UploadIcon>
          </UploadIcon>
        </Button.Prefix>
      </Button>
  );
};
