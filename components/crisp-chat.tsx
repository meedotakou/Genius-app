"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e2a245fe-77dd-4364-82a0-fe36be30f264");
  }, []);

  return null;
};