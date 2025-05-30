import Link from "next/link";
import { ReactNode } from "react";

interface BackButtonProps {
  children: ReactNode;
}

export default function BackButton({ children }: BackButtonProps) {
  return <Link href="/projects">{children}</Link>;
}
