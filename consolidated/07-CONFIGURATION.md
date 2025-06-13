# Meta-Agent System Configuration

## Overview

This document contains all configuration specifications for the meta-agent system, including agent definitions, integration settings, and build configurations. These configurations enable the meta-agent system to integrate seamlessly with the existing BMAD infrastructure.

---

## Meta-Agent Configuration Specification

### Data Resolution Paths

```
meta-agent-root: (project-root)/bmad-agent/meta-agents
meta-checklists: (meta-agent-root)/checklists
meta-data: (meta-agent-root)/data
meta-personas: (meta-agent-root)/personas
meta-tasks: (meta-agent-root)/tasks
meta-templates: (meta-agent-root)/templates
```

**Note:** All Meta-Agent Persona references and task markdown style links assume these data resolution paths unless a specific path is given.

### Agent Definitions

#### Meta-Agent Orchestrator
```yaml
Title: Meta-Agent Orchestrator
Name: Meta-BMad
Customize: "Strategic coordinator with deep understanding of the entire meta-agent ecosystem. Expert in complex multi-agent orchestration."
Description: "Central orchestrator for meta-agent operations. Coordinates multiple meta-agents for complex agent creation and management tasks."
Persona: "meta-orchestrator.md"
Tasks:
  - "Orchestrate Agent Creation": "orchestrate-agent-creation.md"
  - "Coordinate Meta-Agents": "coordinate-meta-agents.md"
  - "Manage Self-Improvement": "manage-self-improvement.md"
  - "Integrate with BMad": "integrate-with-bmad.md"
```

#### Agent Architecture Designer
```yaml
Title: Agent Architecture Designer
Name: Timmy-Meta
Customize: "Expert in system design patterns, agent interaction models, and team composition optimization. Analytical and strategic thinker."
Description: "Specializes in analyzing problem domains and designing optimal agent team compositions. Masters requirements decomposition and agent role definition."
Persona: "agent-architect.md"
Tasks:
  - "Analyze Requirements": "analyze-requirements.md"
  - "Design Agent Team": "design-agent-team.md"
  - "Optimize Team Composition": "optimize-team-composition.md"
  - "Create Workflow Design": "create-workflow-design.md"
```

#### Persona Creator
```yaml
Title: Persona Creator
Name: Sarah-Meta
Customize: "Creative and empathetic, with deep understanding of human-AI interaction patterns. Expert in behavioral psychology and AI personality design."
Description: "Specializes in creating and refining agent personas, capabilities, and behavioral patterns. Masters persona development and validation."
Persona: "persona-creator.md"
Tasks:
  - "Create Persona": "create-persona.md"
  - "Refine Behavioral Patterns": "refine-behavioral-patterns.md"
  - "Map Capabilities": "map-capabilities.md"
  - "Validate Persona": "validate-persona.md"
```

#### Configuration Manager
```yaml
Title: Configuration Manager
Name: Bill-Meta
Customize: "Detail-oriented and systematic. Expert in configuration management, workflow orchestration, and system integration."
Description: "Specializes in generating and managing agent configurations, task definitions, and inter-agent workflows."
Persona: "config-manager.md"
Tasks:
  - "Generate Configuration": "generate-config.md"
  - "Create Task Workflows": "create-task-workflows.md"
  - "Assign Templates": "assign-templates.md"
  - "Plan Integration": "plan-integration.md"
```

#### Agent Tester & Validator
```yaml
Title: Agent Tester & Validator
Name: Karen-Meta
Customize: "Quality-focused and methodical. Expert in testing methodologies, validation frameworks, and performance analysis."
Description: "Specializes in testing new agent teams and validating their effectiveness through comprehensive quality assurance."
Persona: "agent-tester.md"
Tasks:
  - "Test Agent Interactions": "test-agent-interactions.md"
  - "Validate Performance": "validate-performance.md"
  - "Quality Assurance": "quality-assurance.md"
  - "Collect Feedback": "collect-feedback.md"
```

#### Deployment & Integration Specialist
```yaml
Title: Deployment & Integration Specialist
Name: James-Meta
Customize: "Operations-focused and pragmatic. Expert in deployment strategies, system integration, and maintenance procedures."
Description: "Specializes in deploying and integrating new agent teams into existing systems with robust rollback and monitoring capabilities."
Persona: "deployment-specialist.md"
Tasks:
  - "Plan Deployment": "plan-deployment.md"
  - "Execute Integration": "execute-integration.md"
  - "Setup Monitoring": "setup-monitoring.md"
  - "Manage Rollback": "manage-rollback.md"
```

---

## BMAD System Integration Configuration

### IDE Integration Configuration

#### Addition to `bmad-agent/ide-bmad-orchestrator.cfg.md`

```markdown
## Meta-Agent Section

### Title: Meta-Agent Orchestrator
- Name: Meta-BMad
- Customize: ""
- Description: "Central orchestrator for meta-agent operations. Coordinates multiple meta-agents for complex agent creation and management tasks."
- Persona: "meta-agents/personas/meta-orchestrator.md"
- Tasks:
  - [Orchestrate Agent Creation](meta-agents/tasks/orchestrate-agent-creation.md)
  - [Coordinate Meta-Agents](meta-agents/tasks/coordinate-meta-agents.md)

### Title: Agent Architecture Designer
- Name: Timmy-Meta
- Customize: ""
- Description: "Specializes in analyzing problem domains and designing optimal agent team compositions."
- Persona: "meta-agents/personas/agent-architect.md"
- Tasks:
  - [Analyze Requirements](meta-agents/tasks/analyze-requirements.md)
  - [Design Agent Team](meta-agents/tasks/design-agent-team.md)

### Title: Persona Creator
- Name: Sarah-Meta
- Customize: ""
- Description: "Specializes in creating and refining agent personas, capabilities, and behavioral patterns."
- Persona: "meta-agents/personas/persona-creator.md"
- Tasks:
  - [Create Persona](meta-agents/tasks/create-persona.md)
  - [Validate Persona](meta-agents/tasks/validate-persona.md)
```

### Web Integration Configuration

#### Addition to `bmad-agent/web-bmad-orchestrator-agent.cfg.md`

```markdown
## Title: Meta-Agent System
- Name: Meta-BMad
- Customize: "Expert in creating and managing agent teams. Strategic coordinator with deep understanding of agent orchestration."
- Description: "Specialized system for designing and deploying agent teams tailored to specific problem domains."
- Persona: "meta-agents#meta-orchestrator"
- checklists:
  - [Requirements Analysis Checklist](meta-agents#requirements-analysis-checklist)
  - [Persona Quality Checklist](meta-agents#persona-quality-checklist)
  - [Deployment Readiness Checklist](meta-agents#deployment-readiness-checklist)
- templates:
  - [Agent Requirements Analysis](meta-agents#agent-requirements-analysis)
  - [Agent Team Design](meta-agents#agent-team-design)
  - [Persona Development](meta-agents#persona-development)
  - [Deployment Planning](meta-agents#deployment-planning)
- tasks:
  - [Orchestrate Agent Creation](meta-agents#orchestrate-agent-creation)
  - [Analyze Requirements](meta-agents#analyze-requirements)
  - [Create Persona](meta-agents#create-persona)
  - [Test Agent Team](meta-agents#test-agent-team)
  - [Deploy Agent Team](meta-agents#deploy-agent-team)
- data:
  - [Agent Design Patterns](meta-agents#agent-design-patterns)
  - [Persona Best Practices](meta-agents#persona-best-practices)
- Interaction Modes:
  - "Interactive"
  - "YOLO"
  - "Hybrid"
```

---

## Build System Configuration

### Meta-Agent Build Configuration

#### `build-meta-agent.cfg.js`

```javascript
// build-meta-agent.cfg.js
// Configuration for building the meta-agent system

module.exports = {
  orchestrator_agent_prompt: "./bmad-agent/meta-agents/personas/meta-orchestrator.md",
  agent_cfg: "./bmad-agent/meta-agents/meta-agent-config.md",
  asset_root: "./bmad-agent/meta-agents/",
  build_dir: "./build-meta/",
};
```

#### Combined Build Configuration

```javascript
// build-combined-agent.cfg.js
// Configuration for building BMAD + Meta-Agent system

module.exports = {
  orchestrator_agent_prompt: "./bmad-agent/web-bmad-orchestrator-agent.md",
  agent_cfg: "./bmad-agent/web-bmad-orchestrator-agent.cfg.md",
  asset_root: "./bmad-agent/",
  build_dir: "./build-combined/",
  include_meta_agents: true,
  meta_agent_config: "./bmad-agent/meta-agents/meta-agent-config.md"
};
```

### Build Commands

#### Separate Meta-Agent Build
```bash
# Build meta-agent system only
node build-web-agent.js --config build-meta-agent.cfg.js
```

#### Combined System Build
```bash
# Build BMAD + Meta-Agent system
node build-web-agent.js --config build-combined-agent.cfg.js
```

#### Standard BMAD Build (unchanged)
```bash
# Build standard BMAD system
node build-web-agent.js
```

---

## Environment Configuration

### Development Environment

#### File Structure Requirements
```
project-root/
├── bmad-agent/
│   ├── [existing BMAD files]
│   └── meta-agents/
│       ├── personas/
│       ├── tasks/
│       ├── templates/
│       ├── checklists/
│       ├── data/
│       └── meta-agent-config.md
├── build-meta-agent.cfg.js
└── consolidated/ (optional)
    ├── 00-INDEX.md
    ├── 01-SYSTEM-OVERVIEW.md
    └── [other consolidated files]
```

#### Dependencies
- Node.js (for build system)
- Existing BMAD system installation
- Access to meta-agent configuration files

### Production Environment

#### Deployment Options

**Option 1: Separate Meta-Agent Deployment**
- Deploy meta-agent system as standalone web agent
- Use for specialized agent creation tasks
- Maintain separate from standard BMAD agents

**Option 2: Integrated Deployment**
- Deploy combined BMAD + Meta-Agent system
- Access meta-agents through standard BMAD orchestrator
- Unified user experience

**Option 3: Hybrid Deployment**
- Deploy both separate and integrated versions
- Use separate for development and testing
- Use integrated for production agent creation

---

## Integration Settings

### Command Integration

#### New Commands for BMAD Orchestrator

```
/meta-agent-list    - List all available meta-agents
/load-meta-bmad     - Activate meta-agent orchestrator
/create-agent-team  - Start agent team creation process
/meta-help          - Show meta-agent specific help
```

#### Meta-Agent Specific Commands

```
/analyze-requirements - Start requirements analysis
/design-team         - Begin team design process
/create-personas     - Start persona creation
/test-team          - Begin team testing
/deploy-team        - Start deployment process
```

### Data Integration

#### Shared Resources
- Templates: Extend existing template library
- Checklists: Enhance existing quality processes
- Data: Access existing knowledge bases
- Build System: Use existing infrastructure

#### Meta-Agent Specific Resources
- Agent design patterns knowledge base
- Persona development best practices
- Deployment strategies and procedures
- Quality assurance frameworks

### Quality Integration

#### Quality Standards
- Maintain existing BMAD quality standards
- Add meta-agent specific quality measures
- Ensure consistency across all created agents
- Implement comprehensive testing procedures

#### Monitoring Integration
- Extend existing monitoring capabilities
- Add meta-agent performance tracking
- Monitor created agent team effectiveness
- Track user satisfaction and adoption

---

## Customization Options

### Agent Customization

#### Personality Customization
- Adjust communication styles
- Modify expertise levels
- Customize interaction patterns
- Adapt to organizational culture

#### Capability Customization
- Enable/disable specific features
- Adjust performance parameters
- Customize integration points
- Modify workflow patterns

### System Customization

#### Workflow Customization
- Modify agent creation processes
- Customize quality gates
- Adjust approval procedures
- Adapt to organizational requirements

#### Integration Customization
- Configure external system connections
- Customize data formats
- Adjust security settings
- Modify deployment procedures

### Template Customization

#### Document Templates
- Customize analysis templates
- Modify design specifications
- Adjust quality checklists
- Adapt deployment plans

#### Configuration Templates
- Customize agent configurations
- Modify task definitions
- Adjust integration settings
- Adapt monitoring configurations

---

## Security and Compliance

### Security Configuration

#### Access Control
- Role-based access to meta-agent functions
- Secure configuration management
- Protected sensitive data handling
- Audit trail maintenance

#### Data Protection
- Encryption of sensitive configurations
- Secure communication protocols
- Data privacy compliance
- Backup and recovery procedures

### Compliance Settings

#### Regulatory Compliance
- GDPR compliance for data handling
- Industry-specific requirements
- Audit and reporting capabilities
- Documentation requirements

#### Quality Compliance
- Quality standard adherence
- Testing and validation requirements
- Documentation standards
- Change management procedures

This configuration specification provides the complete technical foundation for implementing and integrating the meta-agent system with existing BMAD infrastructure while maintaining security, quality, and compliance standards.
