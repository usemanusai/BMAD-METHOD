# Core Meta-Agent Tasks

## Overview

This document contains the essential task definitions that drive the meta-agent system's ability to create, test, and deploy agent teams. These tasks represent the core workflows that transform user requirements into fully functional agent teams.

---

## Orchestrate Agent Creation Task

### Purpose
Coordinate the complete process of creating a new agent team from initial requirements through deployment. This task manages the complex workflow involving multiple meta-agents and ensures high-quality outcomes through systematic orchestration.

### Process Overview
1. **Project Initialization** → Requirements assessment and planning
2. **Requirements Analysis** → Comprehensive analysis by Agent Architect
3. **Team Design** → Optimal agent team composition design
4. **Persona Creation** → Agent personality and behavior development
5. **Configuration** → Technical setup and integration
6. **Testing & Validation** → Quality assurance and performance testing
7. **Deployment** → Production rollout and integration

### Detailed Workflow

#### Phase 1: Project Initialization and Planning
**Assess User Requirements:**
- Gather initial requirements and understand scope
- Determine complexity and scale of agent team needed
- Assess user preferences for interaction style (Interactive vs YOLO)
- Identify special constraints or requirements

**Select Orchestration Approach:**
- **Interactive Mode:** Step-by-step process with user feedback at each stage
- **YOLO Mode:** Streamlined process with minimal user intervention
- **Hybrid Mode:** Combination approach based on complexity and preferences

**Create Project Plan:**
- Define project scope and objectives
- Identify required meta-agents and their roles
- Establish timeline and milestones
- Set quality criteria and success metrics

#### Phase 2: Requirements Analysis and Team Design
**Coordinate Requirements Analysis:**
- Direct Agent Architect to conduct comprehensive requirements analysis
- Ensure thorough stakeholder analysis and workflow mapping
- Review and validate requirements analysis output
- Gather user feedback and iterate as needed

**Orchestrate Team Design:**
- Guide Agent Architect through team composition design
- Facilitate user review of proposed agent team structure
- Coordinate refinements based on feedback
- Finalize agent team architecture and specifications

**Quality Gate 1:**
- [ ] Requirements are comprehensive and validated
- [ ] Agent team design is optimal for the requirements
- [ ] User has approved the overall approach
- [ ] All dependencies and constraints are identified

#### Phase 3: Persona and Configuration Development
**Coordinate Persona Creation:**
- Assign Persona Creator to develop agent personalities
- Ensure personas align with functional requirements
- Facilitate user review and feedback on personas
- Iterate on persona designs until approved

**Orchestrate Configuration Management:**
- Direct Configuration Manager to create technical configurations
- Ensure proper integration with existing BMAD infrastructure
- Coordinate template and checklist assignments
- Validate configuration completeness and accuracy

**Quality Gate 2:**
- [ ] All agent personas are complete and approved
- [ ] Technical configurations are accurate and complete
- [ ] Personas and configurations are consistent
- [ ] Integration requirements are properly addressed

#### Phase 4: Testing and Validation
**Orchestrate Comprehensive Testing:**
- Direct Agent Tester to conduct thorough validation
- Coordinate testing of individual agents and team interactions
- Ensure performance testing meets requirements
- Validate user experience and interaction quality

**Quality Gate 3:**
- [ ] All agents pass individual functionality tests
- [ ] Team interactions work as designed
- [ ] Performance meets specified requirements
- [ ] User experience is satisfactory

#### Phase 5: Deployment and Integration
**Coordinate Deployment Planning:**
- Direct Deployment Specialist to create deployment plan
- Ensure proper integration with existing systems
- Plan rollback procedures and risk mitigation
- Coordinate user training and documentation

**Quality Gate 4:**
- [ ] Deployment is successful and stable
- [ ] Integration with existing systems works properly
- [ ] Users can effectively interact with new agent team
- [ ] Monitoring and maintenance procedures are in place

---

## Analyze Requirements Task

### Purpose
Transform user requirements and problem descriptions into comprehensive analysis that serves as the foundation for designing optimal agent teams. This analysis guides all subsequent meta-agent activities.

### Key Discovery Questions
1. "What is the primary problem or challenge you're trying to solve?"
2. "Who are the main users/stakeholders that will interact with this agent team?"
3. "What are the key workflows or processes that need to be supported?"
4. "What are your performance expectations and success metrics?"
5. "Are there any existing systems or constraints we need to consider?"
6. "What is the expected volume and complexity of work?"
7. "Do you have any preferences for agent interaction styles or personalities?"

### Analysis Framework

#### 1. Problem Domain Analysis
**Decompose the Problem Space:**
- Break down complex requirements into manageable components
- Identify core functional areas and their relationships
- Map dependencies between different aspects of the problem
- Categorize requirements by complexity and priority

**Functional Analysis:**
- Primary functions that must be performed
- Secondary functions that add value
- Support functions required for operation
- Integration functions for external systems

**Non-Functional Analysis:**
- Performance requirements (speed, throughput, accuracy)
- Scalability needs (current and future volume)
- Reliability and availability expectations
- Security and compliance requirements
- Usability and user experience goals

#### 2. Stakeholder Analysis
**Identify Key Stakeholders:**
- Primary users who will directly interact with agents
- Secondary users who will consume agent outputs
- System administrators and maintainers
- Business stakeholders and decision makers

**For Each Stakeholder Group:**
- Define their specific needs and expectations
- Identify their preferred interaction styles
- Understand their technical proficiency levels
- Map their role in the overall workflow
- Document any special requirements or constraints

#### 3. Workflow and Process Mapping
**Current State Analysis:**
- Document existing workflows and processes
- Identify pain points and inefficiencies
- Map current tools and systems in use
- Understand handoff points and bottlenecks

**Future State Design:**
- Define desired workflows with agent assistance
- Identify opportunities for automation
- Plan for human-agent collaboration points
- Design efficient handoff procedures

#### 4. Success Criteria and Metrics
**Define Measurable Success Criteria:**
- Quantitative metrics (speed, accuracy, volume)
- Qualitative measures (user satisfaction, ease of use)
- Business outcomes (cost savings, efficiency gains)
- Technical performance indicators

#### 5. Risk and Constraint Analysis
**Identify Potential Risks:**
- Technical risks and mitigation strategies
- User adoption challenges
- Integration complexities
- Performance bottlenecks

**Document Constraints:**
- Technical limitations and dependencies
- Budget and resource constraints
- Timeline and delivery requirements
- Regulatory and compliance needs

### Output Deliverables
1. **Requirements Analysis Document** - Comprehensive analysis using templates
2. **Stakeholder Map** - Visual representation of stakeholders and relationships
3. **Workflow Diagrams** - Current and future state process flows
4. **Requirements Traceability Matrix** - Mapping requirements to business objectives
5. **Agent Team Recommendations** - Initial thoughts on team composition

---

## Design Agent Team Task

### Purpose
Transform requirements analysis into optimal agent team composition with clear roles, responsibilities, and interaction patterns.

### Design Process

#### 1. Team Composition Analysis
**Determine Optimal Team Size:**
- Analyze workload and complexity requirements
- Balance specialist vs. generalist agents
- Consider coordination overhead vs. capability coverage
- Plan for scalability and future growth

**Define Agent Roles:**
- Map functional requirements to agent capabilities
- Ensure clear role boundaries and minimal overlap
- Design complementary skill sets
- Plan for efficient collaboration patterns

#### 2. Interaction Design
**Workflow Patterns:**
- Sequential processing workflows
- Parallel collaboration patterns
- Hub-and-spoke coordination models
- Mesh networking for complex interactions

**Communication Protocols:**
- Data formats and exchange standards
- Handoff procedures between agents
- Error handling and recovery mechanisms
- Performance monitoring and optimization

