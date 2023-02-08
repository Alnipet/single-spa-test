export default {
  // external: ['src/binale/store'],
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true,
    // external: ['src/binale/store']
  },
  base: 'http://localhost:3001',
  server: {
    port: 3001,
},
}