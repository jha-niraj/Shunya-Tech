"use server"

export const runtime = 'edge';

import { prisma } from "@/lib/prisma"

export async function getContactStats() {
    try {
        // Get total count
        const total = await prisma.contact.count()

        // Get this week's count
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
        const thisWeek = await prisma.contact.count({
            where: {
                createdAt: {
                    gte: oneWeekAgo
                }
            }
        })

        // Get this month's count
        const oneMonthAgo = new Date()
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
        const thisMonth = await prisma.contact.count({
            where: {
                createdAt: {
                    gte: oneMonthAgo
                }
            }
        })

        // Get recent inquiries (last 5)
        const recent = await prisma.contact.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: 5,
            select: {
                id: true,
                name: true,
                email: true,
                message: true,
                createdAt: true
            }
        })

        return {
            success: true,
            data: {
                total,
                thisWeek,
                thisMonth,
                recent
            }
        }
    } catch (error) {
        console.error('Failed to fetch contact stats:', error)
        return {
            success: false,
            error: 'Failed to fetch contact stats'
        }
    }
}

export async function getAllContactInquiries() {
    try {
        const inquiries = await prisma.contact.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                name: true,
                email: true,
                message: true,
                inquiryType: true,
                createdAt: true,
                updatedAt: true
            }
        })

        return {
            success: true,
            data: inquiries
        }
    } catch (error) {
        console.error('Failed to fetch contact inquiries:', error)
        return {
            success: false,
            error: 'Failed to fetch contact inquiries'
        }
    }
}

export async function getContactInquiry(id: string) {
    try {
        const inquiry = await prisma.contact.findUnique({
            where: {
                id: id
            }
        })

        if (!inquiry) {
            return {
                success: false,
                error: 'Contact inquiry not found'
            }
        }

        return {
            success: true,
            data: inquiry
        }
    } catch (error) {
        console.error('Failed to fetch contact inquiry:', error)
        return {
            success: false,
            error: 'Failed to fetch contact inquiry'
        }
    }
}

export async function deleteContactInquiry(id: string) {
    try {
        await prisma.contact.delete({
            where: {
                id: id
            }
        })

        return {
            success: true,
            message: 'Contact inquiry deleted successfully'
        }
    } catch (error) {
        console.error('Failed to delete contact inquiry:', error)
        return {
            success: false,
            error: 'Failed to delete contact inquiry'
        }
    }
}