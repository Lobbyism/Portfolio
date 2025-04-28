import styles from "./About.module.css";
import CourseCard from "../components/CourseCard";
function About() {
  const courses = [
    {
      title: "Database Fundamentals",
      code: "IFT187",
      description:
        "Concepts and architecture of databases. Creating, querying, and updating a relational database using the SQL language. Complex queries. Integrity constraints. Entity-relationship modeling. Translating an entity-relationship model into a relational model. Functional dependencies, multivalued dependencies, join dependencies. Normalization: 1NF to 5NF and BCNF.",
    },
    {
      title: "Computing and Society",
      code: "IFT203",
      description:
        "Definition of ethics in information technology (IT). Laws, regulations, fraud, and crime related to IT usage. References to business law, the Criminal Code, and provisions concerning intellectual property, privacy protection, and the Internet. Standards, practices, and professional organizations. Rules and techniques for documentation in computer science. Impact of IT on society. Overview of the history of computing, from antiquity to the present day. Future of computing development. Technological watch. Areas of contemporary research in computer science.",
    },
    {
      title: "System Programming",
      code: "IFT209",
      description:
        "Introduction to computer architecture. Number systems. Addressing modes. Machine instruction formats. Data representation. Program debugging techniques. Integer arithmetic. Floating-point arithmetic. Bit manipulation. Subprograms. Application to a contemporary architecture. Input-output. Interrupt handling.",
    },
    {
      title: "Interfaces and Multimedia",
      code: "IFT215",
      description:
        "Software ergonomics and usability. Basic principles of interface design: task analysis, human factors, presentation, and interaction. Concepts and functionalities of graphical interfaces. Tools for developing graphical interfaces. Specialized libraries. Use of multimedia in interfaces. Compression standards.",
    },
    {
      title: "Object-Oriented Design Methods",
      code: "IFT232",
      description:
        "Algebraic abstract types. Design criteria. Encapsulation, inheritance, and polymorphism. Class composition criteria, design patterns, and application frameworks. Design documentation using UML notation. Design review techniques. Unit testing. Component-based programming. Measuring design quality. Introduction to agile programming.",
    },
    {
      title: "Operation of Relational and Object-Oriented Databases",
      code: "IFT287",
      description:
        "Client-server operation of a relational database and an object-oriented database. Development of a simple information system. Transaction processing. Concurrent data access and preservation of data integrity. Development of a simple web application with servlets and JSP. Electronic data exchange using XML. Use of the Java language as a programming environment.",
    },
    {
      title: "Introduction to Formal Languages",
      code: "IFT313",
      description:
        "Regular languages and regular expressions. Finite automata and lexical analyzers. Context-free languages and grammars. Syntax trees and ambiguous grammars. Pushdown automata, top-down parsers, and bottom-up parsers. Characteristic machines. Classes of context-free grammars: LL, SLR, LALR, and LR. Applications to programming languages. Generators for lexical and syntax analyzers.",
    },
    {
      title: "Operating Systems",
      code: "IFT320",
      description:
        "Review and deeper study of input-output operations. Management of secondary storage. File systems. Management of processes and threads. Management of physical and logical memory. Memory protection. Virtual memory. Concepts of deadlock and basics of synchronization. Elements of protection and security. Case studies.",
    },
    {
      title: "Data Structures",
      code: "IFT339",
      description:
        "Axiomatization of classical data structures (stacks, lists, sets, trees). Identification of underlying data structures for a given problem. Introduction to complexity theory. Comparative study of algorithms (time and space complexity). Selection of implementations and representations of structures. Generalized lists and applications. Balanced trees (AVL, 2-3, B-trees, etc.). Hashing.",
    },
    {
      title: "Functional Programming",
      code: "IFT359",
      description:
        "Quality, modularity, functional design. Recursive and iterative processes. Atomic objects. Lists. Higher-order abstraction. Currying. Closures. Tail calls. Execution model of a functional program. Applications of functional programming (immutable data structures, stream programming, pattern matching, etc.). Emphasis on solution quality.",
    },
    {
      title: "Algorithms and Data Structures",
      code: "IFT436",
      description:
        "Mathematical tools for algorithmic complexity analysis: combinatorial analysis, geometric series, and solving recurrence relations. Asymptotic notations. Use of assertions. Design strategies: brute force, greedy, inductive, divide and conquer, dynamic programming, state-space search. Illustration of concepts with various algorithms.",
    },
    {
      title: "Telematics",
      code: "IFT585",
      description:
        "Network, architecture, and protocol concepts. Types of networks. ISO OSI reference model. Data transmission and encoding, multiplexing, and error detection. Flow and error control. Congestion management. Switching and internetwork routing: routers, bridges, and gateways. Internet protocols: IP, TCP, UDP. Study of the TCP/IP model and its evolution. Network evaluation and configuration.",
    },
    {
      title: "Security and Cryptography",
      code: "IFT606",
      description:
        "Basic concepts of computer security. Confidentiality. Authentication. Integrity. Access control. Cryptography. Electronic signatures. Certificates. Key management. Attacks and countermeasures. Viruses. Architectures. Firewalls. Virtual private networks. Security policies. Methodologies, standards, and risk analysis.",
    },
    {
      title: "Artificial Intelligence",
      code: "IFT615",
      description:
        "Concepts of agents and environments. Heuristic (A*) and local search. Reasoning in two-player adversarial games. Constraint satisfaction. First-order logic. (Dynamic) Bayesian networks and Markov decision processes. Machine learning (perceptron, logistic regression, and artificial neural networks). Reinforcement learning. Other artificial intelligence topics not covered above.",
    },
    {
      title: "Concurrent Processes and Parallelism",
      code: "IFT630",
      description:
        "In-depth study of process and thread concepts. Centralized and distributed synchronization: issues, techniques, and common errors. Communication in centralized and distributed systems: challenges and implementation techniques. Architecture of communicating process systems (client/server, P2P, clusters, grids, etc.). Process coordination.",
    },
    {
      title: "Introduction to Development Techniques and Tools",
      code: "IGL201",
      description:
        "Source management and versioning strategies. Selection of a development environment: operating system, architecture, development tools. Virtualization and automation of work environments. Teamwork: cooperation, collaboration, and conflict resolution techniques. Software development approaches: traditional and agile. Tools and techniques for quality improvement: code review, static analysis tools, testing, and quality criteria.",
    },
    {
      title: "Computer Graphics and Video Games",
      code: "IMN401",
      description:
        "Creating a graphics software for gaming: rendering pipeline and graphics processors; three-dimensional vision parameters and camera; geometric transformations; meshes, polygons, and GPU-based modification; texture handling and anti-aliasing concepts; color space; various applications of textures; visibility; construction of hierarchical scenes; lighting and light manipulation; illumination models; shadows and multi-pass rendering; shaders and GPU programming; parametric curves.",
    },
    {
      title: "Applied Linear Algebra in Computer Science",
      code: "MAT199",
      description:
        "Matrices; determinants; systems of linear equations; vector spaces; linear dependence; linear independence; bases; vector subspaces; affine dependence; affine independence; affine subspaces; linear applications; affine transformations; polynomials; eigenvalues; eigenvectors; matrix diagonalization; analytic geometry; dot product; cross product; orthonormalization; orthogonal transformations; implementation of some of these applications using a scripting language such as Matlab. Applications of these concepts and techniques to management computing, computer graphics, and imaging.",
    },
    {
      title: "Applied Statistics",
      code: "STT418",
      description:
        "Elements of descriptive statistics. Fundamental concepts of probability. Basics of sampling. Point estimation. Overview of hypothesis testing. Common tests. Fitting data to distributions. Regression models and associated tests. Case studies drawn from business and economics.",
    },
    {
      title: "Integration and Research Project",
      code: "IFT697",
      description:
        "Project chosen based on the stated objectives and carried out under the supervision of a professor from the Department. If applicable, the project will require the student’s integration into one of the Department’s research laboratories. Project management; teamwork; performance analysis; debugging techniques; needs analysis; social impact; addressing issues based on the field of activity.",
    },
    {
      title: "Theory of Computation",
      code: "IFT503",
      description:
        "Deterministic and nondeterministic finite automata. Regular languages and regular expressions. Context-free grammars and pushdown automata. Turing machines. Decidability and computability. Computation with time and space bounds; P and NP; NP-complete problems; introduction to complexity theory.",
    },
    {
      title: "Computer Architecture and Organization",
      code: "IFT504",
      description:
        "Foundations of computer architecture and internal structure. Types of computers (RISC, CISC, etc.). Computer specifications. Hardwired and microcoded implementations. Central processing unit: pipelines, vector units, functional units. Memory hierarchies. Input/output systems. Parallel architectures. Performance evaluation. Fault tolerance. Number systems and codes. Boolean algebra applied to logic circuits. Analysis and synthesis of combinational circuits. Integrated circuits. Analysis and synthesis of sequential circuits.",
    },
    {
      title: "Compilation and Interpretation of Languages",
      code: "IFT580",
      description:
        "General organization of compilers and interpreters. Iterative and recursive interpreters. Attributed grammars. Attribute evaluation. Classes of attributed grammars. Semantic analysis: symbol management, type checking and inference, address allocation, data space organization, handling of control statements and function calls. Intermediate code and virtual machine. Code generation techniques. Introduction to code optimization. Construction of a compiler using compiler generators.",
    },
    {
      title: "Distributed and Multi-Agent Systems",
      code: "IFT605",
      description:
        "Architectures of distributed systems. Middleware. Remote method invocation. Naming services. Discovery services. Spontaneous networking. Deployment. Distributed information management. Distributed transactions. Reliability. Introduction to multi-agent systems. Mobile agents. Distributed artificial intelligence.",
    },
    {
      title: "Verification and Validation Techniques",
      code: "IGL502",
      description:
        "Review of predicate logic and temporal logics. Main classes of formal properties in system specifications. Transition systems. Büchi automata. Verification of LTL formulas. Verification of CTL formulas. Equivalence and abstraction. Partial order reduction. Property verification on timed automata. Probabilistic systems. Study of various verification tools.",
    },
    {
      title: "Real-Time Animation and Rendering",
      code: "IMN504",
      description:
        "Real-time and frame-by-frame animation. Keyframe animation. Shape interpolation. Parametric interpolation. Algorithmic animation. Body deformations. Forward and inverse kinematics. Dynamic simulations: direct and inverse. Shadow management, screen-space rendering techniques. Particle systems.",
    },
    {
      title: "Image Synthesis",
      code: "IMN529",
      description:
        "Image formation: light equation, light refraction and reflection, camera models, construction of the image plane. Visibility testing, lighting and texture models, Monte Carlo integration, sampling techniques, and global illumination. Ray tracing algorithm: scene hierarchies, light traversal, shapes, and intersection calculations.",
    },
  ];
  return (
    <>
      <div className={styles.aboutContainer}>
        <section className={styles.aboutIntro}>
          <h2>Hey there,</h2>
          <p>
            If you've stumbled across this page, there's a good chance it's
            because I submitted a job application to your company!
          </p>
          <p>
            My primary passion lies in game development — the very field that
            introduced me to programming over a decade ago — and I'm a computer
            science graduate with a broad range of interests.
          </p>
          <p>
            As shown by the various courses I've taken, my interests cover a
            wide spectrum, ranging from computer science fundamentals such as
            theory of computation and software verification, to more specialized
            topics like computer graphics.
          </p>
          <p>
            This website is still under construction, so expect changes and new
            sections to be added over time.
          </p>
        </section>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            code={course.code}
            description={course.description}
          />
        ))}
      </div>
      <footer className="footer">
        <p>© 2025 Lobbyism. All rights reserved.</p>
      </footer>
    </>
  );
}
export default About;
