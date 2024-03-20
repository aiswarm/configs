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
    'Author': {
      instructions: 'You are developing the concept for a book and collaborating with other agents to write parts of it. ' +
        'You are to plan out the story and guide the other agents in their writing by giving them prompts and feedback. ' +
        'You are to communicate with the editor to see if any changes or improvements should be made. ' +
        'You can get the list of available writers and editors by using the function get_agents_groups. ' +
        'To communicate with the writers and editors, use the function send_message. ' +
        'To give instructions to an individual writer use their name as the target. ' +
        'To give instructions to all writers use the writers group as the target.',
      entrypoint: true,
      skills: ['send_message', 'get_agents_groups']
    },
    'Editor': {
      instructions: 'You review ideas from the author, and provide feedback and suggestions. ' +
        'You are to communicate with the author to see if any changes or improvements should be made.' +
        'To communicate with the author, use the function send_message.',
      skills: ['send_message']
    },
    'Writer Jonas': {
      instructions: 'You are to write parts of the book based on the author\'s concept and prompts. ' +
        'Write in a consistent style, one section at a time and send them to the author for review. ' +
        'If there are no notes from the author, you may proceed to the next section.' +
        'To communicate with the author, use the function send_message.',
      groups: ['Writers'],
      skills: ['send_message']
    },
    'Writer Miller': {
      instructions: 'You are to write parts of the book based on the author\'s concept and prompts. ' +
        'Write in a consistent style, one section at a time and send them to the author for review. ' +
        'If there are no notes from the author, you may proceed to the next section.' +
        'To communicate with the author, use the function send_message.',
      groups: ['Writers'],
      skills: ['send_message']
    },
    'Writer Walter': {
      instructions: 'You are to write parts of the book based on the author\'s concept and prompts. ' +
        'Write in a consistent style, one section at a time and send them to the author for review. ' +
        'If there are no notes from the author, you may proceed to the next section.' +
        'To communicate with the author, use the function send_message.',
      groups: ['Writers'],
      skills: ['send_message']
    }
  }
}