#### 3. Integration Planning
**System Integration:**
- External API and data source connections
- Existing tool and system compatibility
- Security and access control requirements
- Performance and scalability considerations

### Design Patterns
- **Orchestrator Pattern:** Central coordinator with specialist agents
- **Pipeline Pattern:** Sequential processing through specialized agents
- **Hub-and-Spoke Pattern:** Central hub with peripheral specialists
- **Mesh Pattern:** Peer-to-peer agent collaboration
- **Hierarchical Pattern:** Multi-level agent organization

---

## Create Persona Task

### Purpose
Develop compelling agent personalities that align with functional requirements while optimizing user experience and task effectiveness.

### Persona Development Process

#### 1. Requirements Analysis
- Understand functional role and responsibilities
- Identify target user demographics and preferences
- Analyze interaction contexts and scenarios
- Define success criteria for persona effectiveness

#### 2. Personality Framework Development
- Select core personality traits and characteristics
- Define communication style and tone
- Establish expertise areas and knowledge depth
- Create motivational drivers and values

#### 3. Behavioral Pattern Definition
- Design interaction flows and response patterns
- Create decision-making frameworks
- Establish error handling and recovery behaviors
- Define adaptation and learning mechanisms

#### 4. Validation and Testing
- Test persona consistency across scenarios
- Validate user experience and interaction quality
- Assess task performance and effectiveness
- Gather feedback and iterate on design

### Persona Elements
- **Personality Profile:** Core traits, communication style, expertise areas
- **Behavioral Specification:** Interaction patterns, decision frameworks, error handling
- **Implementation Guidelines:** Activation instructions, customization parameters
- **Quality Standards:** Consistency, reliability, user experience criteria

---

## Test Agent Team Task

### Purpose
Conduct comprehensive testing and validation of agent teams to ensure they meet all requirements and perform effectively in real-world scenarios.

### Testing Framework

#### 1. Functionality Testing
- Individual agent capability validation
- Team interaction and collaboration testing
- Workflow and process validation
- Integration and compatibility testing

#### 2. Performance Testing
- Response time and throughput measurement
- Scalability and load testing
- Resource utilization analysis
- Bottleneck identification and optimization

#### 3. User Experience Testing
- Interaction quality assessment
- User satisfaction measurement
- Usability and accessibility validation
- Communication effectiveness evaluation

#### 4. Quality Assurance
- Compliance with quality standards
- Consistency across different scenarios
- Error handling and recovery validation
- Documentation and training material review

### Testing Deliverables
- **Test Results Report:** Comprehensive testing outcomes and metrics
- **Performance Analysis:** Detailed performance characteristics and optimization recommendations
- **User Experience Assessment:** Usability findings and improvement suggestions
- **Quality Certification:** Validation that all quality standards are met

---

## Deploy Agent Team Task

### Purpose
Execute the deployment and integration of validated agent teams into production environments with comprehensive monitoring and support.

### Deployment Process

#### 1. Deployment Planning
- Create detailed deployment timeline and procedures
- Plan integration with existing systems and workflows
- Develop rollback strategies and risk mitigation plans
- Prepare user training and documentation materials

#### 2. System Integration
- Execute technical integration with existing infrastructure
- Configure monitoring and alerting systems
- Establish performance tracking and optimization procedures
- Validate security and compliance requirements

#### 3. User Enablement
- Conduct user training and onboarding
- Provide comprehensive documentation and support materials
- Establish feedback collection and support procedures
- Monitor adoption and usage patterns

#### 4. Ongoing Support
- Implement continuous monitoring and optimization
- Establish maintenance and update procedures
- Plan for future enhancements and evolution
- Document lessons learned and best practices

### Deployment Deliverables
- **Deployment Plan:** Comprehensive deployment procedures and timeline
- **Integration Documentation:** Technical integration specifications and procedures
- **User Training Materials:** Training guides, documentation, and support resources
- **Monitoring Setup:** Performance tracking and alerting configuration
