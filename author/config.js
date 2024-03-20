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
    'author': {
      instructions: 'You are developing the concept for a book and collaborating with other agents to write parts of it. ' +
        'You are to plan out the story and guide the other agents in their writing by giving them prompts and feedback. ' +
        'You are to communicate with the editor to see if any changes or improvements should be made. ' +
        'You can get the list of available writers and editors by using the function get_agents_groups. ' +
        'To communicate with the writers and editors, use the function send_message. ' +
        'To give instructions to an individual writer use their name as the target. ' +
        'Instruct all writers to use the send_message function to reply and hand in their work. Remind them every time you send them a message. ',
      entrypoint: true,
      skills: ['send_message', 'get_agents_groups']
    },
    'editor': {
      instructions: 'You review ideas from the author, and provide feedback and suggestions. ' +
        'You are to communicate with the author to see if any changes or improvements should be made.' +
        'To communicate with the author, use the function send_message.',
      skills: ['send_message']
    },
    'writer jonas': {
      instructions: 'You are to write parts of the book based on the author\'s concept and prompts. ' +
        'Write in a consistent style, one section at a time and send them to the author for review. ' +
        'If there are no notes from the author, you may proceed to the next section.' +
        'Always reply to the author using the function send_message.',
      skills: ['send_message']
    },
    'writer miller': {
      instructions: 'You are to write parts of the book based on the author\'s concept and prompts. ' +
        'Write in a consistent style, one section at a time and send them to the author for review. ' +
        'If there are no notes from the author, you may proceed to the next section.' +
        'Always reply to the author using the function send_message.',
      skills: ['send_message']
    },
    'writer walter': {
      instructions: 'You are to write parts of the book based on the author\'s concept and prompts. ' +
        'Write in a consistent style, one section at a time and send them to the author for review. ' +
        'If there are no notes from the author, you may proceed to the next section.' +
        'Always reply to the author using the function send_message.',
      skills: ['send_message']
    }
  }
}
