import { useLanguage } from "../context/LanguageContext";
import { Github, ExternalLink, Shield, User } from "lucide-react";

const projectData = {
    en: {
        name: "Perfume-store",
        description: "A full-stack e-commerce platform for perfume sales with authentication, shopping cart, order management, admin CRUD operations, and payment integration.",
        features: [
            "User authentication and authorization",
            "Shopping cart functionality",
            "Order management system",
            "Admin dashboard with CRUD operations",
            "VNPAY Payment integration",
            "Responsive design"
        ],
        tags: ["React", "Node.js", "MySQL", "Express", "JWT", "REST API"],
        githubUrl: "https://github.com/duclong27/perfume-store",
        demoAdminUrl: "https://perfume-store-lac.vercel.app",
        demoUserUrl: "https://perfume-store-1.vercel.app"
    },
    vi: {
        name: "Perfume-store",
        description: "Nền tảng thương mại điện tử full-stack cho bán nước hoa với xác thực người dùng, giỏ hàng, quản lý đơn hàng, CRUD admin và tích hợp thanh toán.",
        features: [
            "Xác thực và phân quyền người dùng",
            "Chức năng giỏ hàng",
            "Hệ thống quản lý đơn hàng",
            "Dashboard admin với CRUD",
            "Tích hợp thanh toán VNPAY",
            "Thiết kế responsive"
        ],
        tags: ["React", "Node.js", "MySQL", "Express", "JWT", "REST API"],
        githubUrl: "https://github.com/duclong27/perfume-store",
        demoAdminUrl: "https://perfume-store-lac.vercel.app",
        demoUserUrl: "https://perfume-store-1.vercel.app"
    }
};

const headerByLang = {
    en: {
        title: "Projects",
        subtitle: "A showcase of my work and projects.",
    },
    vi: {
        title: "Dự án",
        subtitle: "Giới thiệu về các dự án của tôi.",
    },
};

export default function Projects() {
    const { lang } = useLanguage();
    const t = headerByLang[lang];
    const project = projectData[lang];

    return (
        <section className="projects-page container">
            <div className="projects__header">
                <h1 className="projects__title">{t.title}</h1>
                <p className="projects__subtitle">{t.subtitle}</p>
            </div>

            <div className="projects__content">
                <article className="projects__card">
                    <div className="projects__card-header">
                        <h2 className="projects__card-title">{project.name}</h2>
                        <div className="projects__tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="projects__tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="projects__card-desc">{project.description}</p>

                    <div className="projects__features">
                        <h3 className="projects__features-title">
                            {lang === "vi" ? "Tính năng chính:" : "Key Features:"}
                        </h3>
                        <ul className="projects__features-list">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="projects__feature-item">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="projects__actions">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__btn projects__btn--github"
                        >
                            <Github size={20} />
                            <span>{lang === "vi" ? "Xem trên GitHub" : "View on GitHub"}</span>
                        </a>
                        <a
                            href={project.demoAdminUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__btn projects__btn--admin"
                        >
                            <Shield size={20} />
                            <span>{lang === "vi" ? "Demo Admin" : "Demo Admin"}</span>
                        </a>
                        <a
                            href={project.demoUserUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__btn projects__btn--user"
                        >
                            <User size={20} />
                            <span>{lang === "vi" ? "Demo Người dùng" : "Demo User"}</span>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}
