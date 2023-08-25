"use client";

import { FormspreeProvider } from "@formspree/react";

export default function FormspreeProviderContext({ children }) {
  return (
    <FormspreeProvider project="2261039971638968247">
      {children}
    </FormspreeProvider>
  );
}
