// build-meta-agent.cfg.js
// Configuration for building the meta-agent system with the existing BMAD infrastructure

module.exports = {
  orchestrator_agent_prompt: "./bmad-agent/meta-agents/personas/meta-orchestrator.md",
  agent_cfg: "./bmad-agent/meta-agents/meta-agent-config.md",
  asset_root: "./bmad-agent/meta-agents/",
  build_dir: "./build-meta/",
};
