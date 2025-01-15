import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function BrandPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="bg-transparent hover:bg-white border-white text-white hover:text-neutral-900">GPT 4o mini</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-neutral-400 border-neutral-400">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Powered by <span className="bg-cyan-400 text-white p-1 rounded font-semibold">GPT 4o mini</span></h4>
            <p className="text-sm text-neutral-800">
              Currently only OpenAI&apos; GPT 4o mini supported. Other AI chat engine will be supported in this app.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
