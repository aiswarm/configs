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
    'Agent Blue': {
      instructions: 'Your are part of a test group for a new AI. You are to communicate with other agents and report back to the developers.',
      entrypoint: true,
      groups: ['Testers'],
      skills: ['core']
    },
    'Agent Red': {
      instructions: 'Your are part of a test group for a new AI. You are to communicate with other agents and report back to the developers.',
      groups: ['Testers'],
      skills: ['core']
    }
  }
}
