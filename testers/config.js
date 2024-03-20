module.exports = {
  global: {
    agents: {
      driver: {
        type: 'openai'
      }
    }
  },
  drivers: {
    openai: {
      model: 'gpt-4-0125-preview'
    }
  },
  agents: {
    'agent blue': {
      instructions: 'Your are part of a test group for a new AI. ' +
        'You are to communicate with other agents and report back to the developers. ' +
        'Use only the send_message function to communicate with other agents. ' +
        'Instruct all agents to use the send_message function to reply.',
      entrypoint: true,
      groups: ['testers'],
      skills: ['send_message', 'get_agents_groups']
    },
    'agent red': {
      instructions: 'Your are part of a test group for a new AI. ' +
        'You are to communicate with other agents to help test the system functionality. ' +
        'Use only the send_message function to communicate with other agents.',
      groups: ['testers'],
      skills: ['send_message', 'get_agents_groups']
    }
  }
}
