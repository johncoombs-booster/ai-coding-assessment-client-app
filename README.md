# Donations Dashboard Bug Bash

## Description

Our users have been complaining of bugs in our Donations Dashboard. Audit our site for bugs, fix any that can be reasonably fixed within ticket scope, and give a report of fixed bugs and current status after the fixes

### Candidate Brief
- **Brief**: Please read the [candidate brief](candidate-brief.html) before proceeding further.

### Stack
- **Backend**: NestJS (TypeScript) — port 3001
- **Frontend**: React + TypeScript (CRA) — port 3000

### Setup

#### Backend
```bash
cd backend
npm install
npm start
# API available at http://localhost:3001/api/donations
```

#### Frontend
```bash
cd frontend
npm install
npm start
# App available at http://localhost:3000
```

The frontend proxies `/api/*` to the backend automatically via the `proxy` field in `package.json`.

### API
```
GET /api/donations
  ?grade=K|1|2|3|4|5|6
  ?dateFrom=YYYY-MM-DD
  ?dateTo=YYYY-MM-DD
  ?status=pending|confirmed|failed
```

### Known issues (intentional for the interview)
The donation filters are broken. Your task is to find and fix all bugs.
