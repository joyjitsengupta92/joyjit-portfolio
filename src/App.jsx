import React, { useState } from "react";
import { motion } from "framer-motion";

// Professional React portfolio (Light/Dark Toggle + Card Layout + Futuristic Animations)
// Usage: replace src/App.jsx in a Vite/CRA project with Tailwind CSS + Framer Motion installed

export default function App() {
  const name = "Joyjit Sengupta";
  const title = "Web Consultant & Digital Transformation Developer";
  const tagline = "I build digital systems — not just websites.";
  const email = "joyjit.sengupta1992@gmail.com"; // replace
  const linkedin = "https://www.linkedin.com/in/joyjit-sengupta/"; // replace

  const [dark, setDark] = useState(true);

  const skills = [
    "Automation & CRM Systems",
    "API Integration",
    "React",
    "Node.js",
    "Express",
    "WordPress (Custom Themes)",
    "Shopify & E-commerce",
    "MySQL / Database Design",
  ];

  const services = [
    "Web App Development (React + Node.js)",
    "Custom E‑commerce (WooCommerce / Shopify)",
    "CRM & Business Workflow Automation",
    "WordPress Custom Theme & Functional Sites",
    "API Integration & Data Systems",
    "Technical Architecture & Feature Planning",
  ];

  const projects = [
  {
    name: "GDG Kolkata Website",
    tech: "WordPress, Custom Theme",
    desc: "Community-focused website with clean layout, event information structure and responsive design.",
    outcome: "Improved content structure, mobile responsiveness and community engagement.",
    link: "https://gdgkolkata.com/",
  },
  {
    name: "Tho Hemp",
    tech: "Shopify, Custom UI",
    desc: "E-commerce website focused on branding, performance optimization and mobile-first UX.",
    outcome: "Enhanced user experience, faster loading times and improved conversion rates.",
    link: "https://thohemp.com/",
  },
  {
    name: "Think Wittsy",
    tech: "Shopify, Responsive UI",
    desc: "Corporate website with modern layout, optimized performance and clear service presentation.",
    outcome: "Clear brand positioning and better service discoverability.",
    link: "https://thinkwittsy.com/",
  },
  {
    name: "EEPC India",
    tech: "React.js/Laravel, Large-scale CMS",
    desc: "Enterprise-level organization website with structured content, data-heavy pages and CMS optimization.",
    outcome: "Easier content management and improved access to large-scale information.",
    link: "https://eepcindia.org/",
  },
  {
    name: "Dabri Tea",
    tech: "Custom PHP(Laravel), Brand Website",
    desc: "Product-focused brand website with smooth UX, clean visuals and responsive design.",
    outcome: "Stronger brand presence and improved product presentation.",
    link: "https://www.dabritea.in/",
  },
  {
    name: "Keshavaminfra",
    tech: "WordPress, Corporate Website",
    desc: "Infrastructure company website designed for professionalism and clear information flow.",
    outcome: "Professional online presence and clearer communication of services.",
    link: "https://keshavaminfra.com/",
  },
  {
    name: "SITA Group",
    tech: "WordPress, Multi-business Website",
    desc: "Group company website showcasing multiple verticals with structured navigation.",
    outcome: "Improved navigation across business verticals and brand clarity.",
    link: "https://sitagroup.in/",
  },
  {
    name: "Propello",
    tech: "WordPress, Startup Website",
    desc: "Startup-focused website built for clarity, lead generation and conversions.",
    outcome: "Better lead flow and clearer value proposition for users.",
    link: "https://propello.in/",
  },
  {
    name: "K9 Spares",
    tech: "WordPress, Custom Listing System",
    desc: "Spare parts listing website with enquiry-based flow and custom data management.",
    outcome: "Simplified spare parts enquiry process without exposing pricing.",
    link: "https://k9spares.com/",
  },
  {
    name: "Ziel Learning Space",
    tech: "WordPress, Education Platform",
    desc: "Educational website with structured course information and student-friendly UX.",
    outcome: "Improved course discovery and student engagement.",
    link: "https://ziellearningspace.com/",
  },
  {
    name: "Fabric Hero",
    tech: "Shopify, Product Showcase",
    desc:"Textile-focused website with modern visuals and performance-oriented layout.",
    outcome: "Enhanced visual appeal and faster browsing experience.",
    link: "https://www.fabrichero.in/",
  },
  {
    name: "Cable Operator CRM",
    tech: "React.js, MySQL, Express",
    desc:"Excel bulk upload, subscription expiry automation, package mapping and reporting system for cable operators.",
    outcome: "Reduced manual work, fewer expiry errors and better operational visibility.",
    link: "",
  },
];


  return (
    <div className={`min-h-screen ${dark ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"} antialiased`}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
            <p className="text-sm text-slate-400">{title}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* <button
              onClick={() => setDark(!dark)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md border ${dark ? "border-slate-700" : "border-slate-200"}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill={dark ? "#93C5FD" : "#1E293B"} />
              </svg>
              <span className="text-xs">{dark ? "Dark" : "Light"}</span>
            </button> */}

            <a href="#contact" className="text-sm inline-block bg-sky-600 text-white px-3 py-2 rounded-md">Contact</a>
          </div>
        </header>

        {/* HERO */}
        <main className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-sky-400">Hello, I'm</p>
            <h2 className="text-4xl font-extrabold mt-2 tracking-tight">{name}</h2>
            <p className="mt-3 text-lg text-slate-400">{tagline}</p>

            <p className="mt-6 text-slate-400 leading-relaxed">
              I help businesses move from traditional operations to digital-first workflows by building
              custom web applications, automation tools and e-commerce solutions focused on function,
              reliability and measurable outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-md"
                href="#contact"
              >
                Discuss Your Project
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg"
                href="#projects"
              >
                View Projects
              </motion.a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg">
                <div className="text-xs uppercase">Experience</div>
                <div className="mt-2 font-semibold text-lg">10+ Years</div>
                <div className="text-xs mt-1 text-slate-200">Web & App Development, CRM</div>
              </div>

              <div className={`p-4 rounded-lg ${dark ? "bg-slate-800 text-white" : "bg-white text-slate-900"} shadow-sm border`}>
                <div className="text-xs uppercase">Availability</div>
                <div className="mt-2 font-semibold text-lg">Immediate</div>
                <div className="text-xs mt-1 text-slate-400">Open for full-time or contract</div>
              </div>
            </div>
          </motion.section>

          {/* Right side card: Skills + Services */}
          <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className={`rounded-2xl p-6 ${dark ? "bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white" : "bg-white text-slate-900"} shadow-2xl border`}>
              <h3 className="text-lg font-semibold">Core Skills</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {skills.map((s) => (
                  <motion.div
                    key={s}
                    whileHover={{ translateY: -6, boxShadow: "0 12px 30px rgba(37,99,235,0.12)" }}
                    className={`p-3 rounded-lg border ${dark ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-100"}`}
                  >
                    <div className="text-sm font-medium">{s}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-slate-400">Services (Development)</h4>
                <ul className="mt-3 text-sm space-y-2">
                  {services.map((sv) => (
                    <li key={sv} className="flex items-start gap-2">
                      <span className="text-sky-400">▸</span>
                      <span>{sv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-slate-400">Contact</h4>
                <div className="mt-2 text-sm">
                  <div>Email: <a className="text-sky-300" href={`mailto:${email}`}>{email}</a></div>
                  <div className="mt-1">LinkedIn: <a className="text-sky-300" href={linkedin}>{linkedin}</a></div>
                </div>
              </div>
            </div>
          </motion.aside>
        </main>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <p className="mt-2 text-sm text-slate-400">Development-focused case studies & work samples.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`rounded-lg p-5 border ${dark ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-white" : "bg-white border-slate-100 text-slate-900"}`}
              >
                <div className="text-xs text-sky-400">{p.tech}</div>
                <h4 className="mt-2 font-medium text-lg">{p.name}</h4>
                <p className="mt-3 text-sm text-slate-400">{p.desc}</p>
                <p className="mt-3 text-sm text-slate-400"><strong className="text-sky-600">Outcome:</strong> {p.outcome}</p>
                <div className="mt-4">
                  {p.link ? (
                    <a className="text-sm text-sky-400" href={p.link}>View Project</a>
                  ) : (
                    <span className="text-xs text-slate-500">Demo / GitHub link on request</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* How I Work (Futuristic steps) */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">How I Work</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.03 }} className={`p-6 rounded-xl border ${dark ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-100 text-slate-900"}`}>
              <div className="text-sky-400 text-sm">01</div>
              <h4 className="mt-2 font-medium">Discovery</h4>
              <p className="mt-2 text-sm text-slate-400">Understand business flows, KPIs and pain points.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className={`p-6 rounded-xl border ${dark ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-100 text-slate-900"}`}>
              <div className="text-sky-400 text-sm">02</div>
              <h4 className="mt-2 font-medium">Plan & Architecture</h4>
              <p className="mt-2 text-sm text-slate-400">Feature mapping, data model & integration plan.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className={`p-6 rounded-xl border ${dark ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-100 text-slate-900"}`}>
              <div className="text-sky-400 text-sm">03</div>
              <h4 className="mt-2 font-medium">Implement & Deliver</h4>
              <p className="mt-2 text-sm text-slate-400">Iterative builds, testing, deployment and docs.</p>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16">
  <h3 className="text-2xl font-semibold">Contact</h3>
  <p className="mt-2 text-sm text-slate-400">
    Interested in a project or need a technical consultation? Reach out.
  </p>

  <div
    className={`mt-6 rounded-lg border p-6 grid md:grid-cols-2 gap-6 ${
      dark
        ? "bg-slate-900 border-slate-700 text-white"
        : "bg-white border-slate-100 text-slate-900"
    }`}
  >
    {/* ========= FORM SECTION ========= */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(
          "Thank you — this form is a template. Replace with your mailer/Netlify/Vercel integration."
        );
      }}
      className="space-y-4"
    >
      <div>
        <label className="text-sm opacity-80">Name</label>
        <input
          className={`w-full mt-2 p-2 rounded-md border ${
            dark ? "bg-slate-800 border-slate-600" : "bg-slate-50 border-slate-300"
          }`}
        />
      </div>

      <div>
        <label className="text-sm opacity-80">Email</label>
        <input
          className={`w-full mt-2 p-2 rounded-md border ${
            dark ? "bg-slate-800 border-slate-600" : "bg-slate-50 border-slate-300"
          }`}
        />
      </div>

      <div>
        <label className="text-sm opacity-80">Project details</label>
        <textarea
          className={`w-full mt-2 p-2 rounded-md border h-28 ${
            dark ? "bg-slate-800 border-slate-600" : "bg-slate-50 border-slate-300"
          }`}
        ></textarea>
      </div>

      <button className="mt-2 bg-gradient-to-r from-sky-600 to-indigo-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
        Send Message
      </button>
    </form>

    {/* ========= CONTACT DETAILS ========= */}
    <div className="flex flex-col justify-center space-y-4 md:border-l md:pl-6 border-slate-600/20">
      <h4 className="text-xl font-semibold">Contact Details</h4>

      <p><span className="font-medium text-sky-500">Phone:</span> +91 8001792723</p>
      <p><span className="font-medium text-sky-500">Email:</span> joyjit.sengupta1992@gmail.com</p>
      <p><span className="font-medium text-sky-500">Location:</span> Kolkata, India</p>
      <p><span className="font-medium text-sky-500">Follow me:</span> <a href={linkedin} className="hover:text-sky-400 transition">LinkedIn</a></p>
      <p><span className="font-medium text-sky-500">WhatsApp Me:</span> <a href="https://wa.me/918001792723" className="hover:text-sky-400 transition">+91 8001792723</a></p>
      <p><span className="font-medium text-sky-500">Email Me:</span> <a href="mailto:joyjit.sengupta1992@gmail.com" className="hover:text-sky-400 transition">joyjit.sengupta1992@gmail.com</a></p>
    </div>
  </div>
</section>


        <footer className="mt-16 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {name} — Web Consultant & Digital Transformation Developer
        </footer>
      </div>
    </div>
  );
}
