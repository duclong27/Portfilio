import { createContext, useContext, useState, useMemo } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("en");

    const toggleLanguage = () => {
        setLang((prev) => (prev === "vi" ? "en" : "vi"));
    };

    const value = useMemo(
        () => ({
            lang,
            toggleLanguage,
        }),
        [lang],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return ctx;
}


