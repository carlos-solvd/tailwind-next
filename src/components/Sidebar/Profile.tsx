import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/ceduardogodoi.png"
        alt="avatar"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Carlos Eduardo
        </span>
        <span className=" truncate text-sm text-zinc-500">
          cealvesdegodoi@solvd.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
