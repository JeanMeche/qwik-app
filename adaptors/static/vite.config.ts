import { staticAdaptor } from '@builder.io/qwik-city/adaptors/static/vite';
import { extendConfig, qwikCity } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan'],
      },
    },
    plugins: [
      qwikCity({ basePathname: '/qwik-app/' }),
      staticAdaptor({
        origin: 'https://jeanmeche.github.io/qwik-app/',
      }),
    ],
  };
});
