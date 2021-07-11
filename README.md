# Discogs Frontend Technical Exercise

FE Technical Exercise provided by discogs.com

## [View Live Example](https://dtweb.design/temp/discogs-frontend-technical-exercise/)

## Original Instructions from Discogs Below, _(Applicant's Notes in Italic)_

---

The finished solution should:

- Be implemented in Typescript or plain JavaScript and React.

  - _Opted for React+TypeScript, using [Sass](https://sass-lang.com/), [@emotion/styled](https://emotion.sh/docs/introduction), [framer-motion](https://www.framer.com/motion/), and [jest](https://jestjs.io/)_

- Display cards with the following information: title, artist, year, catalog number _(Done)_

- Each card should act as a link to the Release on Discogs (eg. https://www.discogs.com/release/{id})

  - _Included link to 'RS Records' as well_

- Be responsive. _(Done)_

- Allow cards to be sorted by release title or release year.

  - _Added sort option for release artist as well._

- Follow the general wireframe layout as shared. Do feel free to make it look better if you can.

  - _I didn't veer too far from the wireframe. Adjusted how the text content is displayed to allow for more uniform formatting for various lengths of titles/artist names_

- Have unit/integration tests where you think they matter. 100% coverage is not required.

  - _(Used jest to test some utiity functions. Did not add snapshot testing)_

- The interface should have a loading state and handle potential API errors.

  - \_Includes loading state
  - Does not validate data from API... time allowing, I'd add try/catch blocks, verify all data is clean, and use some mechanism to report errors back to the server or via Sentry.io\_

- Implement good WAI-ARIA practices where applicable.
  - _Passes Lighthouse accessibility tests, but more attention could be given to manual testing)_

Contain notes about your decisions:
