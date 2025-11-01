# File Manager

A modular command-line file manager built with Node.js following best programming practices.

## Architecture

The application follows **SOLID principles** and **Separation of Concerns**:

```
file-manager/
├── index.js                          # Entry point - minimal orchestration
├── package.json                      # Project configuration
└── src/
    ├── commands/                     # Command handling layer
    │   └── command-executor.js       # Central command dispatcher
    ├── operations/                   # Business logic layer
    │   ├── navigation.js             # Directory navigation (up, cd, ls)
    │   ├── file-operations.js        # File operations (cat, add, cp, mv, rm, etc.)
    │   ├── os-info.js                # OS information (EOL, CPUs, homedir, etc.)
    │   ├── hash.js                   # Hash calculation using streams
    │   └── compression.js            # Brotli compression/decompression
    └── utils/                        # Utility functions
        ├── args-parser.js            # CLI argument parsing
        ├── messages.js               # User-facing messages
        └── path-resolver.js          # Path resolution helpers
```

## Design Principles Applied

### 1. **Single Responsibility Principle (SRP)**
- Each module has one clear purpose
- `navigation.js` - only handles directory operations
- `file-operations.js` - only handles file operations
- `messages.js` - only handles user messages

### 2. **Separation of Concerns**
- **Presentation Layer** (`utils/messages.js`) - user interface messages
- **Business Logic** (`operations/*`) - core functionality
- **Command Layer** (`commands/command-executor.js`) - input parsing and routing
- **Entry Point** (`index.js`) - minimal orchestration

### 3. **DRY (Don't Repeat Yourself)**
- Path resolution logic centralized in `path-resolver.js`
- Message formatting centralized in `messages.js`
- Reusable operation functions

### 4. **Modularity**
- Each file is independently testable
- Easy to add new commands or operations
- Clear dependencies between modules

### 5. **Maintainability**
- Easy to locate and fix bugs (each operation in its own file)
- Easy to extend functionality
- Clear module boundaries

## Installation

No external dependencies required. Uses only Node.js built-in modules.

```bash
npm install
```

## Usage

```bash
npm run start -- --username=your_username
```

## Commands

### Navigation
- `up` - Go to parent directory
- `cd path` - Change directory
- `ls` - List directory contents

### File Operations
- `cat path` - Display file content
- `add filename` - Create empty file
- `mkdir dirname` - Create directory
- `rn oldpath newname` - Rename file
- `cp source dest` - Copy file
- `mv source dest` - Move file
- `rm path` - Delete file

### OS Information
- `os --EOL` - Show End-Of-Line
- `os --cpus` - Show CPU info
- `os --homedir` - Show home directory
- `os --username` - Show system username
- `os --architecture` - Show CPU architecture

### Hash
- `hash path` - Calculate SHA-256 hash

### Compression
- `compress source dest` - Compress with Brotli
- `decompress source dest` - Decompress Brotli file

### Exit
- `.exit` - Exit application
- `Ctrl+C` - Exit application

## Benefits of This Architecture

1. **Testability** - Each module can be unit tested independently
2. **Scalability** - Easy to add new commands without affecting existing code
3. **Readability** - Clear file structure makes codebase easy to understand
4. **Maintainability** - Changes to one feature don't affect others
5. **Reusability** - Operations can be imported and used in other projects
6. **Debugging** - Easy to locate issues by module
7. **Team Development** - Multiple developers can work on different modules simultaneously

## Technical Requirements

- Node.js >= 24.14.0
- No external dependencies
- ES Modules
- Streams API for file operations

