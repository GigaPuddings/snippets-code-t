import { describe, expect, it } from 'vitest'
import { getRuntimeBaseUrl, getRuntimeWasmPaths } from './offlineTranslator'

describe('offlineTranslator runtime URL helpers', () => {
  it('keeps encoded Windows asset URLs in the transformers directory', () => {
    const runtimeUrl =
      'http://asset.localhost/D%3A%5CProgram%20Files%5Csnippets-code%5Cplugins%5Ctranslation-offline-runtime%5Cresources%5Ctransformers%5Ctransformers.min.js'

    expect(getRuntimeBaseUrl(runtimeUrl)).toBe(
      'http://asset.localhost/D%3A%5CProgram%20Files%5Csnippets-code%5Cplugins%5Ctranslation-offline-runtime%5Cresources%5Ctransformers%5C'
    )
    expect(getRuntimeWasmPaths(runtimeUrl)['ort-wasm.wasm']).toBe(
      'http://asset.localhost/D%3A%5CProgram%20Files%5Csnippets-code%5Cplugins%5Ctranslation-offline-runtime%5Cresources%5Ctransformers%5Cort-wasm.wasm'
    )
  })

  it('handles normal URL paths with query strings', () => {
    const runtimeUrl = 'http://asset.localhost/plugins/runtime/transformers.min.js?v=1'

    expect(getRuntimeBaseUrl(runtimeUrl)).toBe(
      'http://asset.localhost/plugins/runtime/'
    )
  })
})
