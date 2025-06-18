[View Portuguese version](README.pt-BR.md)

# 🚀 Pigz Frontend Challenge

This project is a technical test for Pigz company, developed with React, TypeScript, and Vite. The goal is to demonstrate frontend development skills, including best practices, code organization, and user experience.

## 🛠️ Technologies Used

- ⚛️ React 19
- 📘 TypeScript
- ⚡ Vite
- 🎨 TailwindCSS
- 🔄 Tanstack Query
- 📝 React Hook Form
- ✅ Zod
- 🎯 Zustand

## 🚀 How to Run the Project

### Prerequisites

- Node.js (version 18 or higher)
- Yarn or npm

### 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/seu-usuario/desafio-pigz-front.git
cd desafio-pigz-front
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

The project will be available at `http://localhost:5173`

## 📦 Available Scripts

- `yarn dev` - Starts the development server
- `yarn build` - Creates production build
- `yarn lint` - Runs the linter
- `yarn preview` - Previews production build locally

## 🏗️ Project Structure

```
src/
├── assets/          # Static resources (images, icons, fonts)
├── components/      # React components organized by atomic design
│   ├── atoms/      # Basic components (buttons, inputs, texts)
│   ├── molecules/  # Composite components (forms, cards)
│   ├── organisms/  # Complex components (headers, sidebars)
│   └── templates/  # Page layouts and structures
├── constants/       # Constants, enums, and global configurations
├── providers/       # Application providers
│   ├── AppProvider.tsx    # Main provider that groups all providers
│   └── QueryProvider.tsx  # Tanstack Query configuration
├── services/       # API services and external integrations
├── store/          # Global state management (Zustand)
└── types/          # TypeScript type definitions and interfaces
```

### 📁 Folder Details

#### Components (Atomic Design)

- **Atoms**: Fundamental and reusable components

  - Buttons, inputs, texts, icons
  - Pure components without business logic
  - Highly reusable and independent

- **Molecules**: Combinations of atoms

  - Forms, cards, lists
  - Small groups of components
  - Simple and reusable logic

- **Organisms**: Complex components

  - Headers, sidebars, modals
  - Combinations of molecules and atoms
  - Specific business logic

- **Templates**: Page structures
  - Base layouts
  - Organization of organisms
  - Overall page structure

### 📝 Note on Atomic Design Organization

In this test project, all components are organized within the `@/components` folder following the atomic design structure (atoms, molecules, organisms, templates). However, in real projects, there are two main approaches to organizing components:

1. **Centralized Approach**

   - All components in `@/components`
   - Structure: `@/components/{atoms|molecules|organisms|templates}`
   - Advantages:
     - Easy component location
     - More evident reuse
     - Guaranteed consistency
   - Disadvantages:
     - Can become too large
     - Mixes specific and reusable components

2. **Hybrid Approach**
   - Reusable components in `@/components`
   - Specific components in `@/pages/{pageName}/components`
   - Structure:
     ```
     src/
     ├── components/           # Reusable components
     │   ├── atoms/
     │   ├── molecules/
     │   └── organisms/
     └── pages/
         └── home/
             └── components/   # Page-specific components
     ```
   - Advantages:
     - Better cohesion
     - Easier maintenance
     - Avoids component directory pollution
   - Disadvantages:
     - Potential duplication
     - Harder to find components

The choice between approaches should consider:

- Project size
- Team preferences
- Component complexity
- Reuse needs
- Company standards

#### Other Folders

- **Assets**: Static resources organized by type

  - Images and SVGs
  - Fonts and icons
  - Media files

- **Constants**: Configurations and fixed values

  - Enums and constants
  - Environment configurations
  - Default values

- **Providers**: Application configurations and providers

  - AppProvider: Main provider that groups all providers
  - QueryProvider: Centralized Tanstack Query configuration
  - Facilitates maintenance and configuration reuse
  - Allows organized addition of new providers

- **Services**: Integrations and APIs

  - HTTP clients
  - Authentication services
  - External API integrations

- **Store**: State management

  - Zustand stores
  - State slices
  - Actions and reducers

- **Types**: TypeScript definitions
  - Interfaces
  - Types
  - DTOs and models

## 🎯 Features

- ✨ Modern and responsive interface
- 🔄 Efficient state management
- 📱 Mobile-first design
- 🎨 Styling with TailwindCSS
- 🔒 Form validation
- 🌐 API integration

## 📝 License

This project is a technical test and has no specific license.

## 👨‍💻 Author

Your Name - [renanolovics@gmail.com](mailto:renanolovics@gmail.com)

## 📚 Project Explanations

### Architecture and Technical Decisions

- **State Management**: Used Zustand for its simplicity and performance
- **Forms**: React Hook Form + Zod for robust validation and type safety
- **Queries**: Tanstack Query for efficient cache management and loading/error states with Axios
- **Styling**: TailwindCSS for rapid and consistent development

