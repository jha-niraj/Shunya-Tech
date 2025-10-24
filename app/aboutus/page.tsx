"use client"

const values = [
    {
        icon: "🎯",
        title: "Innovation",
        description: "We push boundaries and embrace new technologies to create cutting-edge solutions.",
    },
    {
        icon: "🤝",
        title: "Collaboration",
        description: "We believe in the power of teamwork and open communication with clients and team members.",
    },
    {
        icon: "⚡",
        title: "Excellence",
        description: "We never compromise on quality. Every project receives our full attention and expertise.",
    },
    {
        icon: "🚀",
        title: "Impact",
        description: "We measure success by the real-world impact our solutions create for our clients.",
    },
    {
        icon: "🔒",
        title: "Integrity",
        description: "We operate with transparency and honesty in all our business relationships.",
    },
]
const milestones = [
    {
        year: "2019",
        title: "Founded",
        description: "Shunya Tech is born with a vision to revolutionize digital solutions",
    },
    {
        year: "2020",
        title: "First 10 Clients",
        description: "Rapid growth as we deliver exceptional results for early adopters",
    },
    {
        year: "2021",
        title: "Product Launch",
        description: "Released our first internal product, expanding beyond client services",
    },
    { year: "2022", title: "50+ Clients", description: "Scaled to serve diverse industries with tailored solutions" },
    {
        year: "2023",
        title: "150+ Projects",
        description: "Milestone achievement in project delivery and client satisfaction",
    },
    { year: "2024", title: "Global Reach", description: "Expanded operations and serving clients worldwide" },
]
const teamMembers = [
    {
        name: "Niraj Jha",
        role: "Founder & CEO",
        bio: "Visionary leader with 8+ years in tech. Passionate about building products that matter.",
        image: "/professional-man-ceo.jpg",
        specialty: "Leadership",
    },
    {
        name: "Priya Sharma",
        role: "CTO & Co-Founder",
        bio: "Full-stack architect specializing in scalable systems. Drives our technical excellence.",
        image: "/professional-woman-tech.jpg",
        specialty: "Architecture",
    },
    {
        name: "Rahul Verma",
        role: "Lead Product Designer",
        bio: "Design-driven innovator creating beautiful, intuitive user experiences.",
        image: "/professional-man-designer.jpg",
        specialty: "Design",
    },
    {
        name: "Anjali Patel",
        role: "Head of Engineering",
        bio: "Experienced engineer leading our development team with precision and creativity.",
        image: "/professional-woman-engineer.jpg",
        specialty: "Engineering",
    },
    {
        name: "Vikram Singh",
        role: "Senior Full-Stack Developer",
        bio: "Expert in modern web technologies. Builds robust, scalable applications.",
        image: "/professional-man-developer.jpg",
        specialty: "Full-Stack",
    },
    {
        name: "Neha Gupta",
        role: "Product Manager",
        bio: "Strategic thinker focused on delivering products that solve real user problems.",
        image: "/professional-woman-product.jpg",
        specialty: "Product",
    },
    {
        name: "Arjun Desai",
        role: "Frontend Lead",
        bio: "UI/UX specialist crafting pixel-perfect interfaces with React and modern frameworks.",
        image: "/professional-man-frontend.jpg",
        specialty: "Frontend",
    },
    {
        name: "Divya Nair",
        role: "Backend Architect",
        bio: "Database and infrastructure expert ensuring our systems scale seamlessly.",
        image: "/professional-woman-backend.jpg",
        specialty: "Backend",
    },
    {
        name: "Karan Malhotra",
        role: "DevOps Engineer",
        bio: "Cloud infrastructure specialist optimizing deployment and system reliability.",
        image: "/professional-man-devops.jpg",
        specialty: "DevOps",
    },
    {
        name: "Sophia Chen",
        role: "UX Researcher",
        bio: "Data-driven researcher uncovering user insights to guide product decisions.",
        image: "/professional-woman-researcher.jpg",
        specialty: "Research",
    },
]

