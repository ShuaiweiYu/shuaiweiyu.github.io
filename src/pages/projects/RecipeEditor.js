import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";

function MarkdownComponent() {
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        fetch("/readme/recipe-editor_en.md")
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text))
            .catch((error) => console.error("Error loading markdown file:", error));
    }, []);


    return (
        <section style={{ padding: "0 20px" }}>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </section>
    );
}

export default MarkdownComponent;
