import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile: false,
        baseUrl: 'http://localhost:3000',
        pageLoadTimeout: 12000000
    },
})