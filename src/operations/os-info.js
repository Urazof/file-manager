import { EOL, cpus, userInfo, arch, homedir } from 'node:os';

/**
 * Get and display End-Of-Line
 */
export function getEOL() {
  console.log(JSON.stringify(EOL));
}

/**
 * Get and display CPU information
 */
export function getCPUs() {
  const cpuInfo = cpus();
  console.log(`Overall CPUs: ${cpuInfo.length}`);
  cpuInfo.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}: ${cpu.model}, ${(cpu.speed / 1000).toFixed(2)} GHz`);
  });
}

/**
 * Get and display home directory
 */
export function getHomeDir() {
  console.log(homedir());
}

/**
 * Get and display system username
 */
export function getUsername() {
  console.log(userInfo().username);
}

/**
 * Get and display CPU architecture
 */
export function getArchitecture() {
  console.log(arch());
}

