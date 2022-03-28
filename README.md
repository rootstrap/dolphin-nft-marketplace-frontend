# Dolphin NFTs

- [Dolphin NFTs](#dolphin-nfts)
  * [In a nutshell](#in-a-nutshell)
  * [Usage](#usage)
    + [Development](#development)
      - [Env File](#env-file)
      - [Environment variables](#environment-variables)
      - [Creature Chronicles](#creature-chronicles)
    + [Testing](#testing)
  * [Available Scripts](#available-scripts)
    + [`yarn start`](#-yarn-start-)
    + [`yarn test`](#-yarn-test-)
    + [`yarn build`](#-yarn-build-)
    + [`yarn eject`](#-yarn-eject-)
    + [`yarn cypress`](#-yarn-cypress-)
    + [`yarn proxy`](#-yarn-proxy-)
  * [More info](#more-info)
    + [Folders:](#folders-)

## In a nutshell

This app works as a handmade marketplace for NFTs sells by Dolphin in collaboration with FTX.
Currently, there are three collections been selling on the marketplace:
- Hall Of Fame Media Village.
- Heroletes.
- Creature Chronicles.
HoF and Heroletes works currently on dolphinnfts.com, but Creature Chronicles is accessed through creaturechronicles.com, although both are on this application.

Design can be found in: [FIGMA Page](https://www.figma.com/file/N3Nz27X4GqywgbrCcf2mnC/Dolphin-NFT-Marketplace?node-id=0%3A1).

## Usage

### Development

#### Env File
You are going to need a `.env` file like this one:

```bash
REACT_APP_API_URL=http://localhost:8000/api/v1
REACT_APP_FTX_API_URL=http://localhost:8010/proxy
REACT_APP_ZENDESK_API_URL=https://dolphinentertainment.zendesk.com/api/v2
REACT_APP_ZENDESK_URL=https://dolphinentertainment.zendesk.com/hc/en-us
REACT_APP_CREATURES_URL=https://creaturechronicles.io
REACT_APP_GOOGLE_KEY=6LdxzoocAAAAAKtmeJukgrkc20fRBkRqIVOlIqqX
REACT_APP_CC_PUBLIC_KEY=LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tClZlcnNpb246IEJDUEcgdjEuNTQKCm1RRU5CRjE1Rm5NQkNBQzhhTStXWEpjcUhSeW5KUWlSTm03eExoN1Q3cmxpZkYvVnpncW01eDdGWnYvNGhXNWoKQTRibktaOFpZT0swNzVlbFljRGpUL2M1bDdMT25YRllBell3eENkc21nbm1HLzMzcXJPV08rUmxBbVREODZSWQowYWFZVWNIRkxUc0ttK29GNkpJMVB4NGd5c0xndlNlSUFCSEJvTlErU2N4dXgzM2VTZUlBMGg3L3dURFgzOU15CnM2YURmbWgvVWpnb0hhRDM5SjhDWUJpNVMyRGVzbjVLK2tjM0NkOUU1SVhGcjVhNG9mWmpWcGJJL092MGxOclkKZXQydDAzVHdEdGJ2VUtYUkxxejg5d1BvdEtGdldlTHZrOXlUZ3Jmd3BsSSs5ZEJCeUFqNHVVQUswNlBUUFJtTgpVWWUxNGQ4eFVOeWJpN1k5bGpSbU80blBIOWh3bTJ4SVZuU0JBQkVCQUFHMEJrTnBjbU5zWllrQkhBUVFBUWtBCkJnVUNYWGtXY3dBS0NSREpQWEtSZEw4TmRDc29CLzlid3pabnEwT0pNKzEvbnREYmhDcnZOaGJoQUhvd3RNclgKMmhqRmVhTy82ZHp2RXJpL25wVml5SzVsVjdMa0lkQi8ybS9sTEx0Nm9KZWdpeXoreXZlZ0pwTGQ0UmRvUC9CSgp0bHBBNjVwbFQyQys4UENoNkJRSCtIMVVZOE92TTFXT0p2VzBjU09xNzdzS3p1RFo4dGQ0OUVnTkpGdzlmb0dnClhYa1I0VHppSzdGTTZXQnlnYmdCNjVrQzZCVHJGNjRtY21xWHFrTHMyUVY5SEtTWmpHOTNxMGJHaUo0RStLbjYKam91dFhlVGc1YWZVL3VwN0g1TWxXM25mU3MyWHRLbFZ5MDdOQ1JYeCtwZUFzUEhpdmFGc3VDK3JUbTIwYVhWTwp5WUhJcmdsKzFNSktaWVNzRVRYMm8xaGkrWXVVeWRJMThuZmMzMGVSYVhyRVF5VzFWZ0w3Cj1CbXVaCi0tLS0tRU5EIFBHUCBQVUJMSUMgS0VZIEJMT0NLLS0tLS0=
REACT_APP_CC_KEY_ID=key1
```

#### Environment variables
```REACT_APP_API_URL```: URL for dolphin backend (dolphin-backend project).
```REACT_APP_FTX_API_URL```: URL for FTX backend. Starting on local environment should pointing at the proxy (started with yarn proxy).
```REACT_APP_ZENDESK_API_URL```: Zendesk API for starting zendesk widget.
```REACT_APP_ZENDESK_URL```: Zendesk URL for dolphin FAQ.
```REACT_APP_CREATURES_URL```: Creature Chronicles domain. Creatures Chronicles has it's own domain as can be accessed when developing on local modifying useRedirection hook (See Projects>Creatures Chronicles).
```REACT_APP_GOOGLE_KEY```: Google Key obtain as a constant from FTX endpoint. As it is always the same key it's added as a varible. This is used for getting recaptcha verification.
```REACT_APP_CC_PUBLIC_KEY```: Public key used for encrypting data for requests to FTX. Mostly used on Credit Card and Deposit endpoints.
```REACT_APP_CC_KEY_ID```: Key ID for Dolphin. Used on Deposit endpoints.

#### Creature Chronicles
To start developing and running creature chronicles locally you should modify the useRedirect hook and set true as the initial state for ```isCreatureUser``` and comment the useEffect setState. It should look like this:

```typescript
  const [isCreaturesUser, setIsCreaturesUser] = useState(true);

  useEffect(() => {
    const path = window.location.origin;
    // setIsCreaturesUser(path === process.env.REACT_APP_CREATURES_URL);
  }, []);
```

### Testing

This project uses `cypress` for E2E testing.
You can run the tests with ```yarn cypress```.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn cypress`
Starts cypress testing tool for development and testing purposes.

### `yarn proxy`
Will proxy all the api calls to ftx.us/api. This is used to prevent CORS errors developing locally. It's recommended to have it running when developing.

## More info

### Folders:

- **`assets`**: Mostly images and vectors.
- **`components`**: UI components commonly used through all the application.
- **`constants`**: Constants used through all the app. In this folder, we discriminate between common constants and specific constants for each business unit. Over here, we also have routes and endpoints constants.
- **`context`**: General context accessible in all the app.
- **`helpers`**: Pure helpers functions. Something goes in, it's proccesed, something goes out.
- **`hooks`**: Custom hooks used through all the application.
- **`interfaces`**: All the interfaces used in the application. Some interfaces might be found on services, store or modals. Should be everything here.
- **`interfaces`**: All the interfaces used in the application. Some interfaces might be found on services, store or modals. Should be everything here.
- **`locales`**: i18n texts.
- **`pages`**: All the components used on the routes are here. In this folder are ensemble and presented. Every route has a counterpart as a component expelled from this folder.
- **`router`**: Main mecanism for controlling routes and lazy loading routes.
- **`services`**: Holds connectivity files with the APIs. This app has Redux Toolkit integrated and uses createApi and fetchBaseQuery for API call.
- **`services`**: Holds connectivity files with the APIs. This app has Redux Toolkit integrated and uses createApi and fetchBaseQuery for API call.
- **`store`**: Configuration files regarding store set with redux.
- **`styles`**: Base style files imported through all the app.
- **`themes`**: Themes for Material UI interfaces. Currently there are two themes: general one, used on dolphinnfts.com and CreaturesTheme used on creaturechronicles.com.
