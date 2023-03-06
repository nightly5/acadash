import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            routes: {
                include: ["/*"],
                exclude: ["<all>"]
            }
        }),
        csp: {
            mode: 'auto',
            directives: {
                'default-src': ['self'],
                'img-src': ['self', 'data:', 'blob:'],
                'object-src': ['none'],
                'base-uri': ['self'],
                'style-src': [
                    'self', 'unsafe-inline'
                ],
                'style-src-elem': [
                    'self', 'unsafe-inline',
                    'sha256-KTPJY0ik6ufLv48oDKCYFYaptcCX75UrmWytfSjy+tA=',
                    'sha256-8M+b2Hj+vy/2J5tZ9pYDHeuPD59KsaEZn1XXj3xVhjg='
                ]
            }
        },
        files: {
            serviceWorker: 'src/service-worker.ts'
        }
    }
};

export default config;
