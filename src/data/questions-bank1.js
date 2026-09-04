export const bankMeta = {
  title: 'Exam Model 1',
  description: 'ServiceNow CIS-DF Practice Exam.',
  totalQuestions: 67,
  passingScore: 70,
  timeLimitMinutes: 90
};

export const questions = [
  {
    "id": 1,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": "Chunk 1: Questions 1 - 20 : Choose 1 option. A CMDB Architect intends to build a CMDB using CSDM guidance. Which CMDB tables will the architect use to build the CSDM sell/consume domain?",
    "options": [
      "A. Business Service Offering, Business Service",
      "B. Business Capability, Information Object, Business Application",
      "C. Application Service, Technology Management Service (Technical Service), Technology Management Offering (Technical Service Offering)"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 2,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      "A. Completeness",
      "B. Correctness",
      "C. Compliance"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 3,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Data Owner has requested better insights on the different data sources that make up the CMDB data set. The Platform Owner knows that the new Service Graph Connector Central plugin is just what is needed. After installing the plugin, what workspace will have the new Service Graph Connector Central lab available?",
    "options": [
      "A. Service Graph Connector Workspace",
      "B. CMDB Workspace",
      "C. Discovery Admin Workspace"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 4,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period. Which policy type should the Configuration Manager create?",
    "options": [
      "A. Certification",
      "B. Delete",
      "C. Retire",
      "D. Archive"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 5,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    "options": [
      "A. My Tasks in the Application Navigator",
      "B. The de-duplication task module",
      "C. The de-duplication dashboard on the CMDB workspace"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 6,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Business Relationship Manager in an organization wants to implement Service Portfolio Management (SPM) and to present offerings to business consumers. Which CSDM Domain does this align with?",
    "options": [
      "A. Build and Integration (Build)",
      "B. Service Consumption (Sell/Consume)",
      "C. Design and Planning (Design)",
      "D. Service Delivery"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 7,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly on the home node of the Unified Map. Which work area would allow the Service Owner to meet this goal?",
    "options": [
      "A. Tool box",
      "B. Map",
      "C. Contextual side panel",
      "D. Content controls"
    ],
    "correctAnswer": "Noexplicitlymarkedcorrectanswerinthesourcetext"
  },
  {
    "id": 8,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 options. Which are CMDB Data Manager end of life policy types?",
    "options": [
      "A. Retire",
      "B. Lost",
      "C. Decommission",
      "D. Disposed",
      "E. Archive"
    ],
    "correctAnswer": [
      "A",
      "E"
    ]
  },
  {
    "id": 9,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 options. A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are benefits of using this application?",
    "options": [
      "A. Has a framework to create custom metrics for the CMDB",
      "B. Checks that important data is valid and properly configured",
      "C. Provides playbooks to assist in the remediation of potential risks",
      "D. Uses automation to remediate potential risks"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 10,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these new policies?",
    "options": [
      "A. End of Life - Retired",
      "B. Missing - Stolen",
      "C. Inventory - Available",
      "D. In any lifecycle state"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 11,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 options. A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries to see if the reports can assist with managing of CMDB data. What insights are gained from CMDB 360 queries?",
    "options": [
      "A. Unique CIs created from different data sources",
      "B. Gaps in attribute data from different data sources",
      "C. Different attribute values from different data sources",
      "D. Orphan CIs created from different data sources",
      "E. Duplicate configuration items from different data sources"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 12,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
    "options": [
      "A. Total status tile under the My Work tab",
      "B. CMDB feature adoption tile under the Insights tab",
      "C. Important actions tile under the Home tab"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 13,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    "options": [
      "A. Use a scheduled data import to update the attributes from an external source",
      "B. Create a new CI class specifically for non-discoverable attributes",
      "C. Use the CMDB Reconciliation Engine to update the attributes"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 14,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Manager needs information on how to correctly establish relationships between Infrastructure CIs, Technology Management Offerings (Technical Service Offerings), and Application Services within the CMDB. Which CSDM domain would provide this information?",
    "options": [
      "A. Build and Integration (Build)",
      "B. Foundation",
      "C. Design and Planning (Design)",
      "D. Service Consumption (Sell/Consume)",
      "E. Service Delivery (Manage Technical Services)"
    ],
    "correctAnswer": "E"
  },
  {
    "id": 15,
    "type": "drag-match",
    "instruction": "Drag and drop each feature with the corresponding outcome.",
    "text": ": Drag and drop each feature with the corresponding outcome.",
    "sources": [
      "Can be assigned to groups for resolving duplicate CIs",
      "Offers insight into duplicate CIs within the CMDB",
      "Offers a solution to resolve de-duplication tasks in bulk",
      "Provides a wizard to resolve de-duplication tasks individual"
    ],
    "targets": [
      "De-Duplication Tasks",
      "CMDB Health Dashboard Correctness Scorecard",
      "De-Duplication Templates",
      "Duplicate CI Remediator"
    ],
    "correctAnswer": {
      "Can be assigned to groups for resolving duplicate CIs": "De-Duplication Tasks",
      "Offers insight into duplicate CIs within the CMDB": "CMDB Health Dashboard Correctness Scorecard",
      "Offers a solution to resolve de-duplication tasks in bulk": "De-Duplication Templates",
      "Provides a wizard to resolve de-duplication tasks individual": "Duplicate CI Remediator"
    }
  },
  {
    "id": 16,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining CIs and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
    "options": [
      "A. Import set using JDBC data source connection to SCCM using transform maps",
      "B. SCCM Usage Metering Spoke",
      "C. SCCM Service Graph Connector",
      "D. IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 17,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 options. An organization is updating the CMDB to include new asset types like IoT devices. Relevant CI classes need to be added and outdated ones need to be removed from the Principal Class filter to ensure accurate display in ITSM processes. Which roles are needed to add or remove classes?",
    "options": [
      "A. cmdb_query_builder",
      "B. personalize_dictionary",
      "C. sn_csdm_admin",
      "D. sn_cmdb_admin"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 18,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. Which CMDB Data Manager policy type does the team create?",
    "options": [
      "A. Retire",
      "B. Delete",
      "C. Attestation",
      "D. Certification",
      "E. Archive"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 19,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": The Server [cmdb_ci_server] class uses a dynamic reconciliation rule of lowest value for the Disk Space (GB) field, while the Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule of most reported for the Disk Space (GB) field. Given the following data sources that populate Windows Server data into the CMDB 360/Multisource CMDB (Tivoli: 75, ServiceNow: 75, LANDesk: 50, Altiris: 80). Which value would be added to the CMDB for the Disk Space (GB) field of a Windows Server [cmdb_ci_win_server] record?",
    "options": [
      "A. 80",
      "B. 75",
      "C. 50"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 20,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Chunk 2: Questions 21 - 40 : Choose 2 options. An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
    "options": [
      "A. Ensure one-to-one physical mapping between Asset and CI",
      "B. Ensure that the business rule to update Asset fields on change on the CI table is active",
      "C. Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "D. Ensure that the business rule to update CI fields on change on the asset table is active"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 21,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the Assigned to field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    "options": [
      "A. Use the Asset-CI Field Mapping module to create a new rule to replicate the Assigned to value between the asset and associated CI",
      "B. Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
      "C. Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 22,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
    "options": [
      "A. Assignment Group on the CI record",
      "B. Affected CIs in the Incident record",
      "C. Service classification in the Technical Service",
      "D. Business Criticality in the Service Offering"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 23,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": The Change Management team in an organization wants to implement a Change across multiple CIs at the same time. Which field on the Change Request form needs to be populated with a dynamic CI group?",
    "options": [
      "A. Configuration Item",
      "B. Business Service",
      "C. Service Offering"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 24,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A company wants to track regulatory compliance. ServiceNow has an artifact type called an information object as part of the CSDM framework. What is the purpose of an information object?",
    "options": [
      "A. It describes data in general on a group of Configuration Items.",
      "B. It describes the logical data to the Business Applications.",
      "C. It describes data exchanged between an API interface and an Application."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 25,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": Where can an administrator perform Natural Language Queries (NLQ)?",
    "options": [
      "A. CMDB Data Manager",
      "B. CI Class Manager",
      "C. CMDB Workspace",
      "D. CMDB Health Dashboard"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 26,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": The following identification rule for a CI class has been defined: (Hardware Rules table provided).Two new CI records are imported into the hardware class of the CMDB: CI1: The name of this CI record matches the name of an existing CI record in the CMDB. CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
    "options": [
      "A. CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "B. CI1 and CI2 both will be inserted as new records."
    ],
    "correctAnswer": "A"
  },
  {
    "id": 27,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator is working in the CI Class Manager on the Basic Info tab. How can the class be set as a Principal Class?",
    "options": [
      "A. Click the Principal Class UI Action button",
      "B. Check the Principal Class check box",
      "C. Select 'Yes' from the Principal Class choice list"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 28,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
    "options": [
      "A. CMDB Data Foundation Dashboard",
      "B. CMDB Workspace",
      "C. CSDM Data Foundation Dashboard",
      "D. Service Mapping Data Foundation Dashboard"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 29,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 options. The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate?",
    "options": [
      "A. Business Application",
      "B. Service Offering",
      "C. Application Service",
      "D. Service Portfolio"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 30,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
    "options": [
      "A. Configuration File Name",
      "B. Configuration File Path",
      "C. Class",
      "D. Version",
      "E. Port"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 31,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      "A. CMDB Query Builder",
      "B. Coverage window on the CMDB 360 tab",
      "C. Saved queries window on the CMDB 360 tab",
      "D. Saved queries window on the Insights tab"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 32,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB CI Class Owner responsible for the Windows Servers needs to manage the Windows Server class. Which CI Class Manager feature will help the CI Class Owner streamline this task?",
    "options": [
      "A. Search CI Classes",
      "B. Pinned Classes",
      "C. CI Favorites"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 33,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    "options": [
      "A. Life Cycle Stages [life_cycle_stage]",
      "B. Life Cycle Controls [life_cycle_control]",
      "C. Life Cycle Stage Status [life_cycle_stage_status]",
      "D. Life Cycle Mapping [life_cycle_mapping]"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 34,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator needs to prevent duplicate CI creation from import sets that load data into the CMDB from vendor shipment files containing CI information. How can the Administrator do this?",
    "options": [
      "A. Create comparison rules in the IRE",
      "B. Use the CMDBTransformUtil API in the transform script",
      "C. Set the system property to utilize the IRE within transform maps",
      "D. Set the coalesce on two mappings within the transform map"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 35,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator notices that CIs do not have a support group. How can the support group be automatically populated and maintained on the CI record?",
    "options": [
      "A. Dynamic CI group",
      "B. Technology Management Service (Technical Service)",
      "C. CI Class Manager",
      "D. Technology Management Service Offering (Technical Service Offering)"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 36,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
    "options": [
      "A. CMDB Health Dashboard > Duplicate CIs tab",
      "B. CMDB Workspace > My Work tab",
      "C. CMDB Workspace > Management tab",
      "D. CMDB Health Dashboard > Audit tab"
    ],
    "correctAnswer": [
      "B",
      "C(Bothmarkedinthesourcetext)"
    ]
  },
  {
    "id": 37,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 Options. A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. However, each discovery source categorizes the same CIs differently, leading to duplicate records and inconsistencies across the system. As a result, the CMDB team is struggling with data accuracy and standardization. What actions does the CMDB team take to resolve the issue?",
    "options": [
      "A. Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "B. Allow each discovery source to define its own CI class, even if it results in inconsistencies",
      "C. Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification",
      "D. Create a custom script to manually adjust incoming data before storing it in the CMDB"
    ],
    "correctAnswer": [
      "A",
      "C"
    ]
  },
  {
    "id": 38,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Manager working in the CMDB Workspace wants to see how CIs are connected to each other. Which tool can be used?",
    "options": [
      "A. Relationship Map",
      "B. Unified Map",
      "C. Business Service Map"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 39,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB team has noticed that some hardware CIs are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps. Which accomplishes this task?",
    "options": [
      "A. CMDB Data Foundation Playbook",
      "B. CI Class Manager",
      "C. Service Graph Connectors"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 40,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Chunk 3: Questions 41 - 60 : Choose 2 options. A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third-party solutions that the company wants integrated into the CMDB. Which categories of connectors are available to the Administrator?",
    "options": [
      "A. Workflow Automation",
      "B. Cloud",
      "C. DevOps",
      "D. Observability"
    ],
    "correctAnswer": [
      "B",
      "D"
    ]
  },
  {
    "id": 41,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": Using CI Class Manager, the Tomcat identification rule has the following criterion attributes configured: Class, Install Directory. Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
    "options": [
      "A. Applies to",
      "B. Independent",
      "C. Allow fallback to parent's rules",
      "D. Criterion attributes"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 42,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules. Where would these rules be configured?",
    "options": [
      "A. CMDB Health Dashboard",
      "B. CMDB Workspace",
      "C. CMDB CI Class Manager",
      "D. CMDB Data Manager"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 43,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    "options": [
      "A. Establishing clear governance and continuously monitoring CMDB health",
      "B. Relying on automated discovery tools to maintain and update CMDB records",
      "C. Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
      "D. Allowing IT teams to modify CMDB records as needed to promote flexibility in data management"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 44,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attribute assigned to a class in CI Class Manager. Which is the recommended field to be used for a policy task assignment?",
    "options": [
      "A. Approval group",
      "B. Managed by group",
      "C. Change group",
      "D. Support group"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 45,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class. Which CI Class Manager tab can the owner use to change the icon for the class?",
    "options": [
      "A. Basic Info",
      "B. Suggested Relationships",
      "C. CI List",
      "D. Attributes"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 46,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 Options. An organization is using CMDB Query Builder to find all application services with a database that has incidents and all infrastructure in those application services. Which steps does the organization take to build this query?",
    "options": [
      "A. Add a non-CMDB table to the query",
      "B. Use a Service Mapping Query to include non-CMDB tables like the Incident table",
      "C. Use a Service Mapping Query to find all incidents related to the database",
      "D. Use a CMDB Query to include application services and their related infrastructure"
    ],
    "correctAnswer": [
      "A",
      "D(Bothmarkedinsource)"
    ]
  },
  {
    "id": 47,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator has installed a Service Graph Connector (SGC), and then made customizations to the mappings. Which is a consequence of this action?",
    "options": [
      "A. The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC.",
      "B. The customization will prevent the SGC from executing without an approval record attached to the affected mapping record.",
      "C. Fields populated by a customization will have a special tag associated with them in the CMDB."
    ],
    "correctAnswer": "A"
  },
  {
    "id": 48,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 options. Which ServiceNow solutions automatically create relationships between CI Applications that are part of an Application Service?",
    "options": [
      "A. IntegrationHub ETL",
      "B. Service Mapping",
      "C. Data Manager",
      "D. Event Management",
      "E. Discovery"
    ],
    "correctAnswer": [
      "B",
      "E"
    ]
  },
  {
    "id": 49,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve the data quality of the CMDB for that region. The Configuration Manager only sees the overall score and grouped by CI Class. How can the Configuration Manager get a score for regionally relevant CIs?",
    "options": [
      "A. Create CMDB groups with type, health, by region",
      "B. Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
      "C. On the CMDB health settings, activate the option, Group scores by region"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 50,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": The CMDB Administrator group seeks to filter specific CI classes that display on the CMDB Health Dashboard. This ensures that only relevant data is displayed, excluding items that are not ready for management. Which feature can the group utilize to achieve this goal?",
    "options": [
      "A. Health Inclusion Rules",
      "B. Data Refresh Rules",
      "C. Reconciliation Rules",
      "D. Identification Rules"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 51,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
    "options": [
      "A. Retire, Archive, Attestation, Certification, and Delete",
      "B. Archive and Delete",
      "C. Delete, Attestation, Retire, and Certification",
      "D. Attestation, Retire, and Certification"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 52,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    "options": [
      "A. Reconciliation Rules",
      "B. CMDB Workspace",
      "C. CMDB Data Manager",
      "D. CMDB 360/Multisource CMDB"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 53,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 Options. How is the CMDB aligned to business processes?",
    "options": [
      "A. Extends service delivery management to all enterprise departments",
      "B. Enhances decision-making and operational efficiency across the organization",
      "C. Enables the CFO/CIO to track software licenses",
      "D. Provides a centralized view of configuration items and their relationships"
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
    "text": ": A Configuration Manager needs to ingest third-party CIs into the CMDB. Which method minimizes the risk of technical debt?",
    "options": [
      "A. Table API",
      "B. Vendor-provided integration",
      "C. Service Graph Connector",
      "D. Import Sets and Transform Maps"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 55,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": What is the relationship between an application and a server?",
    "options": [
      "A. Application > Runs on::Runs > Server",
      "B. Application > Uses::Used by > Server",
      "C. Application > Used by::Uses > Server",
      "D. Application > Runs::Runs On > Server"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 56,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    "options": [
      "A. Data Quality Business Rule",
      "B. CMDB Workspace",
      "C. Data Quality Scheduled Job",
      "D. CMDB Audit Business Rule"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 57,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs. What CSDM stage would this be completed in?",
    "options": [
      "A. Crawl",
      "B. Run",
      "C. Fly",
      "D. Walk",
      "E. Foundation"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 58,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A Configuration Manager is reviewing the life cycle of CIs to ensure data accuracy, consistency, and relevance. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. Where are these reviewed?",
    "options": [
      "A. Life cycle properties",
      "B. Life cycle choice list",
      "C. Life cycle mappings"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 59,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": "Chunk 4: Questions 61 - 83 : Choose 2 options. A CMDB Administrator is using the Duplicate CI Remediator to address a de-duplication task. On the first tab of the wizard, the Main CI is selected. Which attributes are used to identify the Main CI?",
    "options": [
      "A. Oldest Created",
      "B. Newest Created",
      "C. Least Related Items",
      "D. Most Related Items"
    ],
    "correctAnswer": [
      "A",
      "D"
    ]
  },
  {
    "id": 60,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
    "options": [
      "A. It is a free application on the ServiceNow Innovation Lab.",
      "B. It is a paid application on the ServiceNow Store.",
      "C. It is a free application on the ServiceNow Store.",
      "D. It is active by default."
    ],
    "correctAnswer": "C"
  },
  {
    "id": 61,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
    "options": [
      "A. Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "B. Keep both locations as either can be used as a valid alternate location",
      "C. Review both locations, update CIs with the correct location and delete the duplicate location",
      "D. Use the Duplicate CI Remediator to merge the duplicate location records"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 62,
    "type": "multi",
    "instruction": "Choose 2 options.",
    "text": ": Choose 2 Options. A CMDB Manager wants to start adding CSDM design and planning (design) domain components into the CMDB. Who is involved in this exercise?",
    "options": [
      "A. Application Service Owner",
      "B. Application Owner",
      "C. Enterprise Architect",
      "D. Business Relationship Manager"
    ],
    "correctAnswer": [
      "B",
      "C"
    ]
  },
  {
    "id": 63,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": Drag the CSDM domains to the respective benefits. Design and Planning: Understand CIs related to business application and related capabilities, identify redundancies, monitor costs and make better investments around roadmap Service Delivery: Understand technical services, technical service offerings, service support and all relationships to underlying technology CIs Service Consumption: Understand business services and ownership, cost, scope of what is provided to the business/consumer and request access to the business services Foundation: Use the base system tables when implementing the CSDM to derive the highest value from ServiceNow products and the Now Platform : Drag the domain to the roles that make up the governance team. Foundation Domain: Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner Portfolio Domain: Service Owner(s), Platform Owner Technical Domain: Technology Service Owner(s), Application Service Owner(s), Platform Owner Design Domain: Enterprise Architect(s), Platform Owner : Drag and drop the design architecture to its management tool. Agent Client Collector: Automated agent-based solution running patterns Import Sets: Organization-built solution using transform maps Service Graph Connector: Third-party integrations from other vendors ServiceNow Discovery: Automated agentless solution running patterns : Drag and drop the product to its description. ServiceNow Discovery: Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information Service Graph Connectors: Facilitates integration between ServiceNow and external systems to import and synchronize data Service Mapping: Complete topology of the services and shows how they are supported by underlying infrastructure and applications Agent Client Collector (ACC): Provides real-time visibility into endpoint configurations, populating the CMDB with accurate and up-to-date information : Drag and drop the system property to the functionality. Enables CMDB 360: glide.identification_engine.multisource_enabled Enables capturing CMDB 360 data for CIs from non-CMDB classes:glide.identification_engine.multisource_cmdb_ci_enabled Enables logging for CMDB 360: glide.cmdb.logger.source.cmdb_multisource Maximum number of CIs that can be included in a CMDB 360 recompute operation:glide.identification_engine.multisource.recompute.max.ci.limit : Drag the sub-metrics to the KPI. Completeness: Required, Suggested Compliance: Audit, Certify Correctness: Orphan, Stability : The Application Portfolio Management team is asking for help modeling platforms as Business Applications. How would this be mapped in CSDM using the ServiceNow Platform in the Incident and Change applications?",
    "options": [
      "A. ServiceNow Platform, Incident, and Change would all be web based Architecture type. Incident and Change would have a reference to ServiceNow Platform.",
      "B. ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Platform Applications and have a reference to ServiceNow Platform.",
      "C. ServiceNow Platform, Incident, and Change would all be web based Architecture type. A Depends On relationship would be created between ServiceNow Platform and Incident and Change.",
      "D. ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Platform Applications. Then a Depends On relationship would be created between ServiceNow Platform and Incident and Change."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 64,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": An IT group has a requirement to upgrade all the Windows servers. There is a Dynamic CI Group containing all the Windows servers. What happens to the Dynamic CI Group when it is referenced from the Configuration item field on a Change form?",
    "options": [
      "A. It calculates impact against the Dynamic CI Group",
      "B. It displays all related CIs in the Affected CIs related list.",
      "C. It displays all related CIs in the Impacted Services related list."
    ],
    "correctAnswer": "B"
  },
  {
    "id": 65,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator is leveraging CI data as part of an Integrated Risk Management implementation and the Entity Scoping process. The Administrator wants to leverage the CSDM Data Foundations Dashboard playbooks under the Run tab. Which CSDM relationships are leveraged using the CSDM playbooks?",
    "options": [
      "A. Business Applications that have relationships to Application Services",
      "B. Logical CIs that have relationships with Information Objects",
      "C. Locations that have established parent records",
      "D. Business Applications that have their relationships to Information Objects"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 66,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard. For the Duplicate metric, on the Server class, it shows Healthy CIs/Evaluated as 59,000/60,000. What does this indicate about the scope of server records calculated under this metric?",
    "options": [
      "A. 1,000 server records are in scope for this metric",
      "B. 59,000 server records are in scope for this metric",
      "C. 60,000 server records are in scope for this metric",
      "D. 59,000 Linux and 60,000 Windows servers records are in scope for this metric"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 67,
    "type": "single",
    "instruction": "Choose 1 option.",
    "text": ": A CMDB Administrator wants to start utilizing the CMDB Health Dashboard and its Key Performance Indicators. What does the Administrator do to start using the dashboard?",
    "options": [
      "A. Activate the dashboard system property",
      "B. Download the dashboard from the ServiceNow store",
      "C. Activate the dashboard scheduled jobs",
      "D. Nothing, the dashboard is activated by default"
    ],
    "correctAnswer": "C"
  }
];
