# Workflow bagdes

[![Deploy static content to Pages](https://github.com/Sanhamm/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Sanhamm/social-media-client/actions/workflows/pages.yml)

## Progression

```
-npm install prettier --save-dev
```

to check if it is installed

```
-npx prettier -c src
```

Then use -w to write over all the files

```
-npx prettier -w src
```

```
-npm install eslint --save-dev
```

```
-npx eslint --init
```

```
-npm install --save-dev jest
```

Need a hook so it tests on commit

```
-npx mrm@2 lint-staged
```

```
install a bundler i use vite
```

```
-npm i vite -D
```

then i add and commit to my commit-commands branch

```
-git add .
-git commit -m "whatever"
-git push
```

Then i added cypress

```
npm install cypress --save-dev
```

Then i started it

```
npx cypress run
```
