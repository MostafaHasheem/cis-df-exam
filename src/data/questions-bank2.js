export const bankMeta = {
  title: 'Exam Model 2',
  description: 'ServiceNow CIS-DF Practice Exam.',
  totalQuestions: 83,
  passingScore: 70,
  timeLimitMinutes: 90
};

export const questions = [
  {
    "id": 1,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "ServiceNow Certified Implementation Specialist",
    "options": [
      "A. CMDB Practice Examination",
      "B. The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Incident form is automatically populated after a CI is selected that references an appropriate support group?",
      "C. Assignment Group",
      "D. Support Group",
      "E. Approval Group",
      "F. Managed by Group",
      "G. Change Group"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 2,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has set-up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field. Given the data (Tivoli: 4,096, ServiceNow: 4,096, LANDesk: 2,048, Altiris: 8,192) in the Multisource CMDB, which value would be added to the CMDB for RAM for a 'Server' CI? 2,048 MB 4,096 MB 8,192 MB",
    "options": [],
    "correctAnswer": "C"
  },
  {
    "id": 3,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task? The de-duplication dashboard on the CMDB workspace My Tasks in the Application Navigator The de-duplication task module",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 4,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options)",
    "options": [
      "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
      "B. Ensure that the business rule to update Asset fields on change on the CI table is active",
      "C. Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "D. Ensure that the business rule to update CI fields on change on the asset table is active",
      "Ensure one-to-one physical mapping between Asset and CI"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 5,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    "options": [
      "A. Use the CMDB Reconciliation Engine to update the attributes",
      "B. Use a scheduled data import to update the attributes from an external source",
      "Create a new CI class specifically for non-discoverable attributes"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 6,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service mapping be used as part of Change Management?",
    "options": [
      "A. To understand the business impact of CIs",
      "B. To understand the physical location of CIs",
      "C. To identify which devices will go offline first"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 7,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options) A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group? Approval Group Managed by Group Support Group Owned by Group",
    "options": [],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 8,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes? CMDB Data Manager CI Class Manager System Properties CMDB Workspace",
    "options": [],
    "correctAnswer": "B"
  },
  {
    "id": 9,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class? data_classification_admin and personalize_dictionary cmdb_inst_admin and personalize_form itil_admin and personalize_form sn_cmdb_admin and personalize_dictionary",
    "options": [],
    "correctAnswer": "D"
  },
  {
    "id": 10,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    "options": [
      "A. Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
      "B. Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
      "C. Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 11,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What is the relationship between an application and a server?",
    "options": [
      "Application > Runs on::Runs > Server",
      "B. Application > Runs::Runs On > Server",
      "C. Application > Used by::Uses > Server",
      "D. Application > Uses::Used by > Server"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 12,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
    "options": [
      "A. Managed By Group",
      "B. Approval Group",
      "C. Support Group",
      "D. Change Group"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 13,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    "options": [
      "A. Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
      "B. Certification Filter, Certification Template, Audit",
      "C. Stale, Orphan, Duplicate",
      "D. Certification Policies, Data Filters, Scheduled Jobs"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 14,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A healthcare provider faces a critical incident affecting its patient management system. The provider needs to determine the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage? Affected CI [task_ci] related list Service Offerings by Department or Location Incident history of similar CIs Application Service environment attribute",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 15,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Administrator has set-up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field. Given the data (Tivoli: 4,096, ServiceNow: 4,096, LANDesk: 2,048, Altiris: 8,192) in the Multisource CMDB, which value would be added to the CMDB for RAM for a 'Server' CI?",
    "options": [
      "A. 4,096 MB",
      "B. 2,048 MB",
      "C. 8,192 MB"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 16,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    "options": [
      "Automates the enforcement of relationship rules between CIs in the CMDB",
      "B. Encrypts archived records for enhanced security",
      "C. Automates the archival and deletion of records based on retention policies"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 17,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal? Use the CSDM Data Foundations Dashboard Use the default configured CMDB Health Dashboard Start the ServiceNow Health Scan",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 18,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options) A CMDB Administrator wants to run the Services Have Owners Identified playbook to remediate the issues shown in the CMDB Data Foundations Dashboard. Which remediation plays would be used? Fix Data Govern Data Report Data Analyze Data",
    "options": [],
    "correctAnswer": [
      "A",
      "B"
    ]
  },
  {
    "id": 19,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the live discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case? The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled. CMBD 360/Multisource is a platform product that can be used immediately. ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules.",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 20,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs to import external data into the CMDB. As the CMDB Administrator wants to reduce the risk for creating duplicates and to update information from unauthorized sources, it has to be ensured that the Identification and Reconciliation API will not be bypassed. What is the recommended method to import data into the CMDB utilizing the Identification and Reconciliation API? IntegrationHub ETL Table API (REST API or SOAP API) Import Sets and Transform Maps",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 21,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM? Understand the impact of the change on services Identify blackout windows for the change Route the change dynamically Determine the root cause of the change issue",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 22,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB? The Apache Web Server CI will be reclassified as a Web Server CI. A duplication error will occur. A new Apache Web Server CI is created. The existing Apache Web Server CI will be reconciled and its version will be updated.",
    "options": [],
    "correctAnswer": "D"
  },
  {
    "id": 23,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task? My Tasks in the Application Navigator The de-duplication dashboard on the CMDB workspace The de-duplication task module",
    "options": [],
    "correctAnswer": "B"
  },
  {
    "id": 24,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified? Life Cycle Mapping [life_cycle_mapping] Life Cycle Stage Status [life_cycle_stage_status] Life Cycle Stages [life_cycle_stage] Life Cycle Controls [life_cycle_control]",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 25,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options)",
    "options": [
      "A. The Configuration Manager is preparing the justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard?",
      "B. It helps detect and eliminate duplicate records in the CMDB.",
      "C. It enables monitoring and tracking of CMDB health over time.",
      "D. It provides actionable insights to improve data quality and completeness.",
      "E. It automates the approval process for change management."
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 26,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information? Correctness Completeness Compliance",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 27,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options)",
    "options": [
      "A. Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)?",
      "B. Servers in the data center",
      "C. Devices in secure environments",
      "D. Network devices in the DMZ",
      "E. Devices that intermittently connect to the network"
    ],
    "correctAnswer": [
      "A",
      "B"
    ]
  },
  {
    "id": 28,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is implementing a Vulnerability Response or Security Incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. Which Get Well Playbook from the CSDM Data Foundations Dashboard helps with this? Locations without a Parent Location Named Product Models without Product Owners Application Services with Business Application Relationships Percentage of Custom Status Values for CI Life Cycle Stages",
    "options": [],
    "correctAnswer": "C"
  },
  {
    "id": 29,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. The Configuration Management team is working to ensure that the Change Group field is populated for all managed CIs. As a result, which base system field on the incident form will be automatically populated after selecting a CI? Managed by group Approval group Assignment group Change group",
    "options": [],
    "correctAnswer": "C"
  },
  {
    "id": 30,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      "A. Enterprise Architect",
      "B. Technology Service Owners",
      "C. Application Service Owners"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 31,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Platform Owner is collaborating with stakeholders in the manufacturing industry to align their CIs with the CSDM 5 framework. They need to map production line monitoring systems to the appropriate CSDM domain. Which CSDM 5 domain does the Platform Owner use? Service Delivery (Manage Technical) Foundation Build and Integration (Build) Design and Planning (Design) Service Consumption (Sell/Consume)",
    "options": [],
    "correctAnswer": "B"
  },
  {
    "id": 32,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "In a company there is a need to understand the CSDM maturity level needed. Different stakeholders listed a number of use cases that they expect over time. Which use case requires information objects?",
    "options": [
      "A. The Event Operations team wants to automate their events into incident for operational actions.",
      "B. The Asset Management team wants to understand the asset life cycle compliancy in a Business Application context.",
      "C. The SecOps team wants to understand the operational risk in the Business Application context.",
      "D. The Business Service Management team wants to understand the operational impact for their consumer parties.",
      "E. The Customer Service team wants to onboard pro-active case management."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 33,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options)",
    "options": [
      "A. With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. Based on the request of the management, a CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard?",
      "B. Last Created",
      "C. Most Reported",
      "D. Last Updated",
      "E. Smallest Value"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 34,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB? Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments Improves the implementation velocity of APM Foundation for future business application rationalization Enables impact assessments for incident, problem, and change on Business Services",
    "options": [],
    "correctAnswer": "C"
  },
  {
    "id": 35,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      "A. Saved queries window on the CMDB 360 tab",
      "B. CMDB Query Builder",
      "Coverage window on the CMDB 360 tab",
      "D. Saved queries window on the Insights tab"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 36,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What is the difference between Data Certification and Attestation policies when managing a CI?",
    "options": [
      "Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the CI still exists.",
      "B. Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual.",
      "C. Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI.",
      "D. Attestation can be scheduled, while Data Certification cannot be scheduled."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 37,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager? Create a scheduled job Create a business rule Create an archive policy",
    "options": [],
    "correctAnswer": "C"
  },
  {
    "id": 38,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The following identification rule for a CI class has been defined: Hardware Rule (Priority 100: Serial Number). Two new CI records are imported into the hardware class of the CMDB. CI1: The name of this CI record matches the name of an existing CI record in the CMDB. CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
    "options": [
      "A. CI1 and CI2 both will be inserted as new records.",
      "B. CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "CI1 will be inserted as new record and CI2 will be updated with matching record."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 39,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs. Which policy type should be used to accomplish this goal? Delete Certification Attestation Retire",
    "options": [],
    "correctAnswer": "C"
  },
  {
    "id": 40,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options)",
    "options": [
      "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
      "B. Ensure that the business rule to update CI fields on change on the asset table is active",
      "C. Ensure one-to-one physical mapping between Asset and CI",
      "D. Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "Ensure that the business rule to update Asset fields on change on the CI table is active"
    ],
    "correctAnswer": [
      "A",
      "D"
    ]
  },
  {
    "id": 41,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes? Assign a run order to each data source in the identification rules Configure data refresh rules with a specific time period Assign a priority to each data source in the reconciliation rules Manually run the data source updates in the correct order",
    "options": [],
    "correctAnswer": "C"
  },
  {
    "id": 42,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    "options": [
      "A. Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value",
      "B. Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
      "C. Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 43,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "When integrating data into the CMDB using import sets and transform maps, which type of script is added to ensure the data is processed through the IRE?",
    "options": [
      "A. onStart",
      "B. onAfter",
      "C. onComplete",
      "D. onBefore"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 44,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])? Many-to-one One-to-many Many-to-many One-to-one",
    "options": [],
    "correctAnswer": "B"
  },
  {
    "id": 45,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options) A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity? Delete an unused class, and replace it with the new one Add a new class under an appropriate parent class Install or update the CMDB CI Class Models store application, and verify the class does not already exist Modify an existing class",
    "options": [],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 46,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What ensures data volume in the CMDB is manageable?",
    "options": [
      "A. Scheduled Jobs",
      "Business Rules",
      "C. Archive Policies"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 47,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager wants to use the Unified Map. Where would it be accessed? CMDB Data Manager CMDB Workspace CI Class Manager",
    "options": [],
    "correctAnswer": "B"
  },
  {
    "id": 48,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    "options": [
      "A. Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
      "B. Certification Filter, Certification Template, Audit",
      "Certification Policies, Data Filters, Scheduled Jobs",
      "D. Stale, Orphan, Duplicate"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 49,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has been tasked with gathering information for a presentation to leadership. The Administrator needs to provide Duplicate CI, Orphan CI and Stale CI metrics. Which scorecard provides this information on the CMDB Health Dashboard? Correctness Completeness Compliance",
    "options": [],
    "correctAnswer": "A"
  },
  {
    "id": 50,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What is the relationship between an application and a server?",
    "options": [
      "Application > Uses::Used by > Server",
      "B. Application > Runs on::Runs > Server",
      "C. Application > Used by::Uses > Server",
      "D. Application > Runs::Runs On > Server"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 51,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options) A service owner is using Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel? Managed by group Discovery source Business criticality CI type",
    "options": [],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 52,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    "options": [
      "A. Compliance",
      "B. Audit",
      "Certification",
      "D. Attestation"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 53,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options) A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group? Owned by Group Managed by Group Approval Group Support Group",
    "options": [],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 54,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    "options": [
      "A. CMDB Data Manager",
      "B. De-duplication templates",
      "CMDB Health Dashboard"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 55,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used? All Added Child Derived",
    "options": [],
    "correctAnswer": "B"
  },
  {
    "id": 56,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue? Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation Use the Duplicate CI Remediator to merge the duplicate location records Keep both locations as either can be used as a valid alternate location Review both locations, update CIs with the correct location and delete the duplicate location",
    "options": [],
    "correctAnswer": "D"
  },
  {
    "id": 57,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Select 2 options)",
    "options": [
      "A. Configuration Management needs to ensure data quality for all CIs in the CMDB. What areas of data quality for CIs are in the CMDB Health Dashboard?",
      "B. Duplicate CIs",
      "C. Missing CIs",
      "D. Stale CIs",
      "E. Downgraded CIs",
      "F. Upgraded CIs"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 58,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
    "options": [
      "A. Support Group",
      "B. Managed By Group",
      "C. Approval Group",
      "D. Change Group"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 59,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM?",
    "options": [
      "A. Determine the root cause of the change issue",
      "B. Identify blackout windows for the change",
      "C. Understand the impact of the change on services",
      "D. Route the change dynamically"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 60,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Has read-only access to CMDB data... : CI Analyst Accountable for managing all elements... : Service or Product Owner Manages assigned CI tables... : Configuration Manager/CMDB Admin Obtains highest level role... : CMDB Process Owner Choose 1 option. A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to adhere to lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store the information that will be used to satisfy the audits?",
    "options": [
      "A. Customer Service Offerings and Databases",
      "B. Business Applications and Information Objects",
      "C. Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 61,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A Configuration Manager wants to use the Unified Map. Where would it be accessed?",
    "options": [
      "A. CI Class Manager",
      "B. CMDB Workspace",
      "C. CMDB Data Manager"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 62,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A Platform Data Owner wants to improve data quality with a few reconciliation rules across the live discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
    "options": [
      "A. CMBD 360/Multisource is a platform product that can be used immediately.",
      "B. ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules.",
      "C. The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 63,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": [
      "A. Many-to-one",
      "B. Many-to-many",
      "C. One-to-many",
      "D. One-to-one"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 64,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
    "options": [
      "A. Use the CSDM Data Foundations Dashboard",
      "B. Use the default configured CMDB Health Dashboard",
      "C. Start the ServiceNow Health Scan"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 65,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. What is the difference between Data Certification and Attestation policies when managing a CI?",
    "options": [
      "A. Attestation can be scheduled, while Data Certification cannot be scheduled.",
      "B. Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the CI still exists.",
      "C. Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI.",
      "D. Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 66,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      "A. Enterprise Architect",
      "B. Application Service Owners",
      "C. Technology Service Owners"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 67,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    "options": [
      "A. Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
      "B. Improves the implementation velocity of APM Foundation for future business application rationalization",
      "C. Enables impact assessments for incident, problem, and change on Business Services"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 68,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    "options": [
      "A. Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
      "B. Certification Filter, Certification Template, Audit",
      "C. Stale, Orphan, Duplicate",
      "D. Certification Policies, Data Filters, Scheduled Jobs"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 69,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. The CMDB Administrator has set-up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field. Given the data (Tivoli: 4,096, ServiceNow: 4,096, LANDesk: 2,048, Altiris: 8,192) in the Multisource CMDB, which value would be added to the CMDB for RAM for a 'Server' CI?",
    "options": [
      "A. 2,048 MB",
      "B. 4,096 MB",
      "C. 8,192 MB"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 70,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    "options": [
      "A. All",
      "B. Child",
      "C. Added",
      "D. Derived"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 71,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard for the Server class which consists of a total of 60,000 servers in the CMDB. For the Duplicate metric, it shows Healthy CIs/Evaluated as 59,000/60,000. For the Orphan metric, it shows Healthy CIs/Evaluated as 45,000/50,000. Which configuration explains the difference in the scope of Server CIs (60,000 vs. 50,000) evaluated between the two metrics?",
    "options": [
      "A. The Orphan metric has a CMDB Group configured for the Server class.",
      "B. The Duplicate metric has a Health Inclusion rule configured for the Server class.",
      "C. The Orphan metric has a Health Inclusion rule configured for the Server class.",
      "D. The Duplicate metric has a CMDB Group configured for the Server class."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 72,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A healthcare provider faces a critical incident affecting its patient management system. The provider needs to determine the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage?",
    "options": [
      "A. Service Offerings by Department or Location",
      "B. Affected CI [task_ci] related list",
      "C. Application Service environment attribute",
      "D. Incident history of similar CIs"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 73,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
    "options": [
      "A. Create a business rule",
      "B. Create a scheduled job",
      "C. Create an archive policy"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 74,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Choose 2 options. With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. Based on the request of the management, a CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard?",
    "options": [
      "A. Most Reported",
      "B. Last Created",
      "C. Last Updated",
      "D. Smallest Value"
    ],
    "correctAnswer": [
      "A",
      "D"
    ]
  },
  {
    "id": 75,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Choose 2 options. Configuration Management needs to ensure data quality for all CIs in the CMDB. What areas of data quality for CIs are in the CMDB Health Dashboard?",
    "options": [
      "A. Downgraded CIs",
      "B. Duplicate CIs",
      "C. Missing CIs",
      "D. Stale CIs",
      "E. Upgraded CIs"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 76,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Choose 2 options. A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group?",
    "options": [
      "A. Approval Group",
      "B. Managed by Group",
      "C. Support Group",
      "D. Owned by Group"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 77,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Choose 2 options. A Configuration Management Process Owner is preparing solution options for presentation to the technical governance board for ingesting custom CIs to the CMDB. The solution needs to align with best practice, minimize the cost of future work (technical debt) and ensure compliance with future upgrades. Which solutions accomplish this?",
    "options": [
      "A. Repurposing a base CI class and rename attributes, as required",
      "B. Extending an existing Asset class table to accommodate the custom CI class attributes",
      "C. Extending an existing CI class table to accommodate the custom CI class attributes",
      "D. Installing or upgrading the 'CMDB CI Class Models' store application to find a suitable existing CI class accommodating any new attributes"
    ],
    "correctAnswer": [
      "C",
      "D"
    ]
  },
  {
    "id": 78,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    "options": [
      "A. data_classification_admin and personalize_dictionary",
      "B. cmdb_inst_admin and personalize_form",
      "C. itil_admin and personalize_form",
      "D. sn_cmdb_admin and personalize_dictionary"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 79,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
    "options": [
      "A. Managed By Group",
      "B. Approval Group",
      "C. Support Group",
      "D. Change Group"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 80,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator has installed a Service Graph Connector and customized a script transform. What will happen on subsequent upgrades if the default definition of the script transform is updated?",
    "options": [
      "A. The upgrade stops and reports an error.",
      "B. A skipped change is created and no change is made to the script transform definition.",
      "C. The Service Graph Connector upgrade refuses to start."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 81,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
    "options": [
      "A. CMDB Data Manager",
      "B. CI Class Manager",
      "C. System Properties",
      "D. CMDB Workspace"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 82,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service mapping be used as part of Change Management?",
    "options": [
      "A. To identify which devices will go offline first",
      "B. To understand the business impact of CIs",
      "C. To understand the physical location of CIs"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 83,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator is implementing a Vulnerability Response or Security Incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. Which Get Well Playbook from the CSDM Data Foundations Dashboard helps with this?",
    "options": [
      "A. Percentage of Custom Status Values for CI Life Cycle Stages",
      "B. Named Product Models without Product Owners",
      "C. Locations without a Parent Location",
      "D. Application Services with Business Application Relationships"
    ],
    "correctAnswer": "D"
  }
];
