import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { ClipboardPlus, LayoutGrid } from 'lucide-react';


const menuItems = [
    {
        id: 1,
        title: "Dashboard",
        icon: <LayoutGrid />,
        link: "/dashboard"
    },
    {
        id: 2,
        title: "Appointment",
        icon: <ClipboardPlus />,
        link: "/appointments"
    },

]

function SidebarItem({ icon, title, link }: { icon: React.ReactNode, title: string, link: string }) {
    return (
        <Link href={link} className="flex gap-2">
            {icon}
            <h1>{title}</h1>
        </Link>
    )
}

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader >
                <div className="flex items-center ">
                    <Image src="/logo.svg" alt="Logo" width={80} height={80} />
                    <h1>MedCare</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                {menuItems.map((item) => (
                    <SidebarGroup key={item.id}>
                        <div>
                            <SidebarItem link={item.link} title={item.title} icon={item.icon} />
                        </div>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter >
                <div>
                    <h1>Logout</h1>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}