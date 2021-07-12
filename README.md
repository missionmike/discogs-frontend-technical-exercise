# Discogs Frontend Technical Exercise

FE Technical Exercise provided by discogs.com

## [View Live Example](https://dtweb.design/temp/discogs-frontend-technical-exercise/)

## Original Instructions from Discogs Below, _(Applicant's Notes in Italic)_

---

The finished solution should:

- Be implemented in Typescript or plain JavaScript and React.

_Opted for React+TypeScript, using [Sass](https://sass-lang.com/), [@emotion/styled](https://emotion.sh/docs/introduction), [framer-motion](https://www.framer.com/motion/), and [jest](https://jestjs.io/)_

- Display cards with the following information: title, artist, year, catalog number _(Done)_

- Each card should act as a link to the Release on Discogs (eg. https://www.discogs.com/release/{id})

_Included link to 'RS Records' as well_

- Be responsive.

_(Done, but would improve layout on mobile)_

- Allow cards to be sorted by release title or release year.

_Added sort option for release artist as well._

- Follow the general wireframe layout as shared. Do feel free to make it look better if you can.

_I didn't veer too far from the wireframe. Adjusted how the text content is displayed to allow for more uniform formatting for various lengths of titles/artist names_

- Have unit/integration tests where you think they matter. 100% coverage is not required.

_I used jest to test some utiity functions. Did not add snapshot testing._

- The interface should have a loading state and handle potential API errors.

_Includes loading state. Does not validate data from API... more time allowing, I'd add try/catch blocks, and use some mechanism to report errors back to the server for monitoring._

- Implement good WAI-ARIA practices where applicable.

_Passes Lighthouse accessibility tests, but more attention could be given to manual testing_

**Contain notes about your decisions:**

Used a new (to me) bundler: Parcel.js - zero configuration allowed or some dev time savings. Not sure how well this stacks up compared to a more robust bundler like webpack. The built JS bundle seems quite large, perhaps a more fine-tuned webpack bundle config would reduce the final size.

React+TypeScript worked well for this exercise. It's possible to plug in React-powered components in various parts of any website without needing a full site overhaull. This could prove helpful w/ Discogs as functionality is improved and updated over time.

I used Sass for boilerplate styles, however component-specific styles were applied with styled components (although, Sass can also be used within these components). I prefer this CSS-in-JS method for components because the style lives right next to, or within the component. This typically results in a faster workflow because there's less time spent hunting for the style definitions. It also has frontend performance benefits because no extra/unnecessary CSS styles get loaded.

Framer Motion was used for some subtle animations.

I opted for Jest to test utility functions. Time allowing, I'd use Cypress.io for integration testing as well.
