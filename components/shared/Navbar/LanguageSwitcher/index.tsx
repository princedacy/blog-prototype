"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const handleChange = (e: string) => {
    const newLocale = e;
  };

  return (
    <div
      className={cn("relative flex items-center justify-end gap-14", className)}
    >
      <Select onValueChange={(e) => handleChange(e)}>
        <SelectTrigger
          className="flex w-max items-center gap-2 border-2 border-primary-grey"
          //   value={language}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="flex flex-row items-center">
          <SelectItem value="rw" defaultChecked>
            Kinyarwanda
          </SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">French</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
