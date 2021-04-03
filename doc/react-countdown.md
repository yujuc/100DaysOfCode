# React Countdown

## Tutorials

- [React Countdown](https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks)
- [Heroku buildpack for React](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack)

## Issue
### Can not push React code to Heroku
File `package.json` is ignored in git, if you use `create-react-app` to generate the code.

[Related Link](https://github.com/mars/create-react-app-buildpack/issues/75)

### Check if package.json is added to git
```
git show --pretty="" --name-only <commit-id-8-digits>
```

### How to add default Home Screen icon in React
When you select "Add To Home Screen" in Safari of iPhone, you want the custom icon to be used as home screen icon
Add this to index.html
```
<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
```
[Favicon generator](https://favicon.io/)



# Resource
- [React Hooks](https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often)
  (Please study this)
