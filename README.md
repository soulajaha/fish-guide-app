# Fish guide
Fish guide app created with [11ty](https://www.11ty.dev/) SSG and using [Decap CMS](https://decapcms.org/). Hosted on [Netlify](https://www.netlify.com/).

## Usage
Install dependencies with `npm install`.

### Development
Run `npx eleventy --serve` (or `npm run serve`) to start up a local development server and open http://localhost:8080/ in your web browser to see web site.

Run `npx decap-server` (or `npm run cms`) and open http://localhost:8080/admin to verify that you can administer your content locally.
> **Notice**  
> Before accessing the Decap CMS uncomment `local_backend: true` in the `admin/config.yml` file and comment out `backend` section.

### Build
Run `npx eleventy` (or `npm build`) to build site.
