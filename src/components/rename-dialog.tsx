"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { Id } from "../../convex/_generated/dataModel"
import { Alert } from "./ui/alert"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"



interface RenameDialogProps {
  documentId: Id<"documents">
  children: React.ReactNode
}

export const RenameDialog = ({ documentId, children }: RenameDialogProps) => {

  const remove = useMutation(api.documents.removeById)
  const [isRemoving, setIsRemoving] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <form>
          <DialogHeader>
            <DialogTitle>Rename document</DialogTitle>
            <DialogDescription>
              Enter a new name for this document.
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input />
          </div>
          <DialogFooter>
            <Button>
              Cancel
            </Button>
            <Button>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}