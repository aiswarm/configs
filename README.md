# configs
A repository of configurations that can be used as a starting point for developing your own swarm applications.

## Writing Configurations

The configuration files support either json format or .js files that export an object. The object should be a valid configuration for your use case.

Files can be broken up into multiple files and directories to make it easier to manage and share configurations. The files will be merged together when loaded based on the directory and file names that you used. With this you can use separate sections for agents, skills, and global configuration.

When starting the app and no path is given to the config, the app will default to `config` in the directory the app is run in. It will the first check if it's an existing file or directory, and if not will look, for files with the `.js` or `.json` extensions and load those.

## Sections

The configuration file is broken up in multiple sections that you can configure. Most have a default value that will be used if you don't specify it. The documentation below will mention if a section is required.

### Global

This is a helper section that will apply its rules to any item of a subsection, if it's not specified on the item itself.  This is useful for setting defaults for all agents, skills, etc.

For example, if you want to set the default driver for all agents to be `openai`, you can do that in the global section. If you want to override that for a specific agent, you can do that in the agent's section.
```json
{
  "global": {
    "agents": {
      "driver": {
        "type": "openai"
      }
    }
  }
}
```

You could also set a default group for all agents:

```json
{
  "global": {
    "agents": {
      "groups": [ "My Group" ]
    }
  }
}
```

### Agents

This section is required and is used to define the agents that will be used in the application. Each agent should have a unique name.

```json
{
  "agents": {
    "My Agent": {
      "instructions": "Your are part of a test group for a new AI. You will receive the first message from the user",
      "entrypoint": true,
      "groups": [ "My Group" ],
      "skills": [ "send_message", "create_agent" ]
    },
    "My Other Agent": {
      "instructions": "Your are part of a test group for a new AI.",
      "groups": [ "My Group" ],
      "skills": [ "send_message" ]
    }
  }
}
```

There are several properties you can set for an agent:

- `instructions`: The system instructions for the agent. This info will not be shown to the user. This is a message that's sent to the agent to be processed.
- `entrypoint`: If true, the agent will be the one to receive any starting instructions from the command line or UI. You can have multiple entrypoints and all will get the same starting message.
- `groups`: An array of groups the agent is part of. This is used to determine which agents will receive a message when a group is targeted. Groups can be specified here or as part of the group section. Both will be merged together.
- `skills`: An array of skills the agent has. This is used to determine which skills will be available to the agent. The list of available skills depend on the plugins that are installed. Refer to the plugin documentation for more information. Below you can see the list of built-in skills.

### Skills

This section is optional and used to override the default instructions of any skills that are available. Note that plugins may add skills that are not configurable this way.

```json
{
  "skills": {
    "sendMessage": {
      "description": "Sends a message to an agent or group. Does not receive an answer as response, but only a confirmation that the message was sent. If you want an answer you will have to wait for a new message to be received that the user has passed on from the other agent.",
      "parameters": {
        "target": "The name of the agent or group to send the message to",
        "message": "The message to send",
        "type": "Can be ignored for now, defaults to 'string' which is the only format we support at this point."
      }
    }
  }
}
```

in most cases you will not have to make any changes here, but it's available if needed.

The built-in skills are:
* createAgent
* createGroup
* getAgentsAndGroups
* getSkillInfo
* getTimeAndDate
* sendMessage

### Groups

This is another optional section that can be used to define groups and the agents that are part of them. This might make group organization a little easier if you don't want to specify a group on every agent

```json
{
  "groups": {
    "My Group": [ "My Agent", "My Other Agent" ]
  }
}
```

### Drivers

It will depend on the driver to determine if this section is optional or not. Most will likely need some configuration. The OpenAI driver is an exception if you have an environment variable name `OPENAI_API_KEY` set for the API key. Otherwise, you should set it here or in the global section which will apply it to every agent driver:

```json
{
  "drivers": {
    "openai": {
      "apiKey": "your-api-key",
      "model": "gpt-3.5-turbo"
    }
  }
}
```

If you need to configure any additional values for the openAI driver, please refer to the repo for the driver for more information.

### Comms

This section is optional and is used to configure the communication between agents. It allows to configure different limit values for keeping a history. If you run into memory problems you may want to tweak a thing or two here. This is the default configuration:

```json
{
  "comms": {
    "history": {
      "limits": {
        "all": 100000,
        "individual": 10000
      }
    }
  }
}
``` 

## Example Configurations

This repo have a number of configurations that you can try and modify for yourself. Use them as a starting point for your own configurations. You can also use them as a reference for how to structure your information.