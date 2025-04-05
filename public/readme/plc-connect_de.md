# LEGO PLC Connect Projekt

Das PLC Connect Projekt ist Teil des internen Trident-Greenfield-Projekts von LEGO. Ziel dieses Projekts ist es, durch digitale Lösungen eine nahezu vollständig automatisierte, zukunftsorientierte Produktionsfabrik zu schaffen.

### Projekt-Hintergrund

Das Trident-Projekt wurde aufgrund des kontinuierlichen Wachstums der LEGO-Spielzeugverkäufe auf dem US-Markt ins Leben gerufen. Die bestehende Fabrik in Mexiko konnte die steigenden Versandanforderungen nicht mehr erfüllen. Um dieser Herausforderung zu begegnen, beschloss LEGO, eine neue Fabrik in den USA zu errichten, um den lokalen Markt besser bedienen zu können.

Gleichzeitig sah das Unternehmen dies als Gelegenheit, eine hochautomatisierte Smart Factory zu errichten. Durch den Einsatz von Automatisierungstechnologien sollen die Produktionseffizienz gesteigert, Kosten gesenkt, die soziale Verantwortung wahrgenommen und das Ziel der CO2-Neutralität und nachhaltigen Entwicklung erreicht werden.

### Notwendigkeit des PLC Connect Projekts

Im Rahmen des Trident-Projekts stellt PLC Connect eine entscheidende Verbindung zwischen digitalen Steuerungssystemen und der physischen Produktion dar. Ziel ist es, eine zuverlässige Schnittstelle zu schaffen, über die industrielle Steuergeräte (z. B. SPS) nahtlos mit digitalen Systemen kommunizieren können.

Dieses System ist für die Automatisierung der Produktionslinie unerlässlich. Es ermöglicht nicht nur die Echtzeitsteuerung von Robotern und Geräten, sondern bietet auch eine intuitive grafische Benutzeroberfläche für manuelle Eingriffe, um Flexibilität und Sicherheit im Betrieb zu erhöhen.

# Entwicklungsaufgaben

Die Hauptziele des PLC Connect Projekts umfassen:

- Aufbau einer REST API zur Steuerung von Robotern über SPS
- Entwicklung einer grafischen Oberfläche zur manuellen Steuerung von Robotern
- Sicherstellung der Echtzeitkommunikation zwischen Frontend, Backend und Produktionshardware
- Integration in GitHub CI/CD-Pipelines zur schnellen Bereitstellung und Aktualisierung
- Erhöhung der Systemsicherheit zur Vermeidung von unbefugtem Zugriff und Fehlbedienung

# Entwicklungsprozess

Das Projekt verwendet folgenden Technologie-Stack:

- **Frontend**: JavaScript, Razor
- **Backend**: C#, .NET Framework
- **Datenbank**: MySQL
- **CI/CD**: GitHub Actions

Nach agiler Entwicklungsmethodik wurde das Projekt in zweiwöchigen Iterationen mit regelmäßigem Feedback von der Produktion umgesetzt. In der frühen Phase wurde ein dediziertes Kommunikationsprotokoll für die stabile und latenzarme Kommunikation mit den SPS entwickelt.

Im Backend wurde eine REST API implementiert, die Robotersteuerbefehle abstrahiert und weiterleitet. Diese API führt Anfragenvalidierung, Befehlsreihenfolge und Rückmeldungen aus, um eine sichere und strukturierte Logik zu gewährleisten.

Das Frontend ist eine Webanwendung, mit der Produktionsmitarbeiter über eine grafische Oberfläche einen oder mehrere Roboter direkt steuern können.

# Projektergebnisse

Nach mehreren Entwicklungszyklen wurde das PLC Connect System erfolgreich in die Produktionslinie integriert. Das System unterstützt sowohl automatisierte Steuerungsprozesse als auch manuelle Anpassungen, was die Sicherheit und Effizienz der Produktion gewährleistet.

Die grafische Bedienoberfläche erhielt positives Feedback von den Bedienern, insbesondere wegen ihrer einfachen und klaren Steuerungsmöglichkeiten. Die Schulungskosten konnten deutlich gesenkt werden. Durch die Integration in GitHub CI/CD ist eine schnelle Iteration und kontinuierliche Optimierung des Systems gewährleistet.
