# React Countdown

## Tutorials

- [React Countdown](https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks)
- [Heroku buildpack for React](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack)

## App.js
### Calculate the remaining time
```
const calculateTimeLeft = () => {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}/05/30`) - +new Date();
  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(difference / (1000 * 60 * 60) % 24),
    minutes: Math.floor(difference / (1000 * 60) % 60),
    seconds: Math.floor(difference / (1000) % 60)
  };
  return timeLeft
}
```

### Apply React Hooks for updating timer
```
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  return () => clearTimeout(timer);
});
```
### Generate timer component
```
const timerComponents = [];
Object.keys(timeLeft).forEach((interval) => {
  if(!timeLeft[interval] && timeLeft[interval] !== 0) return;

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  )
})
```
## Percentage Bar
- [Unicode percentage bar](https://changaco.oy.lc/unicode-progress-bars/)
- [Emoji percentage bar](https://observablehq.com/@iosonosempreio/emojii-progress-bar)
- [Twitter @year_progress](https://twitter.com/year_progress)

### Calculate percentage
```
const calculatePercent = () => {
  const totalInterval = +arriveTime - +departTime;
  const passedInterval = +new Date() - +departTime;
  const passedPercent = passedInterval / totalInterval;

  return passedPercent * 100;
};
```

### Generate Percnetage Bar Component
```
const visualizeProgress = (percent) => {
  // Example: ▓▓▓▓░░░░░░░░░░░ 25%
  const pastIcon = "▓";
  const futureIcon = "░";
  const numberOfGrid = 15;
  const numberOfPastGrid = Math.floor((numberOfGrid * percent) / 100);
  const numberOfFutureGrid = numberOfGrid - numberOfPastGrid;

  const percentBarComponent =
    pastIcon.repeat(numberOfPastGrid) + futureIcon.repeat(numberOfFutureGrid);

  return percentBarComponent;
};
```

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
