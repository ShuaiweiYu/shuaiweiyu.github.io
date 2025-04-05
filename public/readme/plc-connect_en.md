# LEGO PLC Connect Project

The PLC Connect project is part of LEGO’s internal Trident greenfield initiative. This project aims to build a nearly fully automated, future-ready digital factory through cutting-edge digital solutions.

### Project Background

The Trident project was initiated due to the continuous growth of LEGO toy sales in the U.S. market. The existing factory in Mexico could no longer meet the growing shipping demands. To tackle this challenge, LEGO decided to build a new factory in the U.S. to better serve the local market.

At the same time, the company saw this as an opportunity to construct a highly automated smart factory. By leveraging automation technologies, LEGO aims to enhance production efficiency, reduce costs, fulfill corporate social responsibilities, and achieve its goal of carbon neutrality and sustainable development.

### Necessity of the PLC Connect Project

Within the Trident project, PLC Connect serves as a crucial link between digital control systems and physical production equipment. Its goal is to establish a reliable interface that allows industrial control devices (such as Programmable Logic Controllers, PLCs) to communicate seamlessly with digital systems.

This system is essential for production line automation. It not only enables real-time control of robotic equipment, but also provides an intuitive graphical interface for manual intervention when necessary—enhancing both operational flexibility and safety.

# Development Tasks

The main objectives of the PLC Connect project include:

- Building a REST API to control robots via PLCs
- Developing a visual interface for manual robot control
- Ensuring real-time communication between frontend, backend, and production hardware
- Integrating with GitHub CI/CD pipelines for rapid deployment and updates
- Enhancing system security to prevent unauthorized access and misuse

# Development Process

The project utilizes the following tech stack:

- **Frontend**: JavaScript, Razor
- **Backend**: C#, .NET Framework
- **Database**: MySQL
- **CI/CD**: GitHub Actions

Using an agile development methodology, the project progressed in bi-weekly sprints with regular feedback from the production floor. In the early stages, a dedicated communication protocol was defined for stable and low-latency interaction with PLCs.

On the backend, a REST API was implemented to abstract and forward various robotic control commands. The API includes request validation, command sequencing, and execution feedback to ensure secure and orderly logic.

The frontend is a web-based application enabling production operators to control one or more robots via a graphical interface.

# Project Outcomes

After several development iterations, the PLC Connect system has been successfully integrated into the production line. The system supports both automated control processes and manual adjustments when necessary, ensuring production safety and efficiency.

The graphical interface has received positive feedback from operators, who appreciate its simplicity and clarity. Training costs have been significantly reduced. Continuous deployment via GitHub CI/CD allows for rapid iteration and ongoing optimization of functionality and performance.
