import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader >
                <div>
                    <h1>Hello</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup >
                    <div>
                        <Link href="/appointments">
                            <h1>Appointment</h1>
                        </Link>
                    </div>
                </SidebarGroup>
                <SidebarGroup >
                    <div>

                        <h1>Doctors</h1>
                    </div>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter >
                <div>
                    <h1>Logout</h1>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}