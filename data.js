// data.js — public/demo data for Career OS Dashboard
// Edit course catalog, career-phase roadmaps, and portfolio here.
// All data below is generic / demo. Personal progress notes stripped.

const DEGREE_MIN_CU = 120;

const courses = [
  // Transfer — 12 CU
  {code:"D265", name:"Critical Thinking: Reason and Evidence", cu:3, cat:"Transfer", term:"Transfer", status:"not_started", assessment:"Transfer"},
  {code:"D386", name:"Hardware and Operating Systems Essentials", cu:3, cat:"Transfer", term:"Transfer", status:"not_started", assessment:"Transfer"},
  {code:"D370", name:"IT Leadership Foundations", cu:3, cat:"Transfer", term:"Transfer", status:"not_started", assessment:"Transfer"},
  {code:"D268", name:"Introduction to Communication: Connecting with Others", cu:3, cat:"Transfer", term:"Transfer", status:"not_started", assessment:"Transfer"},
  // Term 1 — 15 CU completed
  {code:"ORA1", name:"Orientation", cu:0, cat:"Gen Ed", term:"Term 1", status:"not_started", assessment:"PA"},
  {code:"C458", name:"Health, Fitness, and Wellness", cu:4, cat:"Gen Ed", term:"Term 1", status:"not_started", assessment:"OA"},
  {code:"C955", name:"Applied Probability and Statistics", cu:3, cat:"Quant", term:"Term 1", status:"not_started", assessment:"OA"},
  {code:"D491", name:"Introduction to Analytics", cu:2, cat:"Core", term:"Term 1", status:"not_started", assessment:"OA"},
  {code:"D315", name:"Network and Security - Foundations", cu:3, cat:"Core", term:"Term 1", status:"not_started", assessment:"OA"},
  {code:"D388", name:"Fundamentals of Spreadsheets and Data Presentations", cu:3, cat:"Core", term:"Term 1", status:"not_started", assessment:"OA"},
  // Term 2 — 9 CU completed
  {code:"D278", name:"Scripting and Programming - Foundations", cu:3, cat:"Core", term:"Term 2", status:"not_started", assessment:"OA"},
  {code:"C721", name:"Change Management", cu:3, cat:"Gen Ed", term:"Term 2", status:"not_started", assessment:"PA"},
  {code:"C957", name:"Applied Algebra", cu:3, cat:"Quant", term:"Term 2", status:"not_started", assessment:"OA"},
  // Term 3 — 18 CU enrolled
  {code:"D333", name:"Ethics in Technology", cu:3, cat:"Gen Ed", term:"Term 3", status:"not_started", assessment:"PA"},
  {code:"D276", name:"Web Development Foundations", cu:3, cat:"Core", term:"Term 3", status:"not_started", assessment:"PA"},
  {code:"D269", name:"Composition: Writing with a Strategy", cu:3, cat:"Gen Ed", term:"Term 3", status:"not_started", assessment:"PA",
    tasks:[{name:"Task 1 — Writing with a Strategy", status:"queued", notes:"Submission in progress"}]},
  {code:"D199", name:"Introduction to Physical and Human Geography", cu:3, cat:"Gen Ed", term:"Term 3", status:"not_started", assessment:"PA",
    tasks:[
      {name:"Task 1 — Analyzing Physical and Human Geography (case study selection)", status:"queued", notes:"Work-in-progress on selected case study"},
      {name:"Task 2 — Analyzing Climate Change (scenario + real-world analysis)", status:"queued", notes:"Work-in-progress on selected case study"}
    ]},
  {code:"D282", name:"Cloud Foundations", cu:3, cat:"Core", term:"Term 3", status:"not_started", assessment:"OA",
    cert:"AWS Certified Cloud Practitioner (CLF-C02)",
    topics:["AWS cloud concepts","Core services (EC2, S3, RDS)","Security and compliance","Networking","Storage","Compute","Analytics","Machine learning","Cost and billing","AWS Cloud Practitioner exam prep"]},
  {code:"C963", name:"American Politics and the US Constitution", cu:3, cat:"Gen Ed", term:"Term 3", status:"not_started", assessment:"PA",
    tasks:[
      {name:"Task 1 — Founding Ideologies", status:"queued"},
      {name:"Task 2 — Powers and Structures", status:"queued"},
      {name:"Task 3 — Civil Liberties and Civil Rights", status:"queued"}
    ]},
  // Term 4 — 19 CU
  {code:"D426", name:"Data Management - Foundations", cu:3, cat:"Core", term:"Term 4", status:"not_started", assessment:"OA",
    competencies:["Explains Database Attributes and SQL Commands","Determines SQL Queries for creation and manipulation of data","Defines Primary and Foreign Keys in data normalization"],
    oaDetails:{items:60, minutes:180, code:"LWO3"},
    preAssessment:{items:60, minutes:180, code:"PAI1"},
    platform:"ZyBooks",
    topics:["Conceptual, logical, and physical data models","Creating databases and tables in SQL-enabled DBMS","Normalizing databases","SQL commands and syntax","SQL queries for data creation and manipulation","Primary and foreign keys","Database attributes","Entity-relationship modeling"]},
  {code:"D427", name:"Data Management - Applications", cu:4, cat:"Core", term:"Term 4", status:"not_started", assessment:"OA",
    competencies:["Implements Databases and DBMS to meet organizational needs","Queries Tables and Views with SQL code","Creates DML statements (INSERT, UPDATE, DELETE)","Implements Joins and Aggregate Functions in SQL queries"],
    oaDetails:{items:25, minutes:180, code:"ZLO2"},
    preAssessment:{items:25, minutes:180, code:"PAJ6"},
    prerequisites:["D426 Data Management - Foundations"],
    topics:["MySQL exposure","Creating and modifying databases, tables, views","Foreign keys (FKs) and primary keys (PKs)","Indexes","Populating tables","Simple Select-From-Where (SFW) queries","Complex 3+ table join queries","Subqueries","SQL updates and deletes","Conceptual data modeling"]},
  {code:"C683", name:"Natural Science Lab", cu:2, cat:"Gen Ed", term:"Term 4", status:"not_started", assessment:"PA",
    competencies:["Academic Research — evaluate credibility and relevance of academic sources","Scientific Inquiry — execute the process of scientific inquiry through experimentation","Drawing Conclusions based on academic research and scientific inquiry"],
    paCode:"BRP1",
    tasks:[
      {name:"Task 1 — Natural science experiment and research paper", status:"queued", notes:"Design and carry out an experiment to investigate a hypothesis with quantitative data. Research the topic using academic sources and draw conclusions. Topic ideas in Biology, Physics, or Earth Science & Chemistry."}
    ]},
  {code:"D326", name:"Advanced Data Management", cu:3, cat:"Core", term:"Term 4", status:"not_started", assessment:"PA",
    competencies:["Writes complex SQL statements for data analysis and manipulation","Configures data extraction, transformation, and loading (ETL) tasks for automated data integration"],
    paCode:"CSN1",
    prerequisites:["D426 Data Management - Foundations"],
    tasks:[
      {name:"Task 1 — Advanced data management project", status:"queued", notes:"Advanced relational data modeling; design data marts, lakes, and warehouses; build business logic at the database layer; write complex SQL; automate ETL tasks with procedures, functions, and triggers."}
    ]},
  {code:"D335", name:"Introduction to Programming in Python", cu:3, cat:"Core", term:"Term 4", status:"not_started", assessment:"OA",
    competencies:["Creates basic Python scripts","Creates control flow with functions and loops","Implements code with packages, modules, and libraries"],
    oaDetails:{items:15, minutes:180, code:"NKO2"},
    preAssessment:{items:15, minutes:180, code:"PAQE"},
    platform:"ZyBooks + Kyron interactive modules",
    notes:"Hybrid exam — writing code in an interactive interpreter, executed and scored electronically. Answers must be an exact match to expected output.",
    topics:["Variables and basic scripts (Kyron Module 1)","Loops and conditionals (Kyron Module 2)","Python modules (Kyron Module 3)","Programming with Python (Kyron Module 4)","Functions and scope","Control flow","Packages, modules, and libraries","Real-world problem solving"]},
  {code:"D197", name:"Version Control", cu:1, cat:"Core", term:"Term 4", status:"not_started", assessment:"PA",
    competencies:["Implements version control processes and solutions that maintain source code"],
    paCode:"YDM3",
    tasks:[
      {name:"Task 1 — Version control implementation", status:"queued", notes:"Demonstrate publishing, retrieving, branching, and cloning. Show collaborative workflow in a team scenario."}
    ]},
  {code:"D428", name:"Design Thinking for Business", cu:3, cat:"Core", term:"Term 4", status:"not_started", assessment:"PA",
    competencies:["Describes the role of design thinking in problem solving","Analyzes problems and solutions using design thinking methodology","Proposes a solution to a complex problem using design thinking"],
    paCode:"EGN1",
    tasks:[
      {name:"Task 1 — Design thinking solution proposal", status:"queued", notes:"Apply human-centered, empathy- and creativity-driven approach to a complex real-world business problem. Walk through design thinking principles and stages to develop a proposed solution."}
    ]},
  // Term 5 — 9 CU
  {code:"D492", name:"Data Analytics - Applications", cu:4, cat:"Core", term:"Term 5", status:"not_started", assessment:"OA",
    competencies:["Data Acquisition and Manipulation Techniques","Data Visualization Techniques","Data Visualization Selection","Data Analysis Techniques","Data Management Concepts","Data Types and Data Structures"],
    oaDetails:{code:"LTV1"},
    cert:"CompTIA Data+ (DA0-002)",
    notes:"Competency demonstrated through the CompTIA Data+ (DA0-002) certification exam. Third-party exam — retake fee applies for 3rd+ attempts. Earns an industry certification in addition to WGU credit.",
    topics:["Data acquisition and manipulation for business analysis","Statistical analysis","Data visualization principles and selection","Data analysis techniques and tools","Data management concepts (accuracy and quality)","Data types and data structures","CompTIA Data+ exam objectives"]},
  {code:"D246", name:"Influential Communication through Visual Design and Storytelling", cu:3, cat:"Core", term:"Term 5", status:"not_started", assessment:"PA",
    competencies:["Adapts communications to the basic needs and motivations of the audience","Applies storytelling techniques to motivate, inform, or influence a target audience","Applies visual design techniques to motivate, inform, or influence a target audience"],
    paCode:"FBN2",
    tasks:[
      {name:"Task 1 — Visual design and audience analysis", status:"queued", notes:"Adapt communication to audience needs; apply visual design techniques to motivate, inform, or influence."},
      {name:"Task 2 — Storytelling techniques applied", status:"queued", notes:"Apply storytelling techniques to create compelling, memorable messages for a target audience."}
    ]},
  {code:"D420", name:"Discrete Math: Logic", cu:1, cat:"Quant", term:"Term 5", status:"not_started", assessment:"OA",
    competencies:["Logic and Proofs — evaluates the truth of statements using proofs and the principles of deductive logic","Boolean Algebra and Boolean Functions — minimizes circuits using Boolean algebra and Boolean functions"],
    oaDetails:{items:32, minutes:120, code:"MDO1"},
    preAssessment:{items:32, minutes:120, code:"PMDO"},
    prerequisites:["C955 Applied Probability and Statistics","C957 Applied Algebra"],
    notes:"Scientific calculator recommended — TI-30XS Multiview. Whiteboard permitted during OA.",
    topics:["Propositional logic","Rules of deductive logic and proofs","Truth tables","Boolean algebra","Boolean functions","Logic circuit minimization","Logical equivalence","Logical connectives"]},
  {code:"D421", name:"Discrete Math: Functions and Relations", cu:1, cat:"Quant", term:"Term 5", status:"not_started", assessment:"OA",
    competencies:["Sets and Functions — analyzes relationships between sets and functions","Relations and Directed Graphs — analyzes mathematical problems using relations and directed graphs"],
    oaDetails:{items:32, minutes:120, code:"MGO1"},
    preAssessment:{items:32, minutes:120, code:"PMGO"},
    prerequisites:["D420 Discrete Math: Logic","C955 Applied Probability and Statistics","C957 Applied Algebra"],
    notes:"Scientific calculator recommended — TI-30XS Multiview. Whiteboard permitted during OA.",
    topics:["Set theory","Finite sequences","Series","Relations","Directed graphs","Sets and functions","Relationships between sets","Mathematical problem analysis"]},
  // Term 6 — 9 CU
  {code:"D493", name:"Scripting and Programming - Applications", cu:3, cat:"Core", term:"Term 6", status:"not_started", assessment:"PA",
    competencies:["Applies Fundamental Programming Concepts in a specific environment","Analyzes a Business Problem and divides it into tasks","Applies Data Processing Methods to solve complex problems","Applies Object-Oriented Programming Concepts to create a basic application"],
    paCode:"JGN1",
    prerequisites:["D335 Introduction to Programming in Python"],
    tasks:[
      {name:"Task 1 — Python application project", status:"queued", notes:"Build a Python application that analyzes a business problem, breaks it into tasks, applies data processing methods, and demonstrates object-oriented programming concepts."}
    ]},
  {code:"D324", name:"Business of IT - Project Management", cu:4, cat:"Core", term:"Term 6", status:"not_started", assessment:"OA",
    competencies:["Determines Project Management Requirements","Identifies Project Factors, Constraints, and Risk Strategies","Applies Communication Methods and Change Control processes within a project"],
    oaDetails:{code:"LMV2"},
    cert:"CompTIA Project+",
    notes:"Competency demonstrated through the CompTIA Project+ certification exam. Earns an industry certification alongside WGU credit.",
    topics:["Project lifecycle — initiate, plan, execute, monitor, control, close","Scope management","Resource allocation","Project planning and scheduling","Quality control","Risk management","Performance measurement","Project reporting","Change control","Communication methods","CompTIA Project+ exam objectives"]},
  {code:"D494", name:"Data and Information Governance", cu:2, cat:"Core", term:"Term 6", status:"not_started", assessment:"PA",
    competencies:["Creates Data and Information Management Plans — evaluates data governance components to identify deficiencies in quality, completeness, and management strategy","Recommends Policies, Standards, Procedures, and Best Practices for data and information governance"],
    paCode:"KAN1",
    tasks:[
      {name:"Task 1 — Data governance plan and policy recommendations", status:"queued", notes:"Evaluate data governance components to identify organizational deficiencies; recommend policies, standards, procedures, and best practices to meet business, technical, security, auditing, disaster recovery, and business continuity requirements."}
    ]},
  // Term 7 — 8 CU
  {code:"D495", name:"Big Data Foundations", cu:4, cat:"Core", term:"Term 7", status:"not_started", assessment:"PA",
    competencies:["Identify big data architecture according to organizational needs","Design big data architecture according to business requirements","Design big data processing according to business requirements"],
    paCode:"HTN2",
    tasks:[
      {name:"Task 1 — Big data architecture identification and design", status:"queued", notes:"Select and justify an appropriate big data architecture for a given organization. Compare relational vs. non-relational options, cloud-native data storage, data warehouses, data lakes, and data lakehouses."},
      {name:"Task 2 — Big data processing design", status:"queued", notes:"Design big data processing aspects to meet specified business requirements."}
    ]},
  {code:"C949", name:"Data Structures and Algorithms I", cu:4, cat:"Core", term:"Term 7", status:"not_started", assessment:"OA",
    competencies:["Explains Algorithms — use, logic, and structure","Determines Data Structure Impact on operations within an application, service, or data store","Applies Algorithms based on space and time complexity in Big-O notation"],
    oaDetails:{items:70, minutes:90, code:"VXO1"},
    preAssessment:{items:70, minutes:90, code:"PVXO"},
    platform:"zyBooks",
    notes:"OA is multiple choice — no code writing, but requires understanding code and predicting outcomes. Pass the pre-assessment without notes before scheduling the OA.",
    topics:["Dynamic data structures — bags, lists, stacks, queues","Trees and hash tables","Object-oriented design and abstract data types (ADTs)","Algorithms — use, logic, and structure","Big-O notation and complexity analysis","Sorting and searching algorithms","Recursion","Problem-solving and efficient application design"]},
  // Term 8 — 12 CU
  {code:"D496", name:"Introduction to Data Science", cu:4, cat:"Core", term:"Term 8", status:"not_started", assessment:"PA",
    competencies:["Foundations of Data Science — applies analytic techniques to investigate data sets","Data Wrangling techniques to investigate data sets","Statistical Techniques — applies analysis techniques to interpret data and report findings"],
    paCode:"QBA2",
    platform:"Udacity nanodegree (1st of 6 courses in series)",
    notes:"First course in the Udacity Data Analysis nanodegree series that WGU spreads across D496, D497, D498, D499, D500, D501. Login to Udacity with your WGU email.",
    tasks:[
      {name:"Task 1 — Intro to Data Analysis: Investigate a Dataset", status:"queued", notes:"Ask questions that can be solved with a given data set, set up experiments, use statistics and data wrangling to test hypotheses, communicate findings."},
      {name:"Task 2 — Practical Statistics: Analyze A/B Test Results", status:"queued", notes:"Apply statistical analysis techniques to interpret data and report findings from an A/B test."}
    ]},
  {code:"D497", name:"Data Wrangling", cu:3, cat:"Core", term:"Term 8", status:"not_started", assessment:"PA",
    competencies:["Data Modeling — creates and tests an ETL pipeline for acquiring and inserting data into a relational database","Data Wrangling — uses data cleansing processes to transform data for downstream analysis"],
    paCode:"QLA2",
    platform:"Udacity nanodegree (2nd of 6 courses in series)",
    prerequisites:["D496 Introduction to Data Science"],
    tasks:[
      {name:"Task 1 — Data Wrangling: Real World Data Wrangling with Python", status:"queued", notes:"Gather and extract data from widely-used data formats; assess the quality of data; apply cleaning processes to transform data for analysis."},
      {name:"Task 2 — Data Modeling with Postgres", status:"queued", notes:"Build and test an ETL pipeline that loads data into a relational Postgres database."}
    ]},
  {code:"D498", name:"Data Analysis with R", cu:2, cat:"Core", term:"Term 8", status:"not_started", assessment:"PA",
    competencies:["Exploratory Data Analysis Application — applies R to gain insights into data","Interpreting the Results of EDA — creates visuals using code to communicate insights","Communicating Data Analysis Effectively using visuals to communicate trends and relationships"],
    paCode:"TMA1",
    platform:"Udacity nanodegree (3rd of 6 courses in series)",
    tasks:[
      {name:"Task 1 — R Programming: Explore Bike Share Data", status:"queued", notes:"Use R programming to acquire and load data sets, create statistical summaries, build data visualizations, and communicate insights from exploratory data analysis."}
    ]},
  {code:"D499", name:"Machine Learning", cu:3, cat:"Core", term:"Term 8", status:"not_started", assessment:"PA",
    competencies:["Fundamental Machine Learning Concepts — describes supervised and unsupervised learning algorithms","Data Preparation and Feature Selection — evaluates preprocessing strategies","Classification Algorithms — determines appropriate algorithms for data sets","Regression Algorithms — determines appropriate algorithms for data sets","Clustering Algorithms — determines appropriate algorithms for data sets","Result Validation and Evaluation — evaluates algorithm performance"],
    paCode:"LDA1",
    platform:"Udacity nanodegree (4th of 6 courses in series)",
    prerequisites:["D493 Scripting and Programming - Applications"],
    notes:"Uses Python as the programming language.",
    tasks:[
      {name:"Task 1 — Supervised Learning: Find Donors for Charity ML", status:"queued", notes:"Build a supervised learning model (classification or regression). Train, tune, evaluate performance, select the best algorithm for the task."},
      {name:"Task 2 — Unsupervised Learning: Creating Customer Segments", status:"queued", notes:"Apply clustering and dimensionality reduction to segment customers from raw data."}
    ]},
  // Term 9 — 11 CU
  {code:"D500", name:"Data Visualization", cu:2, cat:"Core", term:"Term 9", status:"not_started", assessment:"PA",
    competencies:["Basic Elements of Data Visualization — determines appropriate strategy for a business problem","Data Visualization Techniques — produces visualizations","Data Visualization Design Principles and Best Practices — creates reports incorporating best practices","Effective Communication and Presentation — creates an interactive data dashboard"],
    paCode:"NLA1",
    platform:"Udacity nanodegree (5th of 6 courses in series)",
    tasks:[
      {name:"Task 1 — Data Visualization: Build a Data Dashboard", status:"queued", notes:"Build an interactive data dashboard applying design principles, human perception, color theory, and storytelling. Encode data visually, support organizational decision-making."}
    ]},
  {code:"D501", name:"Machine Learning DevOps", cu:2, cat:"Core", term:"Term 9", status:"not_started", assessment:"PA",
    competencies:["Machine Learning Pipeline Creation — implements an end-to-end ML pipeline to address organizational needs","Machine Learning Automation — implements ML automation with CI/CD framework"],
    paCode:"LCA1",
    cert:"Udacity Data Analyst Nanodegree (completes on D501 pass)",
    platform:"Udacity nanodegree (6th / last of 6 courses — completes the nanodegree)",
    notes:"Last WGU course in the Udacity nanodegree series. Version control (Git/GitHub) is a foundational skill — refresh before starting if needed.",
    tasks:[
      {name:"Task 1 — ML Pipeline for Short-term Rental Prices in NYC", status:"queued", notes:"Build an end-to-end machine learning pipeline for a real-world prediction problem using MLOps practices."},
      {name:"Task 2 — Deploying a Machine Learning Model with FastAPI", status:"queued", notes:"Deploy a trained ML model as a production service using FastAPI, with CI/CD and monitoring."}
    ]},
  {code:"D372", name:"Introduction to Systems Thinking", cu:3, cat:"Core", term:"Term 9", status:"not_started", assessment:"PA",
    competencies:["Applies Systems Thinking Basics — basic principles and foundational theory to a scenario","Applies Systems Thinking — analyzes complex problems and solutions using systems thinking methodology","Analyzes Complex Problems — designs a solution to a complex problem using systems thinking"],
    paCode:"WMM1",
    platform:"Open edX e-text (interactive, module-based)",
    notes:"Self-paced. Expect 30–40 hours if new to the material. C955 or C957 preferred but not required.",
    tasks:[
      {name:"Task 1 — Systems thinking basics application", status:"queued", notes:"Apply foundational principles of systems thinking to a scenario."},
      {name:"Task 2 — Complex problem analysis", status:"queued", notes:"Analyze a complex problem and its solution using systems thinking methodology."},
      {name:"Task 3 — Systems thinking solution design", status:"queued", notes:"Design a solution to an authentic complex problem using systems thinking."}
    ]},
  {code:"D502", name:"Data Analytics Capstone", cu:4, cat:"Capstone", term:"Term 9", status:"not_started", assessment:"PA",
    competencies:["Capstone — integrates and synthesizes competencies from across the degree program, demonstrating the ability to participate in and contribute value to the chosen professional field"],
    paCode:"BHN1",
    notes:"Final course before graduation. Projects involving human subjects or protected data require IRB approval. Templates, waivers, and forms provided within the assessment tasks. Capstone instructors and evaluators available for guidance.",
    tasks:[
      {name:"Task 1 — Project proposal", status:"queued", notes:"Identify an organizational need and propose a data analytics product to serve that need."},
      {name:"Task 2 — Project development", status:"queued", notes:"Plan and develop the data analytics product. Integrate and synthesize competencies from across the BSDA program."},
      {name:"Task 3 — Data project report", status:"queued", notes:"Document the full process from identification through delivery in a formal data project report."}
    ]}
];

// Compute summary stats from data

const jobDetails = {};

const skillDetails = {};

const milestoneDetails = {};

const careerPhases = {};

const portfolio = [
  {code:"NJ-REAL", title:"NJ Real Estate Market Analyzer", era:"active", eraLabel:"Active · WGU Portfolio",
    tag:"Python + SQL + Tableau · 8 commits · public repo", url:"https://github.com/dT-Tb-cmd/nj-real-estate-analyzer",
    fit:[1],
    why:"Which ZIP in central New Jersey actually works when you weight commute, housing cost, tax burden, and schools together? Real life forced the question — so turn the answer into portfolio evidence.",
    goal:"Ship a public Tableau dashboard + GitHub repo that analyzes housing data for the Lawrenceville / ZIP 08648 area, to inform a real relocation decision. Portfolio piece with a real audience.",
    role:"End-to-end analyst: data sourcing (Zillow, Census ACS, Redfin, Google Distance Matrix API), cleaning to SQLite, analysis notebooks, Tableau dashboard, README writeup.",
    outcome:"4 of 7 analysis questions answered. Finding: only Princeton Jct hits the 75-min commute target (63 min). Hamilton 110 min. Lawrenceville 128 min. $2,200/yr tax delta on a $500K home. Live repo, 8 commits.",
    skills:["Python","SQL","SQLite","Tableau Public","Pandas","Google Distance Matrix API","Git / GitHub"]},
  {code:"GRIND", title:"The Grind", era:"active", eraLabel:"Active",
    tag:"Life-gamification app · real action = real XP · multi-agent build via Paperclip",
    fit:[],
    why:"Productivity apps die because they track intentions, not results. People don't want task lists — they want to become someone specific. Stronger, sharper, better career, better health. If the app knew who you wanted to become, generated the quest chain that actually moved you there, and used verified real-world action as the game mechanic, does it finally become the one you stick with?",
    goal:"Ship a life-gamification app. User defines their ideal self — body, mind, career, habits. The app generates a personalized quest chain that systematically builds toward that ideal across workouts, nutrition, behavior, habits, and career pathing. Real-world completion is the game mechanic: phone verifies the action (ran the mile, finished the course, cooked the meal), XP is earned, the in-game avatar levels up alongside the real person.",
    role:"Product architect. Defined the ideal-self → quest chain → real-world verification → XP loop. Built the agent mesh through Paperclip — Grit, Forge, Pixel, and Surge — each agent specialized on a slice of the build (product, code, design, ops) and coordinated through the orchestrator so the whole thing ships like a real product team.",
    outcome:"Multi-agent build mesh live and shipping. Product in active development. The architecture — real-world action as game mechanic, AI as quest-master, agents as the build team — is the differentiator.",
    skills:["Product architecture","Gamification design","Behavior change design","Multi-agent orchestration","Paperclip","Real-world verification loops","AI quest generation","Mobile tracking integration"]},
  {code:"BCI", title:"BCI EEG Integration · Flow-State Capture", era:"active", eraLabel:"Active",
    tag:"EEG-driven focus amplifier · OpenBCI Cyton pipeline · personal R&D",
    fit:[],
    why:"Flow state is the peak focus mode — deep concentration, effortless pace, time dilation. It's also maddeningly unreliable. Some study sessions you slip into it, most you don't, and you can't say why. If an EEG can capture what flow actually looks like as a brain-wave signature — isolate it from distracted, fatigued, or restless states — then maybe you can study the signature, figure out what actually triggers it, and build a tool that helps you return to flow on demand when you sit down to study. Replicate the state instead of chasing it.",
    goal:"Build a brain-computer interface pipeline that reads EEG from an OpenBCI Cyton, classifies mental state in real time (flow vs. distracted vs. fatigued), and gives the user feedback they can act on to steer themselves back into focus during study sessions. Personal R&D project aimed at making flow repeatable instead of random.",
    role:"End-to-end architect. Hardware selection (OpenBCI Cyton, 250 Hz, 8 channels), signal-processing pipeline design, real-time ML inference path, feedback-loop design for the user.",
    outcome:"Integration specs drafted for Area 1 (data format, protocols, preprocessing, model, errors, latency) and Area 2 (pipeline, features, output). Areas 3–8 (benchmarking, feedback loops, data collection, hardware testing, privacy + ethics) in planning.",
    skills:["Real-time signal processing","EEG preprocessing + artifact removal","Feature extraction from time-series","Streaming ML inference","Hardware integration (OpenBCI / BLE / USB)","Latency profiling","Biosignal privacy + HIPAA-relevant compliance"]},
  {code:"BOOM-CROW", title:"Boomerang + CROW Integration", era:"shipped-army", eraLabel:"Shipped · Army",
    tag:"Intercepted Boomerang data stream upstream of audio and routed it into CROW for auto-slew + zoom",
    fit:[],
    why:"Under incoming fire, crews don't have seconds to waste. Boomerang already knows the distance and direction of the shot — it's broadcast as an audio alert over comms moments after the round leaves the barrel, and the closer the shooter is, the sharper the fix. If the data is already there, why is a human still translating \"voice in my headset\" into \"hand on a joystick\"? Close the loop.",
    goal:"Route Boomerang's detection data directly into the sector-assigned CROW remotely-operated weapon station before it hit the audio pipeline, so the turret automatically slewed to the source coordinates and zoomed in — giving the gunner an already-acquired target instead of a voice cue.",
    role:"End-to-end integrator. The two systems weren't designed to talk to each other — they were built by different vendors. Sat down with the civilian engineers on each platform, worked out how to capture Boomerang's output upstream of its audio stage and feed the coordinates into CROW's input layer using each system's own base software. Designed the data path, coordinated the vendor-level changes, and deployed to sector-assigned vehicles.",
    outcome:"Crew response time dropped dramatically. Instead of waiting for the audio alert, manually slewing the turret, and then acquiring visuals, the turret was already pointed at the source and zoomed in by the time the gunner registered the shot. Direct crew survivability impact. Textbook systems-of-systems integration — exactly what civilian AI architects get paid for, done as an enlisted soldier.",
    skills:["Systems-of-systems integration","Vendor coordination","Intercepting data streams upstream of downstream consumers","Real-time sensor-to-effector pipelines","Signal processing","Weapons systems knowledge","Operational deployment under constraints"]},
  {code:"MOTOR", title:"Motorpool Maintenance Redesign", era:"shipped-army", eraLabel:"Shipped · Army",
    tag:"Process engineering — redesigned an entire department",
    fit:[],
    why:"Vehicles weren't getting fixed. Parts disappeared into paperwork. Readiness numbers were dropping. If the whole department was broken, patching it wasn't going to work — what would it look like if the process was designed from the ground up to actually deliver repairs?",
    goal:"Take a broken motorpool maintenance workflow, redesign it so vehicles actually get fixed, and get parts tracking that works.",
    role:"Process owner end-to-end. Diagnosis, redesign, rollout, documentation.",
    outcome:"Reduced vehicle repair cycle times. Parts tracking became reliable. Unit readiness across the department measurably increased.",
    skills:["Process redesign","Operational documentation","Cross-functional coordination","Change management"]},
  {code:"TRAIN-AUTO", title:"Training Schedule Automation", era:"shipped-army", eraLabel:"Shipped · Army",
    tag:"End-to-end workflow engine for unit training — doctrine, availability, paperwork, CONOP approval",
    fit:[1],
    why:"Every time the unit cycled through a training phase — deployment, post-deployment, train-up — people scrambled with the same bureaucratic chaos: chase clearances, reserve dates, coordinate with range control, book training areas, fight for overlapping windows. Meanwhile the training doctrine was already crystal clear about which certifications were required at which level — individual, team, squad, platoon, unit — with strict graded qualifications. Getting a certification wrong the first time meant doing it over, which meant burning time the unit didn't have. If the doctrine is deterministic and the coordination is the rate-limiter, why is a person still doing the running-around?",
    goal:"Build a standardized reminder + scheduling system that knew the training doctrine, tracked what certifications were coming due at each unit level, forecasted availability across range control and training-area bookings, and generated the paperwork — all the way through the CONOP approval chain.",
    role:"End-to-end designer and builder. Modeled the doctrine (which certs are due at which level), integrated the forecast of upcoming dates and existing reservations, surfaced the viable training windows, auto-populated required dates and documents once a window was chosen, saved the output to the desktop so the NCO could route it out once the supervisor signed off on the CONOP.",
    outcome:"Instead of running around collecting information, the NCO opened the tool, picked an available window, and got a ready-to-sign CONOP packet. Saved the unit significant money and hundreds of staff-hours. Improved consistency of training delivery. Freed NCOs and officers for higher-leverage work than bureaucratic chasing.",
    skills:["Workflow automation","Calendar + availability conflict resolution","Doctrine / rules-engine modeling","Auto-generated documentation","Approval-workflow integration (CONOP sign-off)","Cross-functional coordination (range control, training areas, command)","Requirements analysis"]},
  {code:"PANTHER", title:"Panther / MMPV Instructor", era:"shipped-army", eraLabel:"Shipped · Army",
    tag:"Certified instructor — 25 lessons across OPNET + FMNET tracks",
    fit:[],
    why:"A unit that can't operate and maintain its own combat vehicles depends on outside help every time something breaks. Can two parallel cert tracks — one for operators, one for maintainers — build enough internal capability that the unit stands on its own?",
    goal:"Teach both operator (OPNET) and field maintainer (FMNET) certification courses for the Panther mine-protected vehicle so the unit could operate and maintain a combat vehicle fleet self-sufficiently.",
    role:"Certified Army instructor on both tracks, plus the underlying TM 9-2355-314 technical manual series.",
    outcome:"Built unit capability to self-sufficiently operate and maintain a combat vehicle fleet. Translated dense Army technical manuals into classroom-ready curriculum at two depth levels (operator + maintainer).",
    skills:["Technical instruction","Curriculum development","Translating dense technical docs for different audiences","Cross-track subject-matter depth"]},
  {code:"KOREA-ROK", title:"ROK Army Cross-Training (part 1 of 2)", era:"shipped-army", eraLabel:"Shipped · Army",
    tag:"Mission-prep training — built the ROK team into the US element for the real-world UXO clearance that followed",
    fit:[],
    why:"The UXO clearance on those two mountains couldn't be done by the US element alone — it needed a trained multinational team with the ROK Army in the loop. But US and ROK forces had different languages, different doctrine, and different assumptions about how the work would be done. The question wasn't whether to train — it was whether structured joint training could close the gaps fast enough that the combined team was actually ready to execute a real-world hazardous mission together. Not theory. Execution.",
    goal:"Design and deliver the joint US-ROK training that would build the combined team into a single operational unit capable of executing the Korea UXO Clearance (see linked project below) as one force, not two forces working next to each other.",
    role:"Training planner and lead instructor. Designed the curriculum so that language, doctrine, and technical differences were resolved before the team ever stepped onto the mountains. Trained with the exact mission in mind — not generic alliance exercises.",
    outcome:"ROK team trained and integrated into the US element. Cross-language and cross-doctrine friction resolved ahead of execution. The team that later executed the clearance was the team trained here. Prep pipeline shipped successfully into real-world operational output.",
    skills:["Mission-focused curriculum design","Multinational coordination","Stakeholder translation","Cross-doctrine instruction","Field-execution leadership"]},
  {code:"KOREA-UXO", title:"Korea Ordnance Clearance (part 2 of 2)", era:"shipped-army", eraLabel:"Shipped · Army",
    tag:"Commanded a ROK company on one of two mountains · directed search pattern · 200+ UXO recovered",
    fit:[],
    why:"Two mountains adjacent to the training range were full of unexploded ordnance. That terrain was effectively off-limits until someone cleared it, and clearance is hazardous work — there's no way to do it risk-free. How do you plan and execute a multinational operation on hazardous ground without losing people, and how do you do it with a team that was built for this exact mission?",
    goal:"Execute the UXO clearance of both mountains using the combined US-ROK team that had been trained specifically for this mission (see linked cross-training project above). Restore safe terrain use for the range and eliminate the persistent hazard.",
    role:"On-ground mission commander for one of the two mountains personally. Had a full company of ROK Army (~100+ soldiers) under command on that mountain — directed their search pattern, set the sweep areas, managed the risk posture on hazardous ground, and led execution as a single combined element. Foreign-national command at enlisted level is architect-grade responsibility done at a rank most people never see it at.",
    outcome:"Two mountains cleared. On the mountain he personally commanded: <b>over 200 pieces of unexploded ordnance recovered</b>. Safe terrain restored. Hazard eliminated. Combined team — built in the cross-training project — tested under real-world risk and shipped the mission successfully. End-to-end proof: plan the capability, train the team that can execute it, deploy them into the real environment, commands their search, ship the outcome.",
    skills:["Foreign-national command (company-level, as enlisted)","Multinational operations leadership","Hazardous-site planning and execution","Directing search operations on hazardous ground","Risk management under real-world constraints","Delivering a pre-trained team into live operational use","Cross-team coordination"]},
  {code:"VAULT", title:"Second Brain — AI-Integrated Vault", era:"active", eraLabel:"Active",
    tag:"Obsidian + Claude Code + Piper TTS + Gmail automation",
    fit:[],
    why:"Productivity tools don't learn your voice. They don't remember what mattered last week. They sit passive until you do the work. Can a personal vault plus a voice interface plus a coding agent actually function as a second brain — an augmentation layer that gets smarter the more you use it?",
    goal:"Build a personal knowledge-management and automation system integrating Obsidian notes, custom Claude skills, local text-to-speech, and Gmail filter automation.",
    role:"Architect end-to-end — designed the structure, wrote the custom skills, debugged and patched open-source tools, integrated everything.",
    outcome:"Full working stack. Used daily. Patched claude-speak with 8 custom fixes (encoder, file identity tracking, selective TTS filtering). Vault drives resume regeneration, study sessions, career planning — this dashboard is part of it.",
    skills:["Systems design","Python patching","Workflow automation","Voice interface integration","Gmail API"]},

  // ============ Proposed projects — planned, not yet started ============
  {code:"ATO", title:"Army Training Schedule Optimizer", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"Civilian version of the Army scheduling automation — Python + SQL + viz on public training data",
    fit:[1],
    why:"The original was built in uniform and shipped real outcomes. The civilian version retells the same story with modern data tools: \"here's what analytics would have unlocked if I'd had it then.\" Bridges past and future career in a way recruiters actually notice — not a hard pivot, a through-line.",
    goal:"Analyze public Army training data, surface scheduling optimization wins, and publish the methodology + dashboard as a portfolio piece that tells a story only you can tell.",
    role:"Planned role: sole designer + analyst + storyteller. Scope the public datasets, clean, analyze, visualize, write the narrative.",
    outcome:"Not started. Queued for Phase 1 portfolio ship. See vault note [[proposed-army-training-optimizer]] and its research companion for the full stack and effort estimate.",
    skills:["Python","SQL","Data visualization","Data storytelling","Git","Domain expertise (Army operations)"]},

  {code:"WGU-DASH", title:"WGU Student Progress Dashboard", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"Generalize your own WGU dashboard for the r/WGU community (100k+ members)",
    fit:[1],
    why:"You are the user. You sit in WGU right now, you know what's frustrating about tracking progress through the portal, and 100,000+ people on r/WGU have the same problem. A self-built tool for a real community beats another Titanic notebook — it signals \"this person actually solves problems instead of doing tutorials.\"",
    goal:"Take the personal dashboard you're already building, generalize the doctrine-aware / acceleration-aware logic, and ship it as a tool other WGU students can use. Public repo, simple onboarding, real users.",
    role:"Planned role: full-stack builder + community launcher. Already halfway there — this dashboard is the private v0.",
    outcome:"Not started as a public product yet. This private dashboard is the proof-of-concept. Path forward: generalize the course data, strip personal details, publish.",
    skills:["Python","SQL","Data visualization","Data storytelling","Git","Product thinking","Community launch"]},

  {code:"CYBER-ANOM", title:"Cybersec ML Anomaly Dashboard", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"Detect network anomalies in public security logs — cybersec + applied ML + dashboarding",
    fit:[],
    why:"Most analyst portfolios never touch security logs. Yours comes pre-loaded with a cybersec bootcamp and CompTIA cert stack. Pairing that background with applied ML on real log data opens a lane where few competitors can follow.",
    goal:"Train anomaly-detection models on public network / security log datasets, build a live dashboard that surfaces anomalies with context, ship to a public cloud demo.",
    role:"Planned role: end-to-end — data sourcing, feature engineering, model training, dashboard build, deployment.",
    outcome:"Not started. Queued for Phase 2 (AI Engineer). See vault note [[proposed-cybersec-anomaly-dashboard]] for the full plan.",
    skills:["Classical ML","Feature engineering","Log data processing","Dashboarding","Cloud deployment","Cybersec domain"]},

  {code:"PHISH-CL", title:"Phishing Classifier + Browser Extension", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"Train a phishing classifier, ship it as a browser extension that flags emails in real time",
    fit:[],
    why:"Classifier + shipped extension = \"trains AND deploys.\" End-user visible. Most ML projects die in a Jupyter notebook — this one puts your work on real people's screens, which is exactly what hiring managers want to see a Phase 2 engineer do.",
    goal:"Train a classifier on public phishing datasets, build a browser extension (Chrome/Firefox) that runs inference locally or via a small API, flags suspicious emails in real time with an explanation.",
    role:"Planned role: ML + extension developer. Two deliverables — trained model + shipped extension with public install.",
    outcome:"Not started. Queued for Phase 2 (AI Engineer). See vault note [[proposed-phishing-classifier]].",
    skills:["Classical ML","NLP basics","Model deployment","Browser extension development","APIs","Real-world shipping"]},

  {code:"VA-RAG", title:"Veteran Benefits RAG Agent", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"Conversational RAG over VA documents — help vets find what they qualify for without 50-page PDFs",
    fit:[],
    why:"You know this pain personally. Vets slog through dense PDFs to figure out what they qualify for. A RAG agent can answer \"am I eligible for X\" in plain language with citations. Personal mission alignment plus the hottest current tech stack equals memorable.",
    goal:"Build a conversational RAG agent that indexes public VA benefits documents, answers eligibility and application questions in plain English with citations, deploy as a free tool.",
    role:"Planned role: full-stack AI engineer — ingestion, chunking, embedding, retrieval, LLM integration, UI.",
    outcome:"Not started. Queued for Phase 2 (AI Engineer). See vault note [[proposed-veteran-benefits-rag]]. Personal mission project — helps the community you came from.",
    skills:["LLM fundamentals","Vector databases","RAG pipelines","APIs","Domain knowledge (veteran benefits)","Public-facing AI product"]},

  {code:"DOC-SEC", title:"Document Security Auditor (LLM Agent)", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"LLM agent that scans docs for PII, security keywords, classification leakage — compliance lane",
    fit:[],
    why:"LLM + compliance = a lane most analysts can't touch. Your cybersec background makes it credible. Enterprise orgs will pay real money for something that prevents them from leaking classified or personal data in documents — and that need isn't going away.",
    goal:"Build an LLM-powered agent that scans documents (PDFs, Word, text) for PII, security-sensitive keywords, and classification markings; flags findings with confidence and context; outputs an audit report.",
    role:"Planned role: agent architect + compliance designer. Requires balancing precision, recall, and explainability.",
    outcome:"Not started. Queued for Phase 3 (AI Architect). See vault note [[proposed-document-security-auditor]].",
    skills:["LLM agent design","Prompt engineering","PII detection","Security compliance (HIPAA, GDPR, classification markings)","Enterprise-grade output"]},

  {code:"OSINT-TI", title:"OSINT Threat Intelligence Aggregator", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"Pull + classify threat data from CISA, MITRE, public feeds — alert on relevance",
    fit:[],
    why:"Cross-cut skill demo: cybersec + ML + pipeline architecture + cloud. Architect-level work because the integration surface is large — multiple data sources, classification layer, alerting logic, storage, UI. Solves a real problem for anyone running a small security team.",
    goal:"Build a pipeline that ingests threat feeds from CISA, MITRE, and public sources; classifies by severity / relevance to a target stack; surfaces actionable alerts through a dashboard or notification channel.",
    role:"Planned role: architect. Data pipeline, classification model, alerting infrastructure, UI — four systems cooperating.",
    outcome:"Not started. Queued for Phase 3 (AI Architect). See vault note [[proposed-osint-threat-aggregator]].",
    skills:["Data pipeline architecture","Classification ML","Cloud infrastructure","Threat intelligence domain","Multi-system integration","Alerting design"]},

  {code:"MAINT-PRED", title:"Equipment Maintenance Predictor", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"Predict equipment failure from telemetry — civilian ML version of the motorpool redesign",
    fit:[],
    why:"The civilian continuation of your motorpool work. Same problem, ML toolkit: \"I solved this without ML once. Here's what ML adds.\" Narrative arc recruiters remember — you walked the problem space, now you're showing the modern tool on it.",
    goal:"Train a predictive maintenance model on public industrial telemetry data (bearing, engine, or transformer datasets); ship as a dashboard that shows which assets need attention and why.",
    role:"Planned role: end-to-end — data sourcing, feature engineering, model training, dashboard, deployment.",
    outcome:"Not started. Queued for Phase 3 (AI Architect). See vault note [[proposed-maintenance-predictor]]. Ties the Army motorpool story forward into AI.",
    skills:["Time-series ML","Feature engineering","Model deployment","Dashboarding","Industrial / mechanical domain expertise (carries from Army)"]},

  {code:"CLOUD-COST", title:"Multi-Cloud Cost Optimizer", era:"proposed", eraLabel:"Proposed · Planned",
    tag:"Analyze + optimize cloud spend across AWS / Azure / GCP — architect skill demonstrated",
    fit:[],
    why:"Cost/performance tradeoffs are the core architect skill (see Phase 3 skill list). Multi-cloud fluency is a premium hiring signal. Most engineers show depth in one cloud — this project shows you can reason across three. Directly in the architect lane.",
    goal:"Build a tool that ingests cost and usage data from AWS, Azure, and GCP; identifies waste, rightsizing opportunities, and cross-cloud migration candidates; recommends optimizations with estimated savings.",
    role:"Planned role: architect + analyst. Touches billing APIs on three clouds, cost-model logic, recommendation engine, dashboard.",
    outcome:"Not started. Queued for Phase 3 (AI Architect) — most valuable after AWS Solutions Architect Associate cert. See vault note [[proposed-multicloud-cost-optimizer]].",
    skills:["Cross-cloud fluency (AWS / Azure / GCP)","Cost modeling","Billing API integration","Optimization algorithms","Cost/performance tradeoffs (architect-grade)"]}
];

const phaseFitLabels = {
  1: "Data Analyst"
};