### Patterns and Best Practices

- Atomic componentization for reuse and maintenance
- Strong typing with TypeScript
- Clear separation of responsibilities
- Component and function documentation

## 🔮 Future Improvements

### Performance

- Implementation of lazy loading for heavy components
- Image and asset optimization
- Storybook implementation
- SEO improvements

### Features

- Internationalization (i18n)
- Dark/light theme
- More elaborate animations and transitions

### Development

- CI/CD implementation
- Error monitoring (e.g., Sentry)
- User tracking with PostHog
- E2E tests with Cypress or Playwright
- Performance metrics (Core Web Vitals)

### UX/UI

- More elaborate visual feedback
- Accessibility improvements
- More complete Design System

### 🎨 Pixel Perfect Development vs Responsiveness

In this project, development follows the "pixel perfect" concept, where implementation must exactly match the provided design. However, it's important to highlight some points about this approach:

#### Pixel Perfect Challenges

- Designers often create layouts for a specific screen size
- Don't consider device and resolution diversity
- Can create limitations for responsive implementation
- May result in sub-optimal experience on different devices

#### Real-World Responsiveness

- Users access from various devices:
  - Smartphones (different sizes)
  - Tablets
  - Laptops
  - Large monitors
  - Ultrawide screens
- Need for fluid adaptation
- Prioritizing user experience over absolute design fidelity

#### Team Recommendations

1. **Design**

   - Provide clear breakpoints
   - Consider different screen sizes
   - Define responsive behaviors
   - Establish element hierarchy

2. **Development**

   - Maintain constant communication with design
   - Have freedom for responsive adaptations
   - Prioritize usability over visual perfection
   - Implement tests on different devices

3. **Process**
   - Design reviews considering responsiveness
   - Constant feedback between design and development
   - Documentation of responsive behaviors
   - Usability testing on different devices

The pursuit of pixel perfect should not compromise user experience on different devices. It's crucial to find a balance between design fidelity and effective responsiveness.

### 🎯 Design Patterns Used

#### Atomic Design

- **Atoms**: Basic and reusable components

  - Buttons, inputs, icons
  - Pure components without business logic
  - Highly reusable

- **Molecules**: Combinations of atoms

  - Forms, cards
  - Small groups of components
  - Simple logic

- **Organisms**: Complex components
  - Headers, banners
  - Combinations of molecules
  - Specific business logic

#### Other Patterns

- **Provider Pattern**

  - Configuration centralization
  - Dependency injection
  - Example: QueryProvider, AppProvider

- **Container/Presentational**

  - Separation of logic and presentation
  - Pure components for UI
  - Containers for business logic

- **Custom Hooks**
  - Encapsulation of reusable logic
  - Example: useSearchCity, useSearchAddress
  - Separation of responsibilities

### 🛠️ Code Patterns and Organization

> **Note**: As this is a test project, some of these practices and patterns were not fully implemented. In a real project, it would be important to follow these guidelines more strictly to ensure code quality and maintainability.

#### Import Organization

1. **Import Order**

   - React imports first
   - External libraries next
   - Absolute imports (@/) after
   - Relative imports (./) last
   - Blank line between each group

2. **Type Imports**
   - Mandatory use of `import type` for types
   - Separation of types and values
   - Example:
     ```typescript
     import type { PropsWithChildren } from 'react'
     import { useState } from 'react'
     ```

#### Code Patterns

1. **Functions**

   - Preference for arrow functions
   - Descriptive names in camelCase
   - Pure functions when possible
   - Avoid nested functions

2. **Variables and Constants**

   - Descriptive names in camelCase
   - Constants in UPPER_SNAKE_CASE
   - Avoid unused variables
   - Explicit typing when necessary

3. **Components**

   - Names in PascalCase
   - Props typed with interface/type
   - Small and focused components
   - Separation of logic and presentation

4. **Hooks**
   - Mandatory 'use' prefix
   - Encapsulation of complex logic
   - Avoid nested hooks
   - Dependency documentation

#### Suggested Improvements

1. **ESLint**

   - Stricter rules for imports
   - Force use of arrow functions
   - Detect unused variables
   - Naming standardization
   - Prevent circular imports

2. **Prettier**

   - Consistent formatting
   - Automatic import ordering
   - Line break patterns
   - Quote and semicolon configuration

3. **TypeScript**
   - Stricter configuration
   - Force explicit typing
   - Avoid use of `any`
   - Better use of utility types

#### Benefits

1. **Maintainability**

   - More predictable code
   - Fewer potential bugs
   - Easier refactoring
   - Better implicit documentation

2. **Productivity**

   - Less time in reviews
   - Early error detection
   - Formatting automation
   - Better development experience

3. **Quality**
   - More robust code
   - Better performance
   - Fewer runtime issues
   - Better user experience

---

⭐️ Developed with ❤️ for Pigz's selection process
