# OpenAI Webhook TypeScript Types

This package provides a set of TypeScript types for handling webhooks from [OpenAI's status page](https://status.openai.com/#).

## Overview

When building applications that integrate with OpenAI, you may need to handle webhooks sent by OpenAI. These webhooks contain data about various events, such as changes in component status or incident updates.

This package provides TypeScript types that correspond to the structure of the data sent in these webhooks. By using these types, you can leverage TypeScript's static type checking to write more reliable and maintainable code.

## Usage

First, install the package using npm:

```bash
npm install openai-webhook-types
```

Then, you can import the types into your TypeScript files:

```typescript
import {
	OpenAIStatus,
	OpenAIComponentStatus,
	OpenAIIncidentStatus,
} from "openai-webhook-types";
```

You can now use these types to strongly type your webhook event handlers.

### Contributing

Contributions are welcome! Please submit a pull request or create an issue if you have any improvements or suggestions.

### LICENSE

MIT
