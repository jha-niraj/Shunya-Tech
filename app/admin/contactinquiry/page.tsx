"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    ArrowLeft, Search, Mail, Calendar,
    MessageSquare, Filter, Download, Trash2, Eye
} from "lucide-react"
import { getAllContactInquiries, deleteContactInquiry } from "@/actions/admin.action"
import { toast } from "sonner"

interface ContactInquiry {
    id: string
    name: string
    email: string
    message: string
    inquiryType: string
    createdAt: string
    updatedAt: string
}

export default function ContactInquiryPage() {
    const [inquiries, setInquiries] = useState<ContactInquiry[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null)

    useEffect(() => {
        // Fetch all contact inquiries
        const fetchInquiries = async () => {
            try {
                const result = await getAllContactInquiries()
                if (result.success && result.data) {
                    setInquiries(result.data.map(inquiry => ({
                        ...inquiry,
                        createdAt: inquiry.createdAt.toISOString(),
                        updatedAt: inquiry.updatedAt.toISOString()
                    })))
                }
            } catch (error) {
                console.error('Failed to fetch inquiries:', error)
                toast.error('Failed to fetch inquiries')
            } finally {
                setLoading(false)
            }
        }

        fetchInquiries()
    }, [])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const filteredInquiries = inquiries.filter(inquiry =>
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.message.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const truncateMessage = (message: string, maxLength: number = 150) => {
        return message.length > maxLength ? message.substring(0, maxLength) + '...' : message
    }

    const handleDeleteInquiry = async (id: string) => {
        try {
            const result = await deleteContactInquiry(id)
            if (result.success) {
                setInquiries(inquiries.filter(inquiry => inquiry.id !== id))
                setSelectedInquiry(null)
                toast.success('Inquiry deleted successfully')
            } else {
                toast.error(result.error || 'Failed to delete inquiry')
            }
        } catch (error) {
            console.error('Failed to delete inquiry:', error)
            toast.error('Failed to delete inquiry')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-black dark:to-slate-900 py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Button asChild variant="outline" size="sm">
                                <Link href="/admin" className="flex items-center gap-2">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Dashboard
                                </Link>
                            </Button>
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Inquiries</h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                                    Manage and respond to customer inquiries
                                </p>
                            </div>
                        </div>
                        <Badge className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                            {filteredInquiries.length} Total Inquiries
                        </Badge>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-gray-200/30 dark:border-gray-800/30">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                                            All Inquiries
                                        </CardTitle>
                                        <div className="flex items-center space-x-2">
                                            <Button variant="outline" size="sm">
                                                <Filter className="h-4 w-4 mr-2" />
                                                Filter
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Download className="h-4 w-4 mr-2" />
                                                Export
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Search inquiries..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {
                                        loading ? (
                                            <div className="space-y-4">
                                                {
                                                    [...Array(5)].map((_, i) => (
                                                        <div key={i} className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse">
                                                            <div className="flex items-center space-x-4">
                                                                <div className="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                                                <div className="flex-1 space-y-2">
                                                                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                                                                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ) : filteredInquiries.length > 0 ? (
                                            <div className="space-y-4 max-h-[600px] overflow-y-auto">
                                                {
                                                    filteredInquiries.map((inquiry, index) => (
                                                        <motion.div
                                                            key={inquiry.id}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                                            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${selectedInquiry?.id === inquiry.id
                                                                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                                                                    : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                                }`}
                                                            onClick={() => setSelectedInquiry(inquiry)}
                                                        >
                                                            <div className="flex items-start justify-between">
                                                                <div className="flex-1">
                                                                    <div className="flex items-center space-x-2 mb-2">
                                                                        <h3 className="font-medium text-gray-900 dark:text-white">
                                                                            {inquiry.name}
                                                                        </h3>
                                                                        <Badge variant="secondary" className="text-xs">
                                                                            {inquiry.inquiryType}
                                                                        </Badge>
                                                                    </div>
                                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                                        {inquiry.email}
                                                                    </p>
                                                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                                                        {truncateMessage(inquiry.message)}
                                                                    </p>
                                                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                                                        <Calendar className="h-3 w-3 mr-1" />
                                                                        {formatDate(inquiry.createdAt)}
                                                                    </div>
                                                                </div>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation()
                                                                        setSelectedInquiry(inquiry)
                                                                    }}
                                                                >
                                                                    <Eye className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </motion.div>
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <div className="text-center py-8">
                                                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    {searchTerm ? 'No inquiries match your search' : 'No inquiries yet'}
                                                </p>
                                            </div>
                                        )
                                    }
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-gray-200/30 dark:border-gray-800/30 sticky top-8">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Inquiry Details
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {
                                        selectedInquiry ? (
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                                                        Contact Information
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                                                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                                    {selectedInquiry.name}
                                                                </p>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                                    {selectedInquiry.email}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="h-8 w-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                                                                <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                                    Submitted
                                                                </p>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                                    {formatDate(selectedInquiry.createdAt)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                                                        Message
                                                    </h3>
                                                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                                                            {selectedInquiry.message}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <Button
                                                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                                        onClick={() => window.open(`mailto:${selectedInquiry.email}`, '_blank')}
                                                    >
                                                        <Mail className="h-4 w-4 mr-2" />
                                                        Reply
                                                    </Button>
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center py-8">
                                                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    Select an inquiry to view details
                                                </p>
                                            </div>
                                        )
                                    }
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}