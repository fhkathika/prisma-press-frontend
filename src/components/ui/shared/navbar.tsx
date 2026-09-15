import Link from "next/link"
import { ChevronDown, CreditCard, LogOut, Settings, User } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import logout from "../../../../service/logout"

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Analytics", href: "#analytics" },
  { label: "Resources", href: "#resources" },
  { label: "Documentation", href: "#documentation" },
]
type IUser={
success:boolean,
message:string,
data:{
profile:{
     
     
            id: string,
            name: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        
    
}
}
}
type NavbarProps={
user:IUser
}

export function Navbar({user}:NavbarProps) {
 console.log(user.success,"success")
  const handleUserMenuAction=async(action:string)=>{
console.log(`user Menu action: ${action}`)

 
  if(action ==="logout"){
await logout()
  }
  }
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="#overview" className="text-lg font-semibold tracking-tight">
            Northstar
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Open user menu"
            className="flex items-center gap-2 rounded-md p-1.5 outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Avatar size="sm">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium sm:inline">Jordan Davis</span>
            <ChevronDown aria-hidden="true" className="hidden size-4 text-muted-foreground sm:inline" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <p>{user?.data?.profile?.name || "Name"} </p>
                <p className="font-normal text-muted-foreground">{user?.data?.profile?.email || "Email"}</p>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>

              <DropdownMenuItem>
                <User data-icon="inline-start" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings data-icon="inline-start" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard data-icon="inline-start" />
                Billing
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive"
            onClick={async()=>{
              
               await handleUserMenuAction("logout")}
              }
            >
              <LogOut data-icon="inline-start" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
