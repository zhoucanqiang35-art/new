import {defineConfig} from 'astro/config';
export default defineConfig({site:'https://pikobuysheet.fi',output:'static',vite:{server:{allowedHosts:['terminal.local']}}});
