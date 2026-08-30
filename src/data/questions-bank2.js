// Question Bank 2 — CIS-DF Sample Exam
// Extracted from "Qs 2 sample.docx"

export const bankMeta = {
  id: 'bank2',
  title: 'CIS-DF Sample Exam',
  description: 'Full CIS Discovery Fundamentals sample exam covering 178 questions.',
  totalQuestions: 178,
  passingScore: 70,
  timeLimitMinutes: 130, // 130 mins for 178 questions is proportional
};

export const questions = [
  {
    "id": 1,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is beginning the journey of populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed. Which governance management tool will accomplish this?",
    "options": [
      "A. CI Class Manager",
      "B. CMDB and CSDM Data Foundations Dashboard",
      "C. CMDB Health Dashboard",
      "D. CMDB Data Manager",
      "E. De-duplication Templates"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 2,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "What types of policies can be created within CMDB Data Manager?",
    "options": [
      "A. De-duplication",
      "B. Archive",
      "C. Reconciliation",
      "D. Retire"
    ],
    "correctAnswer": [
      "A",
      "B"
    ]
  },
  {
    "id": 3,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator wants to educate the team on the various actions that can be performed within the CMDB Workspace. What actions can be initiated from the CMDB Workspace?",
    "options": [
      "A. Execute ServiceNow Discovery",
      "B. Create a CMDB Data Manager certification policy",
      "C. Remediate duplicate CI records",
      "D. Create a new CMDB class"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 4,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator changes the query for the SCCM Service Graph Connector. What is the impact of this change?",
    "options": [
      "A. The Data Source for the SCCM Service Graph Connector will be marked as Inactive.",
      "B. Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured.",
      "C. Any updates for the SCCM Service Graph Connector will be skipped during the upgrade."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 5,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Using existing baseline Data Manager policies, what condition must a CI meet before it can be archived or deleted?",
    "options": [
      "A. Be marked as inactive",
      "B. Be marked as critical",
      "C. Be retired and in end of life",
      "D. Be fully operational and in use"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 6,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CSDM Data Manager needs metrics on the alignment of product models, locations, and business units with best practices. Which tab in the CSDM Data Foundations Dashboard provides this information?",
    "options": [
      "A. Run",
      "B. Foundation",
      "C. Crawl",
      "D. Walk",
      "E. Fly"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 7,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "User endpoint devices are Imported into the CMDB and populate the 'Assigned to [assigned_to]' field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    "options": [
      "A. Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
      "B. Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
      "C. Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 8,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    "options": [
      "A. My Tasks in the Application Navigator",
      "B. The de-duplication task module",
      "C. The de-duplication dashboard on the CMDB workspace"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 9,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to ensure all short-lived CIs that have not been discovered in the past week are removed. After retiring the CI records, which recommended action does the CMDB Administrator take?",
    "options": [
      "A. Create a delete policy",
      "B. Create a scheduled job",
      "C. Create a business rule"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 10,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator group aims to establish a process for receiving task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules can be leveraged to configure recommended fields and generate task records in cases where these fields are missing for Linux servers in the CMDB?",
    "options": [
      "B. Which ServiceNow modules can be leveraged to configure recommended fields and generate task records in cases where these fields are missing for Linux servers in the CMDB?",
      "A. Technical Service Offerings and Dynamic CI groups",
      "B. CMDB Workspace and Scheduled Jobs",
      "C. Dynamic CI groups and CMDB groups",
      "D. CI Class Manager and Health Preferences"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 11,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is asked to create a query using the CMDB Query Builder that displays all operational CIs belonging to a specific application service. Which steps provide the desired outcome?",
    "options": [
      "A. 1. Add the Business Application, Application Service, and Configuration Item classes to the canvas. 2. Define a filter for the application service name and the operational status of the configuration items. 3. Configure the relationship between the classes. 4. Run the query.",
      "B. 1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Define a filter for the application service name and the operational status of the configuration items. 4. Run the query.",
      "C. 1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Add the Operational Status and Name fields as columns. 4. Run the query."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 12,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "What is the value of using the CMDB in security operations?",
    "options": [
      "A. Allows security team to assess and remediate an incident",
      "B. Enables audits and attestations across CIs",
      "C. Auto-resolves a vulnerability",
      "D. Identifies the IT infrastructure with a vulnerability"
    ],
    "correctAnswer": [
      "A",
      "D"
    ]
  },
  {
    "id": 13,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs to set a CI Class as a Principal Class. Which CI Class Manager tab would need to be accessed?",
    "options": [
      "A. Health > Attributes",
      "B. Class Info > Basic Info",
      "C. Class Info > Attributes"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 14,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "An organization utilizes multiple data sources to update its CMDB, each assigned a different priority level. A high-priority data source is scheduled to update server records weekly. However, due to an integration issue, the high-priority data source stops updating the records. Which configuration can be used to allow a lower-priority data source to update records after a specified period of inactivity from the higher-priority source?",
    "options": [
      "A. Data Refresh Rules",
      "B. Health Inclusion Rules",
      "C. Identification Rules",
      "D. Reconciliation Rules"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 15,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. What is the default duration of this metric?",
    "options": [
      "A. 24 hours",
      "B. 30 days",
      "C. 7 days",
      "D. 60 days"
    ],
    "correctAnswer": "B\nDrag and drop the CMDB Health Dashboard metric to the description.\nDuplicate: CMDB records that represent the same physical or logical asset multiple times\nRequired: Fields necessary to create or update a CI record in the CMDB\nOrphan: CMDB records that no longer maintain their logical or physical relationships with other CIs\nStale: CMDB records that are no longer actively updated, but remain stored in the database\nRecommended: Fields that support the accuracy, completeness, and usability of CI records in the CMDB\nAudit: Actual values of specified fields are compared to the expected values defined in a template"
  },
  {
    "id": 16,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. How will these improvements enhance the change management process?",
    "options": [
      "B. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. How will these improvements enhance the change management process?",
      "A. Automatically schedules and deploys changes without human review or approval",
      "B. Provides insight into the potential impact of the change",
      "C. Ensures that no changes result in service downtime, regardless of planning or execution",
      "D. Enables auto population of the assignment group field to dynamically route changes"
    ],
    "correctAnswer": [
      "B",
      "D\nServiceNow provides a suite of CMDB management tools designed to effectively ingest",
      "manage",
      "and maintain CIs and relationships. Drag and drop the design architecture to its management tool.\nAutomated agent-based solution running patterns: Agent Client Collector\nOrganization-built solution using transform maps: Import Sets\nThird-party integrations from other vendors: Service Graph Connector\nAutomated agentless solution running patterns: ServiceNow Discovery"
    ]
  },
  {
    "id": 17,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has a report in ServiceNow that lists all CMDB Services that do not have an owner and wants to use a ServiceNow Playbook. What Governance process play can prevent this from recurring?",
    "options": [
      "A. Make the field Managed by mandatory on all Cis",
      "B. Make the field Owned by mandatory",
      "C. Set a default value on the Service Owner field so that is never empty"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 18,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is creating technical documentation for stakeholders, which includes a list of attributes, Identification and Reconciliation Engine (IRE) rules, and suggested relationships for several classes. Which central location does the CMDB Administrator use to collect this information?",
    "options": [
      "A. CI Class Manager",
      "B. CMDB Data Manager",
      "C. CI Identifiers",
      "D. CMDB Workspace"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 19,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      "A. CMDB Query Builder",
      "B. Coverage window on the CMDB 360 tab",
      "C. Saved queries window on the CMDB 360 tab",
      "D. Saved queries window on the Insights tab"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 20,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Configuration Manager sets up the following data filter for a certification policy using CMDB Data Manager. \u2022 Table: Server [cmdb_ci_server] \u2022 Filter: Operating System | contains | Server OR Operating System | contains | Linux Which operating systems are affected by this policy?",
    "options": [
      "A. AIX",
      "B. Windows Server 2022 Datacenter",
      "C. Linux CentOS",
      "D. Windows 2019 Datacenter"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 21,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager needs to restrict the number of classes available in a Configuration Item reference field on an incident form. How does the Manager set Principal Classes?",
    "options": [
      "A. By using the Principal Class check box on the CI Class Manager's 'Attributes' tab for a Class",
      "B. By using the Principal Class check box on the CMDB Workspace",
      "C. By using the Principal Class attribute on the CI",
      "D. By using the Principal Class check box on the CI Class Manager's 'Basic Info' tab for a Class"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 22,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator is comparing the Unified Map to the Service Mapping map. What are additional capabilities of the Unified Map?",
    "options": [
      "A. Visibility to an application and the host it is installed on",
      "B. Number of levels displayed on a map can be modified",
      "C. Map nodes can be filtered based on user preferences",
      "D. Map can be zoomed in and out"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 23,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to 'User Group Field'?",
    "options": [
      "A. Managed By Group",
      "B. Support Group",
      "C. Assignment Group",
      "D. Owned by Group"
    ],
    "correctAnswer": [
      "A",
      "B"
    ]
  },
  {
    "id": 24,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator aims to utilize CSDM life cycle field mappings to better align with CSDM best practices. What is the next step to take after selecting the Enable Life Cycle Sync button?",
    "options": [
      "A. Fix the incorrect values in the Life Cycle Stage to match legacy values",
      "B. Activate the CSDM Life Cycle field mappings",
      "C. Resolve any incomplete field mappings identified in the Discrepancy Report"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 25,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The Configuration Management team finds value in the reports from CMDB 360/Multisource CMDB and wants to use it for all CI data. Which must be true in order for CMDB 360/Multisource CMDB to be able to report on and analyze that data?",
    "options": [
      "A. ServiceNow Discovery must be used to populate the CI data.",
      "B. Reconciliation rules with priorities must be configured.",
      "C. The CI data must go through the IR",
      "E.",
      "D. The CI data must be from an authorized Service Graph Connector."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 26,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to ensure that only relevant CIs from managed classes will be shown on Incident, Problem, and Change records. Which checkbox needs to be checked in the CI Class Manager for the CMDB Administrator to achieve the requested result?",
    "options": [
      "A. Principal Class",
      "B. Independent",
      "C. Extensible",
      "D. Main Record"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 27,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Where can an administrator perform Natural Language Queries (NLQ)?",
    "options": [
      "A. CMDB Health Dashboard",
      "B. CMDB Workspace",
      "C. CMDB Data Manager",
      "D. CI Class Manager"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 28,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Windows server is reclassified from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). Which process occurred?",
    "options": [
      "A. Class Switch",
      "B. Class Change",
      "C. Class Upgrade",
      "D. Class Downgrade"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 29,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "How do CMDB management tools and features within the CMDB governance pillar help organizations manage CIs and improve service delivery?",
    "options": [
      "A. Assist Integration choices",
      "B. Gain visibility and control",
      "C. Enhanced Service Management operations",
      "D. Reduced hardware costs"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 30,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A Configuration Manager wants to manage manually maintained data attributes of CIs. Which group values are automatically synchronized on CIs using Technology Management Offerings (Technical Service Offerings) and dynamic CI groups?",
    "options": [
      "A. Change group",
      "B. CMDB group",
      "C. Approval group",
      "D. Support group"
    ],
    "correctAnswer": [
      "A",
      "D"
    ]
  },
  {
    "id": 31,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CSDM Data Manager needs metrics on the alignment of Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) with best practices. Which tab in the CSDM Data Foundation Dashboard provides this information?",
    "options": [
      "A. Crawl",
      "B. Walk",
      "C. Fly",
      "D. Run"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 32,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is tasked with managing the CMDB and needs to define a new CI class to track a new type of equipment that has not been seen before. Which action adds a new CI class and ensures it integrates properly with the existing CMDB structure?",
    "options": [
      "A. Use Service Catalog to define the new CI class, as the CI Class Manager is only for service-related records and not for hardware CIs",
      "B. Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
      "C. Edit an existing CI class under CI Class Manager and add new fields specific to the new equipment type",
      "D. Use the CI Class Manager to create a new CI class but avoid setting up any inheritance, as CI classes should be independent of one another to maintain clarity"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 33,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "A CMDB Administrator seeks to understand the available tools for preventing, addressing, and remediating duplicate CIs. Drag and drop each feature with the corresponding outcome.",
    "sources": [
      "Certification Tasks",
      "CMDB Health Dashboard Correctness Scorecard",
      "De-Duplication Tasks",
      "De-Duplication Templates",
      "Duplicate CI Remediator"
    ],
    "targets": [
      "Can be assigned to groups for resolving duplicate CIs",
      "Offers insight into duplicate CIs within the CMDB",
      "Offers a solution to resolve de-duplication tasks in bulk",
      "Provides a wizard to resolve de-duplication tasks individually"
    ],
    "correctAnswer": {
      "De-Duplication Tasks": "Can be assigned to groups for resolving duplicate CIs",
      "CMDB Health Dashboard Correctness Scorecard": "Offers insight into duplicate CIs within the CMDB",
      "De-Duplication Templates": "Offers a solution to resolve de-duplication tasks in bulk",
      "Duplicate CI Remediator": "Provides a wizard to resolve de-duplication tasks individually"
    }
  },
  {
    "id": 34,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "What are the characteristics or functions of ServiceNow IntegrationHub ETL?",
    "options": [
      "A. Integrates third-party data into the CMDB or into non-CMDB tables",
      "B. Performs discovery data collection and updates the CMDB",
      "C. Uses the IRE to process and integrate data",
      "D. Imports Microsoft SCCM/Intune data into the CMDB"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 35,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs to ingest relevant data from Microsoft SCCM into the CMDB. Which ingestion method brings the fastest time to value?",
    "options": [
      "B. Which ingestion method brings the fastest time to value?",
      "A. Import Sets",
      "B. Agent Client Collector",
      "C. Service Graph Connectors",
      "D. IntegrationHub ETL"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 36,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      "B. Which CMDB Health Dashboard scorecard displays this information?",
      "A. Completeness",
      "B. Correctness",
      "C. Compliance"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 37,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Two new CI records are imported into the hardware class of the CMDB: CI1: The name of this CI record matches the name of an existing CI record in the CMDB. CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
    "options": [
      "B. CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMD",
      "B. Which is correct based on the identification rule and the imported CI records?",
      "A. CI1 and CI2 both will be updated with matching records.",
      "B. CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "C. CI1 will be inserted as new record and CI2 will be updated with matching record.",
      "D. CI1 and CI2 both will be inserted as new records."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 38,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator utilizing the CMDB Data Foundations Dashboard sees an issue and wants to run a playbook. Which types of documentation can they expect to be provided in a playbook?",
    "options": [
      "A. Problem Analysis",
      "B. Root Cause",
      "C. Problem Overview",
      "D. Automated Remediations"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 39,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "Given a list of Service types in the platform. Drag the appropriate service to its definition.",
    "sources": [
      "Application Service",
      "Business Service",
      "Technology Management Service (Technical Service)"
    ],
    "targets": [
      "Logical representation of a deploy system or application stack.",
      "Published to Service Owners and underpins one ore more business or application Services.",
      "Published to Business Users and underpins one ore more business capabilities."
    ],
    "correctAnswer": {
      "Application Service": "Logical representation of a deploy system or application stack",
      "Technology Management Service (Technical Service)": "Published to Service Owners and underpins one ore more business or application Services",
      "Business Service": "Published to Business Users and underpins one ore more business capabilities"
    }
  },
  {
    "id": 40,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator knows that the CMDB Data Foundation Dashboard is a resource to monitor and improve data quality. What is a benefit of this dashboard?",
    "options": [
      "A. Provides the ability to configure health-related metrics",
      "B. Provides key health related metrics to make decisions",
      "C. Provides the ability to resolve certification policy tasks"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 41,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Manager uses CMDB 360/Multisource CMDB to maintain and improve CMDB quality. Why would the Manager use CMDB 360/Multisource CMDB?",
    "options": [
      "A. To identify CI attributes from multiple data sources",
      "B. To ingest data from multiple data sources using Service Graph Connector(s)",
      "C. To ingest data from multiple data sources using Import Set(s)",
      "D. To populate the CMDB from multiple data sources"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 42,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The Configuration Management team wants to confirm that all servers in the CMDB actually exist in the data center. Which CMDB Data Manager policy type would the team create?",
    "options": [
      "A. Attestation",
      "B. Delete",
      "C. Retire",
      "D. Archive",
      "E. Certification"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 43,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has a number of similar de-duplication tasks that need to be remediated in bulk. How does the Administrator achieve this?",
    "options": [
      "A. Configure and run a custom de-duplication background script",
      "B. Create and run a de-duplication template",
      "C. Create de-duplication tasks manually and remediate each",
      "D. Utilize the Duplicate CI Remediator Wizard"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 44,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
    "options": [
      "A. Important actions tile under the Home tab",
      "B. Total status tile under the My Work tab",
      "C. CMDB feature adoption tile under the Insights tab"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 45,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Management team has decided to start taking advantage of the CMDB 360/Multisource CMDB functionality. Which system property must be enabled?",
    "options": [
      "A. glide.identification_engine.multisource_enabled",
      "B. glide.identification_engine.multisource.query.max.limit",
      "C. glide.identification_engine.multisource_cmdb_ci_enabled",
      "D. glide.identification_engine.multisource_non_cmdb_ci"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 46,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    "options": [
      "A. Life Cycle Stages [life_cycle_stage]",
      "B. Life Cycle Mapping [life_cycle_mapping]",
      "C. Life Cycle Controls [life_cycle_control]",
      "D. Life Cycle Stage Status [life_cycle_stage_status]"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 47,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has imported data into the ServiceNow CMDB from a third-party source using a Service Graph Connector. The Administrator wants to review specific field to field mappings for the import. Which feature will show that information?",
    "options": [
      "A. Integration Hub",
      "B. CMDB Integrations Dashboard",
      "C. IntegrationHub ETL"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 48,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator is considering whether to start using the playbooks provided on the CMDB Data Foundation Dashboard. What are the benefits to support the decision to leverage this feature?",
    "options": [
      "A. Offers insight into the downstream impacts of poorly performing metrics",
      "B. Offers remediation templates to improve poorly performing metrics",
      "C. Offers remediation options to address and improve poorly performing metrics",
      "D. Offers automated scripts to resolve poorly performing metrics"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 49,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class. CI Class Manager: -Managed by Group = Enterprise IT Services. Technical Service Offering: -Managed by Group = Windows Support, -Change Group = Change Management Team. What would be the Managed By Group for CIs from this class based on the configured values?",
    "options": [
      "A. Enterprise IT Services",
      "B. Change Management Team",
      "C. Windows Support"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 50,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
    "options": [
      "A. Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "B. Review both locations, update CIs with the correct location and delete the duplicate location",
      "C. Keep both locations as either can be used as a valid alternate location",
      "D. Use the Duplicate CI Remediator to merge the duplicate location records"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 51,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
    "options": [
      "A. Ensure that the business rule to update Asset fields on change on the CI table is active",
      "B. Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "C. Ensure that the business rule to update CI fields on change on the asset table is active",
      "D. Ensure one-to-one physical mapping between Asset and CI"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 52,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Change Request form is automatically populated after a CI is selected that references an appropriate change group?",
    "options": [
      "B. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Change Request form is automatically populated after a CI is selected that references an appropriate change group?",
      "A. Managed by Group",
      "B. Change Group",
      "C. Assignment Group",
      "D. Support Group",
      "E. Assigned to"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 53,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A Windows administration team wants a grouping of CIs using CMDB groups. Which methods can be used?",
    "options": [
      "A. Tag-based queries",
      "B. Encoded queries",
      "C. Scripted queries",
      "D. Saved queries"
    ],
    "correctAnswer": [
      "A",
      "B"
    ]
  },
  {
    "id": 54,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusions Rules tab available under a CI Class. How are these rules utilized by the IRE?",
    "options": [
      "B. The CMDB Administrator opens CI Class Manager and sees the Health Inclusions Rules tab available under a CI Class. How are these rules utilized by the IRE?",
      "A. To narrow the scope of CIs included in the identification process",
      "B. To reduce the data ingested into the CMDB",
      "C. To reconcile specific attributes based on data sources"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 55,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications. Which action does CSDM recommend to meet this goal?",
    "options": [
      "A. Work with the Database administration team to classify the data on each database that holds patient information, and then use Relationships to map that back to the Business Application.",
      "B. Create fields on the Business Application record to mark the Business Application as containing patient information, and then ask the Business Application owner to mark the application as having patient information or not.",
      "C. Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 56,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A data center has many servers. The CMDB Administrator wants to confirm that all servers exist. Which Data Manager policy type does the Administrator implement?",
    "options": [
      "A. Promotion",
      "B. Verification",
      "C. Attestation",
      "D. Certification"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 57,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A ServiceNow Administrator needs to create multiple new classes in the CMDB but wants to follow ServiceNow's best practices for naming CMDB tables to prevent technical debt. Which is the starting prefix for all custom CMDB tables?",
    "options": [
      "A. cmdb_ci",
      "B. u_cmdb_ci",
      "C. u_ci_cmdb",
      "D. ci_cmdb"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 58,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "ServiceNow Event Management significantly benefits from a well-maintained and properly populated CMDB. What are key advantages it provides to Event Management?",
    "options": [
      "B. What are key advantages it provides to Event Management?",
      "A. Mapped services provide visibility to users consuming the service",
      "B. Binding of alerts to specific CIs",
      "C. Correlation of alerts to knowledge base articles",
      "D. Mapped services provide visibility to the business impact of an alert"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 59,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A Configuration Manager is managing a CI class in the CMDB. The identification rule(s) needs an update. Where can the Configuration Manager view and configure the existing identification rule(s) for the class?",
    "options": [
      "B. The identification rule(s) needs an update. Where can the Configuration Manager view and configure the existing identification rule(s) for the class?",
      "A. API Integrations",
      "B. IRE Application",
      "C. CI Class Manager",
      "D. CI Identifiers module"
    ],
    "correctAnswer": [
      "C",
      "D"
    ]
  },
  {
    "id": 60,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "Drag and drop the application service type to the best description.",
    "sources": [
      "Dynamic CI Group",
      "Service Mapping (Connection Suggestion)",
      "Service Mapping (Top-down)",
      "Tag-Based"
    ],
    "targets": [
      "Recommended for mission-critical application services that require a precise approach using patterns",
      "Best fit to map cloud-native, container-based, or machine environments",
      "Ideal for custom-built applications and leverages fingerprinting to generate service maps in a timely manner",
      "Ideal for small application services that can be easily defined using filters and CMDB queries"
    ],
    "correctAnswer": {
      "Service Mapping (Top-down)": "Recommended for mission-critical application services that require a precise approach using patterns",
      "Service Mapping (Connection Suggestion)": "Best fit to map cloud-native, container-based, or machine environments",
      "Tag-Based": "Ideal for custom-built applications and leverages fingerprinting to generate service maps in a timely manner",
      "Dynamic CI Group": "Ideal for small application services that can be easily defined using filters and CMDB queries"
    }
  },
  {
    "id": 61,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A hospital has received a new CT Scanner. The inventory management team has created a catalog item doctors can use to schedule patients for scans. What CSDM domain should the inventory management team map the catalog item to?",
    "options": [
      "A. Design and Planning (Design)",
      "B. Build and Integration (Build)",
      "C. Service Delivery (Manage Technical Service)",
      "D. Foundation",
      "E. Service Consumption (Sell/Consume)"
    ],
    "correctAnswer": "E"
  },
  {
    "id": 62,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "An Enterprise Architect of a financial services company is working across the enterprise and wants to track their capabilities. Which CSDM 5 domain is used?",
    "options": [
      "A. Foundation",
      "B. Build and Integration (Build)",
      "C. Design and Planning (Design)",
      "D. Service Consumption (Sell/Consume)",
      "E. Service Delivery (Manage Technical)"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 63,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. Which field is used to calculate the duration of this metric?",
    "options": [
      "A. Last modified on (last_modified)",
      "B. Created (sys_created_on)",
      "C. Updated (sys_updated_on)",
      "D. First discovered (first_discovered)",
      "E. Most recent discovery (last_discovery)"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 64,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Architect intends to populate the CMDB using the CSDM guidance. Which key stakeholders from the organization should be involved in decisions regarding population of the CMDB using the CSDM Crawl Stage?",
    "options": [
      "A. Business Service Manager, Technology Service Owner",
      "B. Application Owner, Application Service Owner",
      "C. Customer Service Manager, Infrastructure Manager"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 65,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has taken over management of a ServiceNow instance and has determined there are multiple deficiencies in the CMDB. During review of the CMDB Data Foundations Dashboard, the Administrator sees that ServiceNow offers Remediation Playbooks. How can Playbooks assist the Administrator in resolving these issues?",
    "options": [
      "B. During review of the CMDB Data Foundations Dashboard, the Administrator sees that ServiceNow offers Remediation Playbooks. How can Playbooks assist the Administrator in resolving these issues?",
      "A. Playbooks can automatically track common CMDB issues and outputmetrics.",
      "B. Playbooks can be installed in the instance to automatically fix issues.",
      "C. Playbooks can help analyze and fix issues."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 66,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What is the relationship between an application and a server?",
    "options": [
      "A. Application > Uses::Used by > Server",
      "B. Application > Runs::Runs On > Server",
      "C. Application > Runs on:: Runs > Server",
      "D. Application > Used by::Uses > Server"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 67,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    "options": [
      "A. Create a new CI class specifically for non-discoverable attributes",
      "B. Use the CMDB Reconciliation Engine to update the attributes",
      "C. Use a scheduled data import to update the attributes from an external source"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 68,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Service Desk Manager wants to leverage the Unified Map to find active incidents or problems for a selected CI. Which panel will give the manager visibility and details?",
    "options": [
      "A. Overview",
      "B. Application services",
      "C. Related items",
      "D. Attributes"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 69,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Service Portfolio Manager wants to know what Application Services their Business Service Offerings depend on. What stage of CSDM would map this relationship?",
    "options": [
      "A. Fly",
      "B. Crawl",
      "C. Foundation",
      "D. Run",
      "E. Walk"
    ],
    "correctAnswer": "E"
  },
  {
    "id": 70,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs to track which CIs and CI classes are missing key data. Which CMDB Health Dashboard scorecard supports tracking this requirement?",
    "options": [
      "A. Compliance",
      "B. Correctness",
      "C. Completeness"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 71,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "During a CMDB Implementation, a team member is tasked with ensuring the accuracy and completeness of CI data. This person is also responsible for maintaining data quality and resolving discrepancies. Which role is responsible for these tasks?",
    "options": [
      "A. Service Owner",
      "B. CMDB Architect",
      "C. Configuration Manager",
      "D. IT Asset Manager"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 72,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs insights into how their CMDB is configured according to ServiceNow recommended practice. Which should be used?",
    "options": [
      "A. CMDB Data Foundation Dashboard",
      "B. CMDB Workspace",
      "C. CMDB Health Dashboard",
      "D. CMDB Data Manager"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 73,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A customer wants to model their business applications and would like to capture different types of data that includes Personally Identifiable Information (PII) data. Based on these requirements, which CMDB class needs to be leveraged to achieve this?",
    "options": [
      "A. Business Capability",
      "B. API Component",
      "C. Information Object",
      "D. Data Classification"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 74,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity?",
    "options": [
      "A. Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
      "B. Modify an existing class",
      "C. Add a new class under an appropriate parent class",
      "D. Delete an unused class, and replace it with the new one"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 75,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Data Manager needs to access the ServiceNow platform to create, publish, and manage policies that automate and govern CI lifecycle operations, ensuring the CMDB remains healthy and efficient. Where can the Data Manager do this?",
    "options": [
      "A. CMDB Workspace CMDB 360 tab",
      "B. Service Operations Workspace",
      "C. CI Class Manager",
      "D. CMDB Workspace Management tab"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 76,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What ensures data volume in the CMDB is manageable?",
    "options": [
      "A. Scheduled Jobs",
      "B. Business Rules",
      "C. Archive Policies"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 77,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Which are business values of CMDB?",
    "options": [
      "A. Collecting and managing financial data",
      "B. Streamlining incident and change management",
      "C. Strengthening operational resiliency",
      "D. Automating maintenance for CI relationships"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 78,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Which ServiceNow solution creates automatic relationships?",
    "options": [
      "A. Discovery",
      "B. Workflow Studio",
      "C. Service Mapping",
      "D. IntegrationHub ETL"
    ],
    "correctAnswer": [
      "A",
      "C\nYes",
      "since the provided text contains many variations and duplicate OCR reads",
      "there are still more unique questions remaining in the document.\nHere is the next batch of extracted questions (Questions 81-100) following your exact format:"
    ]
  },
  {
    "id": 79,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "Some steps need to be taken to transition from using different status attributes in the CMDB to life cycle objects. Drag and drop the objects/attributes to the description.",
    "sources": [
      "life_cycle_stage_status",
      "life_cycle_object",
      "life_cycle_mapping",
      "life_cycle_stage"
    ],
    "targets": [
      "This table is pre-populated with mappings for legacy status value, based on its table, to the best-fit CSDM life-cycle value pair.",
      "This is a record attribute that reflects a meta-level state of the record life cycle.",
      "This is a record attribute that reflects a sub-level state of the record life cycle.",
      "This table uses the type of CI (hardware, document, logical, etc.) to determine which sub-level life cycle state values are available."
    ],
    "correctAnswer": {
      "life_cycle_mapping": "This table is pre-populated with mappings...",
      "life_cycle_stage": "This is a record attribute that reflects a meta-level state...",
      "life_cycle_stage_status": "This is a record attribute that reflects a sub-level state...",
      "life_cycle_object": "This table uses the type of CI..."
    }
  },
  {
    "id": 80,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB?",
    "options": [
      "A. A new Apache Web Server CI is created.",
      "B. The Apache Web Server CI will be reclassified as a Web Server CI.",
      "C. The existing Apache Web Server CI will be reconciled and its version will be updated.",
      "D. A duplication error will occur."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 81,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. The Configuration Management team is working to ensure that the Change Group field is populated for all managed CIs. As a result, which base system field on the incident form will be automatically populated alter selecting a CI?",
    "options": [
      "A. Change group",
      "B. Assignment group",
      "C. Managed by group",
      "D. Approval group"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 82,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    "options": [
      "A. CMDB Health Dashboard",
      "B. De-duplication templates",
      "C. CMDB Data Manager"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 83,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    "options": [
      "A. Compliance",
      "B. Audit",
      "C. Attestation",
      "D. Certification"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 84,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Configuration Management requires an accurate inventory of devices to be reflected in theCMDB. Which are common use cases for using Agent Client Collector (ACC)?",
    "options": [
      "B. Which are common use cases for using Agent Client Collector (ACC)?",
      "A. Network devices in the DMZ",
      "B. Devices in secure environments",
      "C. Servers in the data center",
      "D. Devices that intermittently connect to the network"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 85,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
    "options": [
      "B. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
      "A. Configure data refresh rules with a specific time period",
      "B. Assign a priority to each data source in the reconciliation rules",
      "C. Manually run the data source updates in the correct order",
      "D. Assign a run order to each data source in the identification rules"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 86,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs. Which policy type should be used to accomplish this goal?",
    "options": [
      "A. Delete",
      "B. Attestation",
      "C. Certification",
      "D. Retire"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 87,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator wants to create a CMDB query to find all databases located in Seattle that are connected to application services. They also want to include incidents related to those databases. Which actions does the company take to build this query?",
    "options": [
      "A. Add a filter to the database node for location = Seattle",
      "B. Add to the canvas the Incident table from the Non-CMDB Tables list",
      "C. Set the relationship level to 'Up to 2nd level relationships'",
      "D. Add property columns to the application service node"
    ],
    "correctAnswer": [
      "A",
      "B"
    ]
  },
  {
    "id": 88,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator identifies duplicate CIs. One was created by a manual import, and the other one was created by automated discovery. The discovered CI has the latest IP address, while the manually imported CI has an accurate relationship to a critical business application. How does the Administrator use the Duplicate CI Remediator to resolve this issue?",
    "options": [
      "A. Merge the two CIs automatically, retaining all attributes from the discovered CI",
      "B. Retain the discovered CI, and delete the manually imported CI",
      "C. Retain the discovered CI, but merge the relationship from the manually imported CI",
      "D. Retain the manually imported CI, and delete the discovered CI"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 89,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM?",
    "options": [
      "A. Determine the root cause of the change issue",
      "B. Identify blackout windows for the change",
      "C. Understand the impact of the change on services",
      "D. Route the change dynamically"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 90,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "A new ServiceNow customer is assembling a Configuration Management team to support their CMDB. Drag each role to its corresponding job description.",
    "sources": [
      "CI Analyst",
      "CMDB Process Owner",
      "Configuration Manager/CMDB Admin",
      "Service or Product Owner"
    ],
    "targets": [
      "Has read-only access to CMDB data and to basic user interface such as CMDB reports and dashboards",
      "Accountable for managing all elements that make up a portfolio throughout their entire lifecycle",
      "Manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records",
      "Obtains highest level role for CMDB privileges"
    ],
    "correctAnswer": {
      "CI Analyst": "Has read-only access to CMDB data...",
      "Service or Product Owner": "Accountable for managing all elements...",
      "Configuration Manager/CMDB Admin": "Manages assigned CI tables...",
      "CMDB Process Owner": "Obtains highest level role..."
    }
  },
  {
    "id": 91,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to adhere to lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store the information that will be used to satisfy the audits?",
    "options": [
      "A. Customer Service Offerings and Databases",
      "B. Business Applications and Information Objects",
      "C. Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 92,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager wants to use the Unified Map. Where would it be accessed?",
    "options": [
      "A. CI Class Manager",
      "B. CMDB Workspace",
      "C. CMDB Data Manager"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 93,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the live discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
    "options": [
      "B. What can the Data Owner do in this case?",
      "A. CMBD 360/Multisource is a platform product that can be used immediately.",
      "B. ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules.",
      "C. The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 94,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": [
      "A. Many-to-one",
      "B. Many-to-many",
      "C. One-to-many",
      "D. One-to-one"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 95,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
    "options": [
      "A. Use the CSDM Data Foundations Dashboard",
      "B. Use the default configured CMDB Health Dashboard",
      "C. Start the ServiceNow Health Scan"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 96,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What is the difference between Data Certification and Attestation policies when managing a CI?",
    "options": [
      "A. Attestation can be scheduled, while Data Certification cannot be scheduled.",
      "B. Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the CI still exists.",
      "C. Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI.",
      "D. Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 97,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      "A. Enterprise Architect",
      "B. Application Service Owners",
      "C. Technology Service Owners"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 98,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    "options": [
      "A. Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
      "B. Improves the implementation velocity of APM Foundation for future business application rationalization",
      "C. Enables impact assessments for incident, problem, and change on Business Services"
    ],
    "correctAnswer": "C\nHere is the final batch of unique questions extracted from the provided document, formatted exactly as requested:"
  },
  {
    "id": 99,
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
    "id": 100,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Administrator has set-up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field. Given the data (Tivoli: 4,096, ServiceNow: 4,096, LANDesk: 2,048, Altiris: 8,192) in the Multisource CMDB, which value would be added to the CMDB for RAM for a 'Server' CI?",
    "options": [
      "A. 2,048 MB",
      "B. 4,096 MB",
      "C. 8,192 MB"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 101,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    "options": [
      "A. All",
      "B. Child",
      "C. Added",
      "D. Derived"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 102,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard for the Server class which consists of a total of 60,000 servers in the CMDB. For the Duplicate metric, it shows Healthy CIs/Evaluated as 59,000/60,000. For the Orphan metric, it shows Healthy CIs/Evaluated as 45,000/50,000. Which configuration explains the difference in the scope of Server CIs (60,000 vs. 50,000) evaluated between the two metrics?",
    "options": [
      "B. For the Duplicate metric, it shows Healthy CIs/Evaluated as 59,000/60,000. For the Orphan metric, it shows Healthy CIs/Evaluated as 45,000/50,000. Which configuration explains the difference in the scope of Server CIs (60,000 vs. 50,000) evaluated between the two metrics?",
      "A. The Orphan metric has a CMDB Group configured for the Server class.",
      "B. The Duplicate metric has a Health Inclusion rule configured for the Server class.",
      "C. The Orphan metric has a Health Inclusion rule configured for the Server class.",
      "D. The Duplicate metric has a CMDB Group configured for the Server class."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 103,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A healthcare provider faces a critical incident affecting its patient management system. The provider needs to determine the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage?",
    "options": [
      "A. Service Offerings by Department or Location",
      "B. Affected CI [task_ci] related list",
      "C. Application Service environment attribute",
      "D. Incident history of similar CIs"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 104,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
    "options": [
      "A. Create a business rule",
      "B. Create a scheduled job",
      "C. Create an archive policy"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 105,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. Based on the request of the management, a CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard?",
    "options": [
      "A. Most Reported",
      "B. Last Created",
      "C. Last Updated",
      "D. Smallest Value"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 106,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Configuration Management needs to ensure data quality for all CIs in the CMDB. What areas of data quality for CIs are in the CMDB Health Dashboard?",
    "options": [
      "B. What areas of data quality for CIs are in the CMDB Health Dashboard?",
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
    "id": 107,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group?",
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
    "id": 108,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A Configuration Management Process Owner is preparing solution options for presentation to the technical governance board for ingesting custom CIs to the CMDB. The solution needs to align with best practice, minimize the cost of future work (technical debt) and ensure compliance with future upgrades. Which solutions accomplish this?",
    "options": [
      "B. The solution needs to align with best practice, minimize the cost of future work (technical debt) and ensure compliance with future upgrades. Which solutions accomplish this?",
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
    "id": 109,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    "options": [
      "B. Which roles are minimally needed to add this custom CI class?",
      "A. data_classification_admin and personalize_dictionary",
      "B. cmdb_inst_admin and personalize_form",
      "C. itil_admin and personalize_form",
      "D. sn_cmdb_admin and personalize_dictionary"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 110,
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
    "id": 111,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has installed a Service Graph Connector and customized a script transform. What will happen on subsequent upgrades if the default definition of the script transform is updated?",
    "options": [
      "A. The upgrade stops and reports an error.",
      "B. A skipped change is created and no change is made to the script transform definition.",
      "C. The Service Graph Connector upgrade refuses to start."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 112,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
    "options": [
      "A. CMDB Data Manager",
      "B. CI Class Manager",
      "C. System Properties",
      "D. CMDB Workspace"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 113,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service mapping be used as part of Change Management?",
    "options": [
      "A. To identify which devices will go offline first",
      "B. To understand the business impact of CIs",
      "C. To understand the physical location of CIs"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 114,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is implementing a Vulnerability Response or Security Incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. Which Get Well Playbook from the CSDM Data Foundations Dashboard helps with this?",
    "options": [
      "A. Percentage of Custom Status Values for CI Life Cycle Stages",
      "B. Named Product Models without Product Owners",
      "C. Locations without a Parent Location",
      "D. Application Services with Business Application Relationships"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 115,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Incident form is automatically populated after a CI is selected that references an appropriate support group?",
    "options": [
      "B. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Incident form is automatically populated after a CI is selected that references an appropriate support group?",
      "A. Assignment Group",
      "B. Support Group",
      "C. Approval Group",
      "D. Managed by Group",
      "E. Change Group"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 116,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has set-up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field. Given the data (Tivoli: 4,096, ServiceNow: 4,096, LANDesk: 2,048, Altiris: 8,192) in the Multisource CMDB, which value would be added to the CMDB for RAM for a 'Server' CI?",
    "options": [
      "A. 2,048 MB",
      "B. 4,096 MB",
      "C. 8,192 MB"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 117,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    "options": [
      "A. The de-duplication dashboard on the CMDB workspace",
      "B. My Tasks in the Application Navigator",
      "C. The de-duplication task module"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 118,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    "options": [
      "A. The de-duplication dashboard on the CMDB workspace",
      "B. My Tasks in the Application Navigator",
      "C. The de-duplication task module"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 119,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
    "options": [
      "A. Ensure that the business rule to update Asset fields on change on the CI table is active",
      "B. Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "C. Ensure that the business rule to update CI fields on change on the asset table is active",
      "D. Ensure one-to-one physical mapping between Asset and CI"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 120,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    "options": [
      "A. Use the CMDB Reconciliation Engine to update the attributes",
      "B. Use a scheduled data import to update the attributes from an external source",
      "C. Create a new CI class specifically for non-discoverable attributes"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 121,
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
    "id": 122,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group?",
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
    "id": 123,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A Configuration Management Process Owner is preparing solution options for presentation to the technical governance board for ingesting custom CIs to the CMDB. The solution needs to align with best practice, minimize the cost of future work (technical debt) and ensure compliance with future upgrades. Which solutions accomplish this?",
    "options": [
      "B. The solution needs to align with best practice, minimize the cost of future work (technical debt) and ensure compliance with future upgrades. Which solutions accomplish this?",
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
    "id": 124,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
    "options": [
      "A. CMDB Data Manager",
      "B. CI Class Manager",
      "C. System Properties",
      "D. CMDB Workspace"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 125,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    "options": [
      "B. Which roles are minimally needed to add this custom CI class?",
      "A. data_classification_admin and personalize_dictionary",
      "B. cmdb_inst_admin and personalize_form",
      "C. itil_admin and personalize_form",
      "D. sn_cmdb_admin and personalize_dictionary"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 126,
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
    "id": 127,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What is the relationship between an application and a server?",
    "options": [
      "A. Application > Runs on::Runs > Server",
      "B. Application > Runs::Runs On > Server",
      "C. Application > Used by::Uses > Server",
      "D. Application > Uses::Used by > Server"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 128,
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
    "id": 129,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "Drag and drop the CMDB Health Dashboard metric to the description.",
    "sources": [
      "Audit",
      "Duplicate",
      "Orphan",
      "Recommended",
      "Required",
      "Stale"
    ],
    "targets": [
      "CMDB records that represent the same physical or logical asset multiple times",
      "Fields necessary to create or update a CI record in the CMDB",
      "CMDB records that no longer maintain their logical or physical relationships with other CIs",
      "CMDB records that are no longer actively updated, but remain stored in the database",
      "Fields that support the accuracy, completeness, and usability of CI records in the CMDB",
      "Actual values of specified fields are compared to the expected values defined in a template"
    ],
    "correctAnswer": {
      "Duplicate": "CMDB records that represent the same physical or logical asset multiple times",
      "Required": "Fields necessary to create or update a CI record in the CMDB",
      "Orphan": "CMDB records that no longer maintain their logical or physical relationships with other CIs",
      "Stale": "CMDB records that are no longer actively updated, but remain stored in the database",
      "Recommended": "Fields that support the accuracy, completeness, and usability of CI records in the CMDB",
      "Audit": "Actual values of specified fields are compared to the expected values defined in a template"
    }
  },
  {
    "id": 130,
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
    "id": 131,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A healthcare provider faces a critical incident affecting its patient management system. The provider needs to determine the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage?",
    "options": [
      "A. Affected CI [task_ci] related list",
      "B. Service Offerings by Department or Location",
      "C. Incident history of similar CIs",
      "D. Application Service environment attribute"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 132,
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
    "id": 133,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    "options": [
      "A. Automates the enforcement of relationship rules between CIs in the CMDB",
      "B. Encrypts archived records for enhanced security",
      "C. Automates the archival and deletion of records based on retention policies"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 134,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "ServiceNow provides a suite of CMDB management tools designed to effectively ingest, manage, and maintain CIs and relationships. Drag and drop the design architecture to its management tool.",
    "sources": [
      "Agent Client Collector",
      "Import Sets",
      "Service Graph Connector",
      "ServiceNow Discovery"
    ],
    "targets": [
      "Automated agent-based solution running patterns",
      "Organization-built solution using transform maps",
      "Third-party integrations from other vendors",
      "Pre-built store integration solutions that require minimal customization"
    ],
    "correctAnswer": {
      "Agent Client Collector": "Automated agent-based solution running patterns",
      "Import Sets": "Organization-built solution using transform maps",
      "Service Graph Connector": "Third-party integrations from other vendors",
      "ServiceNow Discovery": "Pre-built store integration solutions..."
    }
  },
  {
    "id": 135,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Incident form is automatically populated after a CI is selected that references an appropriate support group?",
    "options": [
      "B. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Incident form is automatically populated after a CI is selected that references an appropriate support group?",
      "A. Support Group",
      "B. Change Group",
      "C. Managed by Group",
      "D. Assignment Group",
      "E. Approval Group"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 136,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
    "options": [
      "A. Use the CSDM Data Foundations Dashboard",
      "B. Use the default configured CMDB Health Dashboard",
      "C. Start the ServiceNow Health Scan"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 137,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator wants to run the Services Have Owners Identified playbook to remediate the issues shown in the CMDB Data Foundations Dashboard. Which remediation plays would be used?",
    "options": [
      "A. Fix Data",
      "B. Govern Data",
      "C. Report Data",
      "D. Analyze Data"
    ],
    "correctAnswer": [
      "A",
      "B"
    ]
  },
  {
    "id": 138,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the live discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
    "options": [
      "B. What can the Data Owner do in this case?",
      "A. The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled.",
      "B. CMBD 360/Multisource is a platform product that can be used immediately.",
      "C. ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules."
    ],
    "correctAnswer": "A"
  },
  {
    "id": 139,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs to import external data into the CMDB. As the CMDB Administrator wants to reduce the risk for creating duplicates and to update information from unauthorized sources, it has to be ensured that the Identification and Reconciliation API will not be bypassed. What is the recommended method to import data into the CMDB utilizing the Identification and Reconciliation API?",
    "options": [
      "B. As the CMDB Administrator wants to reduce the risk for creating duplicates and to update information from unauthorized sources, it has to be ensured that the Identification and Reconciliation API will not be bypassed. What is the recommended method to import data into the CMDB utilizing the Identification and Reconciliation API?",
      "A. IntegrationHub ETL",
      "B. Table API (REST API or SOAP API)",
      "C. Import Sets and Transform Maps"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 140,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM?",
    "options": [
      "A. Understand the impact of the change on services",
      "B. Identify blackout windows for the change",
      "C. Route the change dynamically",
      "D. Determine the root cause of the change issue"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 141,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB?",
    "options": [
      "A. The Apache Web Server CI will be reclassified as a Web Server CI.",
      "B. A duplication error will occur.",
      "C. A new Apache Web Server CI is created.",
      "D. The existing Apache Web Server CI will be reconciled and its version will be updated."
    ],
    "correctAnswer": "D"
  },
  {
    "id": 142,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    "options": [
      "A. My Tasks in the Application Navigator",
      "B. The de-duplication dashboard on the CMDB workspace",
      "C. The de-duplication task module"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 143,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    "options": [
      "A. Life Cycle Mapping [life_cycle_mapping]",
      "B. Life Cycle Stage Status [life_cycle_stage_status]",
      "C. Life Cycle Stages [life_cycle_stage]",
      "D. Life Cycle Controls [life_cycle_control]"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 144,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "The Configuration Manager is preparing the justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard?",
    "options": [
      "A. It helps detect and eliminate duplicate records in the CMD",
      "B.",
      "B. It enables monitoring and tracking of CMDB health over time.",
      "C. It provides actionable insights to improve data quality and completeness.",
      "D. It automates the approval process for change management."
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 145,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB HealthDashboard scorecard displays this information?",
    "options": [
      "B. Which CMDB HealthDashboard scorecard displays this information?",
      "A. Correctness",
      "B. Completeness",
      "C. Compliance"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 146,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)?",
    "options": [
      "B. Which are common use cases for using Agent Client Collector (ACC)?",
      "A. Servers in the data center",
      "B. Devices in secure environments",
      "C. Network devices in the DMZ",
      "D. Devices that intermittently connect to the network"
    ],
    "correctAnswer": [
      "A",
      "B"
    ]
  },
  {
    "id": 147,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator is implementing a Vulnerability Response or Security Incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. Which Get Well Playbook from the CSDM Data Foundations Dashboard helps with this?",
    "options": [
      "A. Locations without a Parent Location",
      "B. Named Product Models without Product Owners",
      "C. Application Services with Business Application Relationships",
      "D. Percentage of Custom Status Values for CI Life Cycle Stages"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 148,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. The Configuration Management team is working to ensure that the Change Group field is populated for all managed CIs. As a result, which base system field on the incident form will be automatically populated alter selecting a CI?",
    "options": [
      "A. Managed by group",
      "B. Approval group",
      "C. Assignment group",
      "D. Change group"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 149,
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
    "id": 150,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Platform Owner is collaborating with stakeholders in the manufacturing industry to align their CIs with the CSDM 5 framework. They need to map production line monitoring systems to the appropriate CSDM domain. Which CSDM 5 domain does the Platform Owner use?",
    "options": [
      "A. Service Delivery (Manage Technical)",
      "B. Foundation",
      "C. Build and Integration (Build)",
      "D. Design and Planning (Design)",
      "E. Service Consumption (Sell/Consume)"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 151,
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
    "id": 152,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. Based on the request of the management, a CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard?",
    "options": [
      "A. Last Created",
      "B. Most Reported",
      "C. Last Updated",
      "D. Smallest Value"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 153,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    "options": [
      "A. Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
      "B. Improves the implementation velocity of APM Foundation for future business application rationalization",
      "C. Enables impact assessments for incident, problem, and change on Business Services"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 154,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      "A. Saved queries window on the CMDB 360 tab",
      "B. CMDB Query Builder",
      "C. Coverage window on the CMDB 360 tab",
      "D. Saved queries window on the Insights tab"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 155,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What is the difference between Data Certification and Attestation policies when managing a CI?",
    "options": [
      "A. Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the CI still exists.",
      "B. Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual.",
      "C. Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI.",
      "D. Attestation can be scheduled, while Data Certification cannot be scheduled."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 156,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
    "options": [
      "A. Create a scheduled job",
      "B. Create a business rule",
      "C. Create an archive policy"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 157,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The following identification rule for a CI class has been defined: Hardware Rule (Priority 100: Serial Number). Two new CI records are imported into the hardware class of the CMDB. CI1: The name of this CI record matches the name of an existing CI record in the CMDB. CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
    "options": [
      "B. CI1: The name of this CI record matches the name of an existing CI record in the CMD",
      "B. CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMD",
      "B. Which is correct based on the identification rule and the imported CI records?",
      "A. CI1 and CI2 both will be inserted as new records.",
      "B. CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "C. CI1 will be inserted as new record and CI2 will be updated with matching record."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 158,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs. Which policy type should be used to accomplish this goal?",
    "options": [
      "A. Delete",
      "B. Certification",
      "C. Attestation",
      "D. Retire"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 159,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
    "options": [
      "A. Ensure that the business rule to update CI fields on change on the asset table is active",
      "B. Ensure one-to-one physical mapping between Asset and CI",
      "C. Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "D. Ensure that the business rule to update Asset fields on change on the CI table is active"
    ],
    "correctAnswer": [
      "A",
      "D"
    ]
  },
  {
    "id": 160,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
    "options": [
      "B. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
      "A. Assign a run order to each data source in the identification rules",
      "B. Configure data refresh rules with a specific time period",
      "C. Assign a priority to each data source in the reconciliation rules",
      "D. Manually run the data source updates in the correct order"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 161,
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
    "id": 162,
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
    "id": 163,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": [
      "A. Many-to-one",
      "B. One-to-many",
      "C. Many-to-many",
      "D. One-to-one"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 164,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "A manufacturing organization has implemented Incident Management in ServiceNow and wants to integrate additional products to enhance its functionality. Drag each ServiceNow product to the value it brings to supporting Incident Management.",
    "sources": [
      "Discovery",
      "Hardware Asset Management",
      "Risk Management",
      "Service Portfolio Management"
    ],
    "targets": [
      "Delivers asset actions and events for the management and maintenance of assets during incidents",
      "Supplies critical IT and financial risk data, enabling the team to assess the broader impact of incidents on business operations",
      "Offers detailed operational-level data on hardware and application CIs to improve incident resolution",
      "Provides life cycle information about services, helping to align incidents with the status and history of services"
    ],
    "correctAnswer": {
      "Hardware Asset Management": "Delivers asset actions and events...",
      "Risk Management": "Supplies critical IT and financial risk data...",
      "Discovery": "Offers detailed operational-level data...",
      "Service Portfolio Management": "Provides life cycle information..."
    }
  },
  {
    "id": 165,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity?",
    "options": [
      "A. Delete an unused class, and replace it with the new one",
      "B. Add a new class under an appropriate parent class",
      "C. Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
      "D. Modify an existing class"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 166,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What ensures data volume in the CMDB is manageable?",
    "options": [
      "A. Scheduled Jobs",
      "B. Business Rules",
      "C. Archive Policies"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 167,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A Configuration Manager wants to use the Unified Map. Where would it be accessed?",
    "options": [
      "A. CMDB Data Manager",
      "B. CMDB Workspace",
      "C. CI Class Manager"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 168,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    "options": [
      "A. Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
      "B. Certification Filter, Certification Template, Audit",
      "C. Certification Policies, Data Filters, Scheduled Jobs",
      "D. Stale, Orphan, Duplicate"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 169,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator has been tasked with gathering information for a presentation to leadership. The Administrator needs to provide Duplicate CI, Orphan CI and Stale CI metrics. Which scorecard provides this information on the CMDB Health Dashboard?",
    "options": [
      "A. Correctness",
      "B. Completeness",
      "C. Compliance"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 170,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "What is the relationship between an application and a server?",
    "options": [
      "A. Application > Uses::Used by > Server",
      "B. Application > Runs on::Runs > Server",
      "C. Application > Used by::Uses > Server",
      "D. Application > Runs::Runs On > Server"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 171,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A service owner is using Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel?",
    "options": [
      "A. Managed by group",
      "B. Discovery source",
      "C. Business criticality",
      "D. CI type"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 172,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    "options": [
      "A. Compliance",
      "B. Audit",
      "C. Certification",
      "D. Attestation"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 173,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group?",
    "options": [
      "A. Owned by Group",
      "B. Managed by Group",
      "C. Approval Group",
      "D. Support Group"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 174,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    "options": [
      "A. CMDB Data Manager",
      "B. De-duplication templates",
      "C. CMDB Health Dashboard"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 175,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    "options": [
      "A. All",
      "B. Added",
      "C. Child",
      "D. Derived"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 176,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
    "options": [
      "A. Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "B. Use the Duplicate CI Remediator to merge the duplicate location records",
      "C. Keep both locations as either can be used as a valid alternate location",
      "D. Review both locations, update CIs with the correct location and delete the duplicate location"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 177,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Configuration Management needs to ensure data quality for all CIs in the CMDB. What areas of data quality for CIs are in the CMDB Health Dashboard?",
    "options": [
      "B. What areas of data quality for CIs are in the CMDB Health Dashboard?",
      "A. Duplicate CIs",
      "B. Missing CIs",
      "C. Stale CIs",
      "D. Downgraded CIs",
      "E. Upgraded CIs"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 178,
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
  }
];
