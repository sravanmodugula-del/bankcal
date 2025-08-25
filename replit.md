# Overview

This is a modern web application built with a React frontend and Express backend, featuring a financial calculator interface. The application appears to be themed around a banking/financial services company called "SecureBank" and includes a calculator component as the main feature. The project uses TypeScript throughout and implements modern development practices with comprehensive UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation integration

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL configured with Drizzle ORM
- **Session Management**: PostgreSQL session store with express-session
- **Development**: Hot reload with Vite integration for full-stack development

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema**: Centralized in `shared/schema.ts` with Zod validation
- **Migrations**: Automated with Drizzle Kit

## Authentication & Authorization
- **Session Management**: Express-session with PostgreSQL store (connect-pg-simple)
- **User Model**: Basic user schema with username/password fields
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Project Structure
- **Monorepo**: Single repository with client, server, and shared code
- **Client**: React frontend in `/client` directory
- **Server**: Express backend in `/server` directory  
- **Shared**: Common types and schemas in `/shared` directory
- **Path Aliases**: TypeScript path mapping for clean imports

## Development Features
- **Hot Reload**: Vite dev server with Express integration
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Component Library**: Comprehensive UI component system with consistent theming
- **Error Handling**: Runtime error overlay for development
- **Build Process**: Optimized production builds with code splitting

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations and schema management

## UI Framework
- **Radix UI**: Headless UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state and validation

## Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing with Autoprefixer

## Runtime Dependencies
- **Express.js**: Web application framework
- **Wouter**: Lightweight router for React
- **Zod**: Schema validation library
- **Date-fns**: Date manipulation utilities