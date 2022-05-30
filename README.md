# TVMaze assignment

## Requirements

- [x] Should work on both ​Android and iOS.
- [x] Should give the end user feedback concerning errors or very slow internet connection
- [x] Should have at least two screens, one for the detailed information about the series and one for the search and result
- [x] Must contain documentation about how to run the application in a simple manner
- [x] Should be written using Typescript

## Nice-To-Have Requirements

- [x] Create a favorite shows list
- [ ] Persistence, store the API response data and read it for repeated requests. Even when offline.
  - [x] API responses are chached locally for repeated requested
  - [ ] API repsonses are persisted accross restarts
  - [x] Favourites are persisted accross restarts
- [ ] Endless scroll or pagination

## Run App

- Make sure you have setup the React Native enviroment: [Setting up the development environment · React Native](https://reactnative.dev/docs/environment-setup)
- `npm install` the dependencies (add the `--legacy-peer-deps` flags if encountering conflicting peer dependencies)
- `npx pod-install ios` to install cocoapods (ios only)
- `npx react-native run-ios` to run iOS app
- `npx react-native run-android` to run andoird app

## Comments

- I intentionally chose inline styling over React Native's Stylesheet API because I personally find colocating styles with React elements easier to work with in small components. I know that this is a polarizing topic :)
- If have setup an event listener for connection state in `App.tsx` by using `@react-native-community/netinfo`. It is supposed to show a `react-native-flash-message` upon connection loss (and hide that message again when the connection has been re-established). Unfortunatly the events did not fire as expected when testing in the simulator. I have not spent any time debugging this. Might be related to this open issues: [addEventListener not updated when connection change · Issue #573 · react-native-netinfo/react-native-netinfo](https://github.com/react-native-netinfo/react-native-netinfo/issues/573)

## If more time

- Debugging the `@react-native-community/netinfo` issue.
- Show loading indicator first after an timeout to prevent flickering of the loading indicator when typing into the search bar
- Integrate `useSWR` with `@react-native-community/netinfo` as described [here](https://swr.vercel.app/docs/advanced/react-native)
- Uncompleted nice-to-haves

## Screenshots

![Search Shows](https://dthfytfu3txye.cloudfront.net/2022/05/29/165381633738101928.png)
![Show Details](https://dthfytfu3txye.cloudfront.net/2022/05/29/165381629927285870.png)
![Favourites Feature](https://dthfytfu3txye.cloudfront.net/2022/05/29/165381637286957192.png)
![No Results](https://dthfytfu3txye.cloudfront.net/2022/05/29/165381670265717275.png)
![Offline Indicator & Error Feedback](https://dthfytfu3txye.cloudfront.net/2022/05/29/165381676747634438.png)

Android screenshots can be found [here](https://www.dropbox.com/sh/1o4e7lc43mtedri/AAAp49ynbVeWH31nvTYHQPj2a?dl=0)
