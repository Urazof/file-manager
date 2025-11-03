# File Manager

A modular command-line file manager built with Node.js following best programming practices.

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

## Technical Requirements

- Node.js >= 24.14.0
- No external dependencies
- ES Modules
- Streams API for file operations

