# Laranuxt Skeleton

## Sail Alias

`alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'`

## Install and Run
`composer install`

`cp .env.example .env`

`php artisan key:generate`

`sail up -d`

`sail yarn && sail yarn build && sail yarn start`

## Run dev

`sail up -d`
`sail yarn dev`

### With hot reload in windows wsl (faster):

`yarn dev` `// not sail yarn dev`
