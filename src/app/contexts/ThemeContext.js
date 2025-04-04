"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themes, setThemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/themes")
            .then((res) => {
                if (!res.ok) throw new Error("Nätverksfel: Kunde inte hämta teman");
                return res.json();
            })
            .then((data) => {
                setThemes(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching themes: ", err);
                setError(err);
                setLoading(false);
            });
    }, []);

    const updateThemeWordStatus = (themeUrl, wordIndex, newStatus) => {
        console.log("Before update:", JSON.stringify(themes));

        setThemes(prevThemes => prevThemes.map((theme) => {
            if (theme.themeUrl === themeUrl) {
                const updatedWords = theme.words.map((word, index) => 
                    index === wordIndex ? { ...word, status: newStatus} : word
                );
                return { ...theme, words: updatedWords }
            }
            return theme;
        }));
    };

return (
    <ThemeContext.Provider
        value={{themes, loading, error, updateThemeWordStatus}}
    >
        {children}
    </ThemeContext.Provider>
    );
}