import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { Id } from "../../../convex/_generated/dataModel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface DocumentMenuProps {
  documentId: Id<"documents">
  title: string
  onNewTab: (id:Id<"documents">) => void
}

export const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
    >
      <MoreVertical className="size-4" />
    </Button>
  )
}