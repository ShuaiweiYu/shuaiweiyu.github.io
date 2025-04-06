import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function MarkdownComponent() {
    const { i18n } = useTranslation();
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const lang = i18n.language;
        let langSuffix = "en";

        if (lang.startsWith("de")) langSuffix = "de";
        else if (lang.startsWith("zh")) langSuffix = "cn";

        //todo: replace this
        const filePath = `/readme/collaboration-module_${langSuffix}.md`;

        fetch(filePath)
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text))
            .catch((error) => {
                console.error("Error loading markdown file:", error);
                setMarkdownContent("⚠️ Failed to load content.");
            });
    }, [i18n.language]);

    return (
        <section style={{ padding: "0 20px" }}>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </section>
    );
}

export default MarkdownComponent;