export default function AboutPage() {

    return (
        <main className="min-h-screen bg-background">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <defs>
                            <pattern id="lines" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                <line x1="0" y1="0" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="1000" height="1000" fill="url(#lines)" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-block mb-6 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 dark:border-teal-400/30">
                        <span className="text-teal-600 dark:text-teal-400 text-sm font-medium">About Shunya Tech</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                        Building the Future,
                        <br />
                        <span className="text-teal-600 dark:text-teal-400">One Product at a Time</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We're an agency that doesn't just build for clients—we build products that matter. Combining strategic
                        thinking with cutting-edge technology to create solutions that drive real impact.
                    </p>
                </div>
            </section>
            <section className="py-20 md:py-32 px-6 bg-background">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                Shunya Tech was founded with a simple belief: great technology should solve real problems. What started as
                                a small team of passionate developers has grown into a full-service agency delivering world-class
                                solutions to clients across industries.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                But we didn't stop at client work. We built our own products—platforms that reflect our commitment to
                                innovation and excellence. Today, we balance both: delivering exceptional client solutions while nurturing
                                our own product ecosystem.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our journey is defined by curiosity, collaboration, and a relentless pursuit of quality. Every project,
                                every product, every line of code represents our commitment to excellence.
                            </p>
                        </div>
                        <div className="relative h-96 bg-gradient-to-br from-teal-500/10 to-blue-500/10 dark:from-teal-500/20 dark:to-blue-500/20 rounded-xl border border-teal-500/20 dark:border-teal-500/30 flex items-center justify-center shadow-lg dark:shadow-teal-500/10">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-teal-600 dark:text-teal-400 mb-2">5+</div>
                                <p className="text-muted-foreground font-medium">Years of Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-32 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Mission & Values</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We're committed to delivering exceptional value through innovation, collaboration, and unwavering
                            excellence.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {
                            values.map((value, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-xl bg-card border border-border hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 dark:hover:shadow-teal-400/10"
                                >
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-32 px-6 bg-background">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Our Journey</h2>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-600 dark:from-teal-400 to-blue-600 dark:to-blue-400 hidden md:block" />
                        <div className="space-y-12">
                            {
                                milestones.map((milestone, index) => (
                                    <div key={index} className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                        <div className="flex-1 md:text-right">
                                            <div className="text-teal-600 dark:text-teal-400 font-bold text-lg mb-2">{milestone.year}</div>
                                            <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                                            <p className="text-muted-foreground">{milestone.description}</p>
                                        </div>
                                        <div className="hidden md:flex justify-center">
                                            <div className="w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 border-4 border-background" />
                                        </div>
                                        <div className="flex-1" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-32 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Talented individuals united by a passion for excellence and innovation.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {
                            teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="group rounded-xl overflow-hidden bg-card border border-border hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 dark:hover:shadow-teal-400/10"
                                >
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-500/10 to-blue-500/10 dark:from-teal-500/20 dark:to-blue-500/20">
                                        <img
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="p-5">
                                        <div className="inline-block mb-3 px-2.5 py-1 rounded-full bg-teal-500/10 dark:bg-teal-500/20 border border-teal-500/30 dark:border-teal-400/30">
                                            <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold">{member.specialty}</span>
                                        </div>

                                        <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                                        <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold mb-3">{member.role}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-32 px-6 bg-background">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 bg-gradient-to-br from-teal-500/10 to-blue-500/10 dark:from-teal-500/20 dark:to-blue-500/20 rounded-xl border border-teal-500/20 dark:border-teal-500/30 flex items-center justify-center shadow-lg dark:shadow-teal-500/10">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-teal-600 dark:text-teal-400 mb-2">24/7</div>
                                <p className="text-muted-foreground font-medium">Support Available</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Culture</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                At Shunya Tech, we believe that great work comes from great people working together. Our culture is built
                                on trust, transparency, and continuous learning.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                We invest in our team's growth, celebrate wins together, and learn from challenges. Whether you're working
                                on a client project or building our next product, you're part of something bigger.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We're not just a company—we're a community of builders, thinkers, and innovators committed to making a
                                difference in the digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}