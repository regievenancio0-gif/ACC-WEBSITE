import { Link } from '@inertiajs/react';
import { BookA, BookOpen, BookOpenText, FolderDot, FolderGit2, House, InfoIcon, LayoutGrid, School } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { academe, admission, dashboard, researchextension, studentsalumni } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
   {
        title: 'Home',
        href: dashboard(),
        icon: House,
    },
    {
        title: 'About',
        href: about(),
        icon: InfoIcon,
    },
    {
        title: 'Academe',
        href: academe(),
        icon: FolderDot,
    },
    {
        title: 'Admission',
        href: admission(),
        icon: School,
    },
    {
        title: 'Students Alumni',
        href: studentsalumni(),
        icon: BookA,
    },
    {
        title: 'Research & Extension',
        href: researchextension(),
        icon: BookOpenText,
    },
];
    

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}