import { cacheAdapterEnhancer } from 'axios-extensions'

export default function ({ $axios }) {

    // Redirect static browser requests to data files
    if (process.browser && process.static) {
        $axios.onRequest(config => {
            if (config.staticCache){
                config.baseURL = '/data'
                let url = config.url.replace(/\/$/, "") + '.json'
                if (url === '.json') {
                    url = "index.json"
                }
                config.url = url
                return config
            }
        })
    }

    // Cache data locally
    if (process.server && process.static) {
        const mkdirp = require('mkdirp-promise')
        const { join, dirname } = require('path')
        const { writeFileSync } = require('fs')

        $axios.onResponse(async (response) => {
            if (response.config.staticCache) {
                let relativePath = response.request.path.replace(/\/$/, "") + '.json'
                if (relativePath === '.json') {
                    relativePath = "index.json"
                }
                const path = join(process.env.dataDir, relativePath)
                console.log('Save', path)
                await mkdirp(dirname(path))
                writeFileSync(path, JSON.stringify(response.data))
            }
            return response;
        })
    }

    // Configure cacheable routes
    // We need this because nuxtServerInit triggers once
    // per page being generated, so to save multiple request
    // we'll cache the result and reuse it
    if (process.server && process.static) {
        const defaults = $axios.defaults
        // https://github.com/kuitos/axios-extensions
        defaults.adapter = cacheAdapterEnhancer(defaults.adapter, {
            enabledByDefault: false
        })
    }

}