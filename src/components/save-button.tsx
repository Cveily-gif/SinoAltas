import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/lib/locale";
import { usePlanner, usePlannerHydration } from "@/lib/planner-store";
import { cn } from "@/lib/utils";

export function SaveButton({
  slug,
  tone = "light",
}: {
  slug: string;
  tone?: "light" | "dark";
}) {
  const saved = usePlanner((s) => s.saved.includes(slug));
  const toggle = usePlanner((s) => s.toggle);
  const ready = usePlannerHydration();
  const t = useCopy();
  const on = ready && saved;

  return (
    <Button
      type="button"
      variant={tone === "dark" ? "ghost" : "outline"}
      size="sm"
      onClick={() => toggle(slug)}
      aria-pressed={on}
      aria-label={on ? t.saveOff : t.saveAdd}
      className={cn("min-w-11", on && "border-cinnabar text-cinnabar")}
    >
      <Bookmark
        className="size-4"
        strokeWidth={1.6}
        fill={on ? "currentColor" : "none"}
      />
      <span>{on ? t.saveOn : t.saveAdd}</span>
    </Button>
  );
}
