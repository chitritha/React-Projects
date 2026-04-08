import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="resume">
      <header className="candidate-details">
        <h2>Chitritha Nalluru</h2>
        <h3>+1 (508) 735-8680</h3>
        <h3>https://www.linkedin.com/in/nalluru-chitritha/</h3>
      </header>
      <section className="summary">
        <h3>Professional Summary</h3>
        <ul>
          <li>6+ years of experience (8+ years hands-on) in developing scalable front-end applications using React.js, React Native, Redux, Context API, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, and AG Grid.</li>
          <li>Strong expertise in React Hooks, functional components, and component-driven architecture, building reusable UI components aligned with enterprise design systems (e.g., Metronome, similar to Octagon).</li>
          <li>Experienced in developing and maintaining large-scale React applications, leveraging DOM manipulation and JavaScript object model principles.</li>
          <li>Hands-on experience with modern front-end tools including Webpack, Babel, and NPM, and debugging using Chrome DevTools and React Developer Tools.</li>
          <li>Proven ability to translate UI/UX wireframes into responsive, high-quality code, ensuring performance, accessibility, and maintainability.</li>
          <li>Experienced in unit and integration testing using Jest and Mocha, working in Agile environments to deliver clean, efficient, and maintainable code.</li>
        </ul>
      </section>
      <section className="technical-skills">
        <h3>Technical Skills</h3>
        <table>
          <tr>
            <th>Web Technologies</th>
            <td>React.js, React Native, Redux, Redux-Saga, Context API, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, AG Grid</td>
          </tr>
          <tr>
            <th>React & UI Engineering</th>
            <td>Functional Components, React Hooks (useState, useEffect, useMemo, useCallback), Component-Based Architecture, Reusable UI Components, Design Systems (Metronome, similar to Octagon Component Library), SPA Development, Responsive Design, Accessibility (WCAG)</td>
          </tr>
          <tr>
            <th>State Management & Data Handling</th>
            <td>Redux, Redux-Saga, Context API, RESTful APIs, GraphQL, Axios, JSON</td>
          </tr>
          <tr>
            <th>Build & Development Tools</th>
            <td>Webpack, Babel, NPM, Gulp, Grunt</td>
          </tr>
          <tr>
            <th>Testing & QA</th>
            <td>Jest, Mocha, React Testing Library, Cypress (Unit, Integration, and Component Testing), Jasmine, Karma</td>
          </tr>
          <tr>
            <th>Debugging & Performance Tools</th>
            <td>Chrome DevTools, React Developer Tools, LogRocket, Lighthouse, Kibana, GTmetrix, PageSpeed Insights</td>
          </tr>
          <tr>
            <th>Backend & Integration</th>
            <td>Node.js, Express.js, MongoDB, MySQL</td>
          </tr>
          <tr>
            <th>Version Control & CI/CD</th>
            <td>Git (GitHub), Jenkins, Docker</td>
          </tr>
          <tr>
            <th>Design & UX Tools</th>
            <td>Sketch, InVision, UXPin, Adobe Photoshop, Adobe Illustrator</td>
          </tr>
        </table>
      </section>
      <section className="experience">
        <h3>Professional Experience</h3>
        <div className="ally-financial">
          <h3>Ally Financial, NC (Remote)</h3>
          <h4>Senior React Native Developer </h4>
          <p><strong>Duration:</strong> August 2024 - Present</p>
          <ul>
            <li>Led modernization of Ally Credit Card platform — converting legacy .NET code into modular, reusable React components for the new credit card web and mobile applications.</li>
            <li>Designed and developed reusable, high-performance UI components and front-end libraries for enterprise-scale applications using React.js, React Native, TypeScript, Tailwind CSS, and AG Grid for complex data tables ensuring scalability, maintainability, and accessibility.</li>
            <li>Implemented Redux, Redux-Saga, and Axios for global state management and async API handling; leveraged Redux-Promise and middleware for efficient data flow.</li>
            <li>Integrated Metronome (similar to Octagon component library) and collaborated on its cross-team enhancements to maintain UI consistency.</li>
            <li>Designed RESTful and GraphQL APIs with OpenAPI specifications, collaborating closely with backend teams for schema definition and performance optimization.</li>
            <li>Enhanced performance using lazy loading, optimistic UI updates, caching strategies, and minimized API overhead — improving load times by 30%.</li>
            <li>Developed advanced UI flows using Fabric.js, Three.js, and backend-driven orchestration logic to render dynamic pages based on eligibility and user interaction.</li>
            <li>Migrated complex UI logic from class components to functional components using React Hooks (useState, useEffect, useMemo, useCallback) to improve performance and maintainability.</li>
            <li>Integrated Adobe Analytics tags to track user interactions (e.g., card selection, application funnel events) for data-driven marketing insights.</li>
            <li>Enabled deep linking across web and mobile apps for personalized card offers and campaign tracking.</li>
            <li>Implemented WCAG-compliant UI for accessibility, ensuring screen reader and keyboard navigation support.</li>
            <li>Performed debugging and performance tuning using Chrome DevTools and React Developer Tools.</li>
            <li>Wrote unit and integration tests using Jest and Mocha, ensuring robust application quality.</li>
            <li>Collaborated in Agile teams, contributing to sprint planning, design discussions, and feature delivery.</li>
            <li>Mentored junior developers on React best practices and performance optimization.</li>
          </ul>
        </div>
        <div className="baker-hughes">
          <h3>Baker Hughes, Houston, TX(Remote)</h3>
          <h4>React Native Developer</h4>
          <p><strong>Duration:</strong> June 2021 – July 2022</p>
          <ul>
            <li>Developed a field operations mobile application using React Native, enabling engineers to monitor equipment status, log maintenance activities, and access real-time operational data.</li> 
            <li>Designed and implemented reusable, cross-platform UI components using React Native and Redux, improving development efficiency and UI consistency across iOS and Android platforms.</li> 
            <li>Built dynamic, data-driven screens by integrating REST and GraphQL APIs, ensuring seamless data synchronization between mobile clients and backend systems.</li> 
            <li>Implemented offline-first capabilities using local storage and caching strategies, allowing field engineers to capture and sync data in low-connectivity environments.</li> 
            <li>Optimized application performance using lazy loading, efficient state management, and API request optimization, resulting in faster load times and improved responsiveness.</li> 
            <li>Developed form-heavy workflows with validation logic for inspection and reporting modules, improving data accuracy and user experience.</li> 
            <li>Collaborated with UX designers to translate wireframes into responsive, intuitive mobile interfaces, ensuring usability in field conditions.</li> 
            <li>Conducted debugging and performance analysis using Chrome DevTools, React Native Debugger, and Lighthouse, resolving bottlenecks and UI issues.</li> 
            <li>Wrote unit and integration tests using Jest, improving code reliability and reducing regression defects.</li> 
            <li>Participated in Agile ceremonies, including sprint planning and retrospectives, and contributed to code reviews and best practice enforcement.</li> 
            <li>Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on everyday basis.</li> 
            <li>Development of front-end application using React, Dependency injection, Rx, and Http</li> 
            <li>modules with Node JS server for future evolutions.</li> 
            <li>Built Confidential tool using React, RXJS, and NGRX platform. Developed components as an independent module for reusability across the application</li> 
            <li>Used Mongo DB extensively to visually explore the data and interact with data with full CRUD functionality and Mongoose to integrate Mongo DB in the React project.</li> 
            <li>Used CSS preprocessor called SASS and LESS for styling the React Components and used media queries and mobile UI development to customize the View.</li> 
            <li>Responsible for developing UI pages using React, HTML5, CSS3, JavaScript, and JSON</li> 
          </ul>
        </div>
        <div className="talentsprint">
          <h3>Talentsprint Pvt. Ltd.</h3>
          <h4>UI React Developer</h4>
          <p><strong>Duration:</strong> Sep 2019 – June 2021</p>
          <ul>
            <li>Developed a learning management platform (LMS) using React.js and Redux, enabling users to access courses, track progress, and interact with training modules.</li>
            <li>Built scalable SPA architecture with reusable components, improving maintainability and reducing development time for new features.</li>
            <li>Implemented role-based dashboards for students, instructors, and administrators, dynamically rendering UI components based on user permissions.</li>
            <li>Integrated RESTful APIs to fetch course content, user data, and analytics, ensuring real-time updates and smooth user interactions.</li>
            <li>Translated UI/UX designs into responsive, pixel-perfect interfaces using HTML5, CSS3, and modern JavaScript practices.</li>
            <li>Developed interactive data visualizations and progress tracking components, enhancing user engagement and learning insights.</li>
            <li>Improved application performance using code splitting, lazy loading, and optimized rendering techniques.</li>
            <li>Implemented form validation and error handling mechanisms, ensuring robust user input processing.</li>
            <li>Wrote unit tests using Jest and Jasmine, improving code quality and reducing production issues.</li>
            <li>Collaborated closely with backend teams and designers to deliver end-to-end feature implementations in Agile sprints.</li>
            <li>Developed various screens for the front end using React JS and used various predefined components from NPM (Node Package Manager) and Redux libraries.</li>
          </ul>
        </div>
        <div className="trianz-holdings">
          <h3>Trianz Holdings Pvt Ltd, Hyderabad, India</h3>
          <h4>Frontend Angular Developer</h4>
          <p><strong>Duration:</strong> Aug 2018 – Aug 2019 </p>
          <ul>
            <li>Developed a financial analytics dashboard using React.js and Redux, providing real-time insights into business metrics and transaction data.</li> 
            <li>Built modular and reusable UI components, enabling rapid feature development and consistent user experience across the application. </li>
            <li>Integrated backend APIs to display dynamic data visualizations and reports, improving decision-making capabilities for stakeholders. </li>
            <li>Configured Webpack and Babel for efficient bundling, transpilation, and performance optimization of front-end assets. </li>
            <li>Implemented state management using Redux, ensuring predictable data flow across complex UI components. </li>
            <li>Designed responsive layouts using HTML5 and CSS3, ensuring compatibility across multiple browsers and devices. </li>
            <li>Collaborated with cross-functional teams to translate business requirements into technical solutions and UI implementations. </li>
            <li>Participated in debugging and issue resolution using Chrome DevTools, improving application stability and performance.</li>
            <li>Configured and used node Redis as a message queue to send notifications.</li>
            <li>Developed a script to create a docker image and deploy the image to specific environments directly from Gitlab</li>
            <li>Automated the build process for production, using task runners or a script.</li>
          </ul>
        </div>
      </section>
      <section className="education">
        <h3>Education</h3>
        <h4>Clark University</h4>
        <h4>Dec 2024</h4>
        <p>Masters of Science in Data Analytics</p>
        <h4>BVRIT College of Engineering</h4>
        <h4>Aug 2015 - May 2019</h4>
        <p>Bachelor of Engineering in Electronic and Communication Engineering</p>
      </section>
    </div>
  );
}


export default App;
