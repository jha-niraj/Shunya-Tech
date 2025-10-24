'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Equal, Moon, Sun, LogOut, Mail, FolderOpen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/liquidbutton'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'How it Works', href: '#approach' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '/aboutus' },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = (href: string, e?: React.MouseEvent) => {
        if (href.startsWith('#')) {
            e?.preventDefault();

            // If we're not on the homepage, navigate to homepage first
            if (pathname !== '/') {
                router.push(`/${href}`);
                return;
            }

            // If we're on homepage, scroll to the section
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const renderAuthButtons = () => {
        return (
            <div className="hidden lg:flex items-center gap-4">
                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={cn(
                        'rounded-xl border-2 hover:scale-105 transition-all duration-300',
                        isScrolled ? 'w-10 h-10 p-0' : ''
                    )}
                >
                    <Link href="/contact">
                        {isScrolled ? (
                            <Mail className="h-4 w-4" />
                        ) : (
                            <span>Contact</span>
                        )}
                    </Link>
                </Button>
                <Button
                    asChild
                    size="sm"
                    className={cn(
                        'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300',
                        isScrolled ? 'w-10 h-10 p-0' : ''
                    )}
                >
                    <Link href="/projects">
                        {isScrolled ? (
                            <FolderOpen className="h-4 w-4" />
                        ) : (
                            <span>Projects</span>
                        )}
                    </Link>
                </Button>
            </div>
        );
    };

    return (
        <header>
            <nav className="fixed left-0 w-full z-20 px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex gap-2 items-center"
                            >
                                <Image
                                    src="/shunyatech.png"
                                    alt="ProjectCentral"
                                    width={32}
                                    height={32}
                                    className='w-10 h-10 rounded-full scale-110 bg-black'
                                />
                                <p className='font-semibold text-xl tracking-tighter text-black dark:text-white'>Shunya Tech</p>
                            </Link>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="lg:hidden p-2"
                                    >
                                        <Equal className="size-6" />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="top" className="w-full h-[50vh]">
                                    <SheetHeader>
                                        <SheetTitle className="text-left">Menu</SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col space-y-6 pl-8">
                                        {
                                            menuItems.map((item, index) => (
                                                <SheetClose asChild key={index}>
                                                    <button
                                                        onClick={(e) => handleLinkClick(item.href, e)}
                                                        className="text-lg font-medium text-muted-foreground hover:text-accent-foreground transition-colors text-left"
                                                    >
                                                        {item.name}
                                                    </button>
                                                </SheetClose>
                                            ))
                                        }
                                        <div className="flex items-center gap-2 pt-4 border-t">
                                            <span className="text-sm text-muted-foreground">Theme:</span>
                                            <div className="flex items-center bg-gradient-to-r from-slate-100/80 to-slate-200/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm rounded-2xl p-1.5 border border-slate-300/30 dark:border-slate-600/30 shadow-lg">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className={`h-8 w-8 p-0 rounded-xl transition-all cursor-pointer duration-300 hover:scale-110 ${theme === 'light' ? 'bg-gradient-to-br from-white to-amber-50 shadow-md border border-amber-200/50' : 'hover:bg-slate-600/50'}`}
                                                    onClick={() => setTheme('light')}
                                                >
                                                    <Sun className="h-4 w-4 text-amber-500" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className={`h-8 w-8 p-0 rounded-xl transition-all cursor-pointer duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gradient-to-br from-slate-700 to-slate-800 shadow-md border border-blue-400/30' : 'hover:bg-slate-100/50'}`}
                                                    onClick={() => setTheme('dark')}
                                                >
                                                    <Moon className="h-4 w-4 text-blue-500" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center gap-2 pt-4 border-t">
                                            <SheetClose>
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="rounded-xl border-2 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                                    <Link href="/contact">
                                                        <Mail className="h-4 w-4" />
                                                        <span>Contact</span>
                                                    </Link>
                                                </Button>
                                            </SheetClose>
                                            <SheetClose>
                                                <Button
                                                    asChild
                                                    size="sm"
                                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                                    <Link href="/projects">
                                                        <FolderOpen className="h-4 w-4" />
                                                        <span>Projects</span>
                                                    </Link>
                                                </Button>
                                            </SheetClose>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {
                                    menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={(e) => handleLinkClick(item.href, e)}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer transition-colors">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="flex items-center bg-gradient-to-r from-slate-100/80 to-slate-200/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm rounded-2xl p-1.5 border border-slate-300/30 dark:border-slate-600/30 shadow-lg">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`h-8 w-8 p-0 rounded-xl transition-all cursor-pointer duration-300 hover:scale-110 ${theme === 'light' ? 'bg-gradient-to-br from-white to-amber-50 shadow-md border border-amber-200/50' : 'hover:bg-slate-600/50'}`}
                                    onClick={() => setTheme('light')}
                                >
                                    <Sun className="h-4 w-4 text-amber-500" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`h-8 w-8 p-0 rounded-xl transition-all cursor-pointer duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gradient-to-br from-slate-700 to-slate-800 shadow-md border border-blue-400/30' : 'hover:bg-slate-100/50'}`}
                                    onClick={() => setTheme('dark')}
                                >
                                    <Moon className="h-4 w-4 text-blue-500" />
                                </Button>
                            </div>
                            {renderAuthButtons()}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
