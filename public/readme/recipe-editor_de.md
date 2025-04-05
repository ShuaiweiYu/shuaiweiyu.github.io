# LEGO Recipe Editor Projekt

Das Recipe Editor Projekt ist Teil des internen Trident-Greenfield-Projekts von LEGO. Ziel dieses Projekts ist es, eine nahezu vollständig automatisierte, zukunftsorientierte digitale Produktionsanlage zu schaffen.

### Projekt-Hintergrund

Das Trident-Projekt entstand aus dem kontinuierlichen Wachstum der LEGO-Verkäufe auf dem US-amerikanischen Markt. Die bestehende Fabrik in Mexiko konnte die steigende Nachfrage nicht mehr decken. Um dieser Herausforderung zu begegnen, beschloss LEGO, eine neue Fabrik in den USA zu errichten, um den lokalen Markt besser bedienen zu können.

Gleichzeitig möchte das Unternehmen diese Gelegenheit nutzen, um eine hochautomatisierte Smart Factory aufzubauen. Mithilfe von Automatisierungstechnologien sollen die Produktionseffizienz gesteigert, Kosten gesenkt und die Unternehmensverantwortung wahrgenommen werden, einschließlich der Zielsetzung der Klimaneutralität und nachhaltigen Entwicklung.

### Notwendigkeit des Recipe Editor Projekts

Innerhalb des Trident-Projekts ist der Recipe Editor ein unverzichtbarer Kernbestandteil. Sein Hauptziel ist es, Roboterarme in die Lage zu versetzen, LEGO-Verpackungsbeutel automatisch zu platzieren und anzuordnen.

Da die Verpackungsbeutel in LEGO-Spielzeugboxen oft komplex verschachtelt sind (z.B. enthalten größere Beutel kleinere Beutel), darf die Reihenfolge und Methode des Verpackens nicht willkürlich sein. Stattdessen muss sie einer spezifischen Logik und Struktur folgen.

Das Recipe Editor Projekt wurde entwickelt, um diese Herausforderung zu bewältigen und sicherzustellen, dass Roboterarme die verschiedenen Beutel in einer vorgegebenen Reihenfolge und Struktur in die Spielzeugboxen legen – für mehr Konsistenz und eine höhere Qualität der Verpackung.

# Entwicklungsaufgaben

Die Hauptziele des Recipe Editor Projekts sind:

- Designer können Verpackungsinformationen durch Eingabe der Spielzeugnummer abrufen.
    - Verpackungsinformationen umfassen Art, Menge und Größe der Beutel.
    - Zudem wird angezeigt, ob das Spielzeug Sonderteile (große Teile, die nicht in Beutel passen) enthält.
- Designer können die Anordnung individuell anpassen und ein Layout-Diagramm erstellen.
- Designer müssen Layout-Diagramme zur Produktionslinie veröffentlichen können.
- Designer sollen Layout-Diagramme speichern, später einsehen und bearbeiten können.

# Entwicklungsprozess

Für die Umsetzung wurde folgender Technologie-Stack verwendet:

- Frontend: React
- Backend: .NET Framework
- Datenbank: MySQL
- Server: AWS

Das Projekt wurde nach der agilen Methode entwickelt und in zweiwöchige Iterationen unterteilt. Jede Iteration hatte klare Ziele und Aufgaben, um den Fortschritt sicherzustellen. Zu Beginn wurde das Datenbankschema des Backends entworfen. Jede Tabelle enthielt Primärschlüssel, Erstellungszeitpunkt und Erstellerinformationen. Die Layout-Diagramme wurden in Base64 verschlüsselt und in der Datenbank gespeichert.

Das Backend wurde mit dem .NET Framework umgesetzt und konzentrierte sich hauptsächlich auf CRUD-Operationen. Für Authentifizierung und Rechteverwaltung wurde das Microsoft-Authentifizierungssystem verwendet.

Das Frontend wurde mit React entwickelt und bietet eine interaktive Benutzeroberfläche. Es besteht aus drei Hauptmodulen: Layout-Designer, Layout-Übersicht und Verpackungs-Informations-Tabelle.

- **Layout-Designer**: Ermöglicht es Designern, die Struktur und Reihenfolge der Layout-Diagramme individuell zu gestalten. Durch Drag & Drop können Beutel platziert und in Position sowie Größe angepasst werden. Das Layout kann gespeichert, exportiert oder zur Produktionslinie veröffentlicht werden.
- **Layout-Übersicht**: Zeigt alle zuvor erstellten Layout-Diagramme. Designer können diese anzeigen, filtern, bearbeiten und löschen.
- **Verpackungs-Informations-Tabelle**: Ermöglicht die Abfrage von Verpackungsinformationen über die Spielzeugnummer. Designer können Details einsehen und prüfen, ob Sonderteile vorhanden sind.

# Projektergebnisse

Nach drei Monaten Entwicklungszeit wurde das Projekt vorläufig eingeführt und von den Designern gut angenommen. Basierend auf ihrem Feedback wurden mehrere Iterationen und Optimierungen vorgenommen. Das Projekt hat die Effizienz der Designer erheblich gesteigert, menschliche Fehler reduziert und bietet starke Unterstützung für die Produktionslinie von LEGO.
