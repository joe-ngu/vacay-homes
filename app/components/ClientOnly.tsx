"use client";

import { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode
};

export const ClientOnly = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly;
