# LEGO Recipe Editor Project

The Recipe Editor project is part of LEGO's internal Trident greenfield initiative. The goal of this project is to create a nearly fully automated, future-oriented digital manufacturing plant.

### Project Background

The Trident project originated from the continuous growth in sales of LEGO toys in the U.S. market. The existing factory in Mexico could no longer meet the expanding shipping demands. To address this challenge, LEGO decided to build a new factory in the U.S. to better serve the local market.

At the same time, the company aims to take this opportunity to build a highly automated smart factory. By leveraging automation technology, the goal is to improve production efficiency, reduce costs, and fulfill corporate social responsibilities, including achieving carbon neutrality and sustainable development goals.

### Necessity of the Recipe Editor Project

Within the Trident project, the Recipe Editor is an indispensable core component. Its primary goal is to enable robotic arms to automatically place and arrange LEGO toy packaging bags.

Since the packaging bags inside LEGO toy boxes often have complex nesting relationships (e.g., larger bags may contain smaller ones), the order and method of packaging cannot be arbitrary. Instead, they must follow specific logic and arrangement rules.

The Recipe Editor project addresses this challenge by ensuring that robotic arms can place various packaging bags into toy boxes in a pre-defined order and structure, thus improving consistency and overall packaging quality.

# Development Tasks

The main goals of the Recipe Editor project are as follows:

- Designers can retrieve toy packaging information by querying toy IDs.
    - Packaging information includes types, quantities, and sizes of packaging bags.
    - It also indicates whether the toy contains irregular parts (large pieces that cannot fit into packaging bags).
- Designers can customize the placement order to generate layout diagrams.
- Designers need to publish layout diagrams to the production line.
- Designers should be able to save layout diagrams for later review and editing.

# Development Process

The project uses the following technology stack:

- Frontend: React
- Backend: .NET Framework
- Database: MySQL
- Server: AWS

The project adopted Agile development, dividing the work into multiple two-week sprints. Each sprint had clear goals and tasks to ensure smooth progress. The development started with the design of the backend database schema. Each table included primary keys, creation timestamps, and creator information. Layout diagrams were encrypted in Base64 format before being stored in the database.

The backend, built with the .NET Framework, focused primarily on implementing CRUD operations. Microsoft’s authentication system was used for identity verification and access control.

The frontend, built with React, focused on user interaction and display. It consists of three main modules: Layout Designer, Layout Overview, and Packaging Info Table.

- **Layout Designer**: Enables designers to customize the arrangement and structure of the layout diagram. Designers can drag and drop different types of packaging bags into the layout, adjusting their positions and sizes. The final layout can be saved, exported, or published to the production line.
- **Layout Overview**: Displays all previously created layout diagrams. Designers can view, filter, edit, and delete diagrams.
- **Packaging Info Table**: Allows querying of packaging information using toy IDs. Designers can view details and check whether the toy contains irregular parts.

# Project Outcomes

After three months of development, the project has been preliminarily launched and well-received by designers. Based on feedback, several rounds of iteration and optimization were completed. The project significantly improved the efficiency of designers and reduced human error, providing strong support for LEGO's production line.
