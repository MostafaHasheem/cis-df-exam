export const bankMeta = {
  title: 'Exam Model 3',
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
    "text": "Choose 1 option. A CMDB Administrator is beginning the journey of populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed. Which governance management tool will accomplish this?",
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
    "text": "Choose 2 options. What types of policies can be created within CMDB Data Manager?",
    "options": [
      "A. De-duplication",
      "B. Archive",
      "C. Reconciliation",
      "D. Retire"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 3,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Choose 2 options. A CMDB Administrator wants to educate the team on the various actions that can be performed within the CMDB Workspace. What actions can be initiated from the CMDB Workspace?",
    "options": [
      "A. Execute ServiceNow Discovery",
      "B. Create a CMDB Data Manager certification policy",
      "C. Remediate duplicate CI records",
      "D. Create a new CMDB class"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 4,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator changes the query for the SCCM Service Graph Connector. What is the impact of this change?",
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
    "text": "Choose 1 option. Using existing baseline Data Manager policies, what condition must a CI meet before it can be archived or deleted?",
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
    "text": "Choose 1 option. A CSDM Data Manager needs metrics on the alignment of product models, locations, and business units with best practices. Which tab in the CSDM Data Foundations Dashboard provides this information?",
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
    "text": "Choose 1 option. User endpoint devices are Imported into the CMDB and populate the 'Assigned to [assigned_to]' field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
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
    "text": "Choose 1 option. A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
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
    "text": "Choose 1 option. A CMDB Administrator wants to ensure all short-lived CIs that have not been discovered in the past week are removed. After retiring the CI records, which recommended action does the CMDB Administrator take?",
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
    "text": "Choose 1 option. A CMDB Administrator group aims to establish a process for receiving task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules can be leveraged to configure recommended fields and generate task records in cases where these fields are missing for Linux servers in the CMDB?",
    "options": [
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
    "text": "Choose 1 option. A CMDB Administrator is asked to create a query using the CMDB Query Builder that displays all operational CIs belonging to a specific application service. Which steps provide the desired outcome?",
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
    "text": "Choose 2 options. What is the value of using the CMDB in security operations?",
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
    "text": "Choose 1 option. A CMDB Administrator needs to set a CI Class as a Principal Class. Which CI Class Manager tab would need to be accessed?",
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
    "text": "Choose 1 option. An organization utilizes multiple data sources to update its CMDB, each assigned a different priority level. A high-priority data source is scheduled to update server records weekly. However, due to an integration issue, the high-priority data source stops updating the records. Which configuration can be used to allow a lower-priority data source to update records after a specified period of inactivity from the higher-priority source?",
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
    "text": "Choose 1 option. A CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. What is the default duration of this metric?",
    "options": [
      "A. 24 hours",
      "B. 30 days",
      "C. 7 days",
      "D. 60 days"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 16,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": "Drag and drop the CMDB Health Dashboard metric to the description.",
    "sources": [
      "CMDB records that represent the same physical or logical asset multiple times",
      "Fields necessary to create or update a CI record in the CMDB",
      "CMDB records that no longer maintain their logical or physical relationships with other CIs",
      "CMDB records that are no longer actively updated, but remain stored in the database",
      "Fields that support the accuracy, completeness, and usability of CI records in the CMDB",
      "Actual values of specified fields are compared to the expected values defined in a template"
    ],
    "targets": [
      "Duplicate",
      "Required",
      "Orphan",
      "Stale",
      "Recommended",
      "Audit"
    ],
    "correctAnswer": {
      "CMDB records that represent the same physical or logical asset multiple times": "Duplicate",
      "Fields necessary to create or update a CI record in the CMDB": "Required",
      "CMDB records that no longer maintain their logical or physical relationships with other CIs": "Orphan",
      "CMDB records that are no longer actively updated, but remain stored in the database": "Stale",
      "Fields that support the accuracy, completeness, and usability of CI records in the CMDB": "Recommended",
      "Actual values of specified fields are compared to the expected values defined in a template": "Audit"
    }
  },
  {
    "id": 17,
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
      "Automated agentless solution running patterns"
    ],
    "correctAnswer": {
      "Agent Client Collector": "Automated agent-based solution running patterns",
      "Import Sets": "Organization-built solution using transform maps",
      "Service Graph Connector": "Third-party integrations from other vendors",
      "ServiceNow Discovery": "Automated agentless solution running patterns"
    }
  },
  {
    "id": 18,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator is creating technical documentation for stakeholders, which includes a list of attributes, Identification and Reconciliation Engine (IRE) rules, and suggested relationships for several classes. Which central location does the CMDB Administrator use to collect this information?",
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
    "text": "Choose 1 option. Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
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
    "text": "Choose 2 options. A CMDB Configuration Manager sets up the following data filter for a certification policy using CMDB Data Manager. \u2022 Table: Server [cmdb_ci_server] \u2022 Filter: Operating System | contains | Server OR Operating System | contains | Linux Which operating systems are affected by this policy?",
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
    "text": "Choose 1 option. A Configuration Manager needs to restrict the number of classes available in a Configuration Item reference field on an incident form. How does the Manager set Principal Classes?",
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
    "text": "Choose 2 options. A CMDB Administrator is comparing the Unified Map to the Service Mapping map. What are additional capabilities of the Unified Map?",
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
    "text": "Choose 2 options. Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to 'User Group Field'?",
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
    "text": "Choose 1 option. A CMDB Administrator aims to utilize CSDM life cycle field mappings to better align with CSDM best practices. What is the next step to take after selecting the Enable Life Cycle Sync button?",
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
    "text": "Choose 1 option. The Configuration Management team finds value in the reports from CMDB 360/Multisource CMDB and wants to use it for all CI data. Which must be true in order for CMDB 360/Multisource CMDB to be able to report on and analyze that data?",
    "options": [
      "A. ServiceNow Discovery must be used to populate the CI data.",
      "B. Reconciliation rules with priorities must be configured.",
      "C. The CI data must go through the IRE.",
      "D. The CI data must be from an authorized Service Graph Connector."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 26,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator wants to ensure that only relevant CIs from managed classes will be shown on Incident, Problem, and Change records. Which checkbox needs to be checked in the CI Class Manager for the CMDB Administrator to achieve the requested result?",
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
    "text": "Choose 1 option. Where can an administrator perform Natural Language Queries (NLQ)?",
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
    "text": "Choose 1 option. A Windows server is reclassified from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). Which process occurred?",
    "options": [
      "A. Class Switch",
      "B. Class Change",
      "C. Class Upgrade",
      "D. Class Downgrade"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 29,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Choose 2 options. How do CMDB management tools and features within the CMDB governance pillar help organizations manage CIs and improve service delivery?",
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
    "text": "Choose 2 options. A Configuration Manager wants to manage manually maintained data attributes of CIs. Which group values are automatically synchronized on CIs using Technology Management Offerings (Technical Service Offerings) and dynamic CI groups?",
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
    "text": "Choose 1 option. A CSDM Data Manager needs metrics on the alignment of Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) with best practices. Which tab in the CSDM Data Foundation Dashboard provides this information?",
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
    "text": "Choose 1 option. A CMDB Administrator is tasked with managing the CMDB and needs to define a new CI class to track a new type of equipment that has not been seen before. Which action adds a new CI class and ensures it integrates properly with the existing CMDB structure?",
    "options": [
      "A. Use Service Catalog to define the new CI class, as the CI Class Manager is only for service-related records and not for hardware CIs",
      "B. Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
      "C. Edit an existing CI class under CI Class Manager and add new fields specific to the new equipment type",
      "D. Use the CI Class Manager to create a new CI class but avoid setting up any inheritance, as CI classes should be independent of one another to maintain clarity"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 34,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Can be assigned to groups for resolving duplicate CIs: De-Duplication Tasks Offers insight into duplicate CIs within the CMDB: CMDB Health Dashboard Correctness Scorecard Offers a solution to resolve de-duplication tasks in bulk: De-Duplication Templates Provides a wizard to resolve de-duplication tasks individually: Duplicate CI Remediator Choose 2 options. What are the characteristics or functions of ServiceNow IntegrationHub ETL?",
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
    "text": "Choose 1 option. A CMDB Administrator needs to ingest relevant data from Microsoft SCCM into the CMDB. Which ingestion method brings the fastest time to value?",
    "options": [
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
    "text": "Choose 1 option. A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
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
    "text": "Choose 1 option. Two new CI records are imported into the hardware class of the CMDB: CI1: The name of this CI record matches the name of an existing CI record in the CMDB. CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
    "options": [
      "A. CI1 and CI2 both will be updated with matching records.",
      "B. CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "C. CI1 will be inserted as new record and CI2 will be updated with matching record.",
      "D. CI1 and CI2 both will be inserted as new records."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 38,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Choose 2 options. A CMDB Administrator utilizing the CMDB Data Foundations Dashboard sees an issue and wants to run a playbook. Which types of documentation can they expect to be provided in a playbook?",
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
    "id": 40,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Logical representation of a deploy system or application stack: Application Service Published to Service Owners and underpins one ore more business or application Services: Technology Management Service (Technical Service) Published to Business Users and underpins one ore more business capabilities: Business Service Choose 1 option. A CMDB Administrator knows that the CMDB Data Foundation Dashboard is a resource to monitor and improve data quality. What is a benefit of this dashboard?",
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
    "text": "Choose 1 option. A CMDB Manager uses CMDB 360/Multisource CMDB to maintain and improve CMDB quality. Why would the Manager use CMDB 360/Multisource CMDB?",
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
    "text": "Choose 1 option. The Configuration Management team wants to confirm that all servers in the CMDB actually exist in the data center. Which CMDB Data Manager policy type would the team create?",
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
    "text": "Choose 1 option. A CMDB Administrator has a number of similar de-duplication tasks that need to be remediated in bulk. How does the Administrator achieve this?",
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
    "text": "Choose 1 option. The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
    "options": [
      "A. Important actions tile under the Home tab",
      "B. Total status tile under the My Work tab",
      "C. CMDB feature adoption tile under the Insights tab"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 45,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A Configuration Management team has decided to start taking advantage of the CMDB 360/Multisource CMDB functionality. Which system property must be enabled?",
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
    "text": "Choose 1 option. A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    "options": [
      "A. Life Cycle Stages [life_cycle_stage]",
      "B. Life Cycle Mapping [life_cycle_mapping]",
      "C. Life Cycle Controls [life_cycle_control]",
      "D. Life Cycle Stage Status [life_cycle_stage_status]"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 47,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator has imported data into the ServiceNow CMDB from a third-party source using a Service Graph Connector. The Administrator wants to review specific field to field mappings for the import. Which feature will show that information?",
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
    "text": "Choose 2 options. A CMDB Administrator is considering whether to start using the playbooks provided on the CMDB Data Foundation Dashboard. What are the benefits to support the decision to leverage this feature?",
    "options": [
      "A. Offers insight into the downstream impacts of poorly performing metrics",
      "B. Offers remediation templates to improve poorly performing metrics",
      "C. Offers remediation options to address and improve poorly performing metrics",
      "D. Offers automated scripts to resolve poorly performing metrics"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 49,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class. CI Class Manager: -Managed by Group = Enterprise IT Services. Technical Service Offering: -Managed by Group = Windows Support, -Change Group = Change Management Team. What would be the Managed By Group for CIs from this class based on the configured values?",
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
    "text": "Choose 1 option. A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
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
    "text": "Choose 2 options. An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
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
    "text": "Choose 1 option. A Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Change Request form is automatically populated after a CI is selected that references an appropriate change group?",
    "options": [
      "A. Managed by Group",
      "B. Change Group",
      "C. Assignment Group",
      "D. Support Group",
      "E. Assigned to"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 53,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Choose 2 options. A Windows administration team wants a grouping of CIs using CMDB groups. Which methods can be used?",
    "options": [
      "A. Tag-based queries",
      "B. Encoded queries",
      "C. Scripted queries",
      "D. Saved queries"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 54,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Choose 1 option. A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusions Rules tab available under a CI Class. How are these rules utilized by the IRE?",
    "options": [
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
    "text": "Choose 1 option. A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications. Which action does CSDM recommend to meet this goal?",
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
    "text": "Choose 1 option. A data center has many servers. The CMDB Administrator wants to confirm that all servers exist. Which Data Manager policy type does the Administrator implement?",
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
    "text": "Choose 1 option. A ServiceNow Administrator needs to create multiple new classes in the CMDB but wants to follow ServiceNow's best practices for naming CMDB tables to prevent technical debt. Which is the starting prefix for all custom CMDB tables?",
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
    "text": "Choose 2 options. ServiceNow Event Management significantly benefits from a well-maintained and properly populated CMDB. What are key advantages it provides to Event Management?",
    "options": [
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
    "text": "Choose 2 options. A Configuration Manager is managing a CI class in the CMDB. The identification rule(s) needs an update. Where can the Configuration Manager view and configure the existing identification rule(s) for the class?",
    "options": [
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
    "id": 61,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Recommended for mission-critical application services that require a precise approach using patterns: Service Mapping (Top-down) Best fit to map cloud-native, container-based, or machine environments: Tag-Based Ideal for custom-built applications and leverages fingerprinting to generate service maps in a timely manner: Service Mapping (Connection Suggestion) Ideal for small application services that can be easily defined using filters and CMDB queries: Dynamic CI Group A hospital has received a new CT Scanner. The inventory management team has created a catalog item doctors can use to schedule patients for scans. What CSDM domain should the inventory management team map the catalog item to?",
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
      "A. Playbooks can automatically track common CMDB issues and output metrics.",
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
    "correctAnswer": "C"
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
    "correctAnswer": "D"
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
    "text": "Choose 2 options. A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity?",
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
    "text": "Choose 2 options. Which are business values of CMDB?",
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
    "text": "Choose 2 options. Which ServiceNow solution creates automatic relationships?",
    "options": [
      "A. Discovery",
      "B. Workflow Studio",
      "C. Service Mapping",
      "D. IntegrationHub ETL"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 80,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "This table is pre-populated with mappings... : life_cycle_mapping This is a record attribute that reflects a meta-level state... : life_cycle_stage This is a record attribute that reflects a sub-level state... : life_cycle_stage_status This table uses the type of CI... : life_cycle_object Choose 1 option. Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB?",
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
    "text": "Choose 1 option. A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. The Configuration Management team is working to ensure that the Change Group field is populated for all managed CIs. As a result, which base system field on the incident form will be automatically populated alter selecting a CI?",
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
    "text": "Choose 1 option. CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
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
    "text": "Choose 1 option. Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
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
    "text": "Choose 2 options. Configuration Management requires an accurate inventory of devices to be reflected in theCMDB. Which are common use cases for using Agent Client Collector (ACC)?",
    "options": [
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
    "text": "Choose 1 option. A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
    "options": [
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
    "text": "Choose 1 option. A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs. Which policy type should be used to accomplish this goal?",
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
    "text": "Choose 2 options. A CMDB Administrator wants to create a CMDB query to find all databases located in Seattle that are connected to application services. They also want to include incidents related to those databases. Which actions does the company take to build this query?",
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
  }
];
