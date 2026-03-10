![Dummy logo](/docs/assets/dummy-logo.png)

_The idea: a free, open source engine for grassroots news publishing that powers independent, community-focused journalism on shoestring budgets. [Dummying](https://www.ndsu.edu/pubweb/~rcollins/313editing/onlineclass/lecturefifteen.htm#:~:text=The%20process%20editors%20use%20to,the%20stories%20on%20the%20pages.) ain't dead, it's just digital._

---

## Aspirations

- **Free**. Done right Dummy would ensure the only technical cost for small publishers would be renewing their domain name
- **Open source**. Code that publishers can use and alter as they see fit 
- **Decentralised**. Flexible enough to interact with all manner of third party platforms without being overly reliant on any of them
- **Bypasses tech giants**. Web monopolies have made a lot of things awful. Dummy would shift relationships from them to readers and the communities they belong to
- **Facilitate multiple income streams**. From patron schemes to advertising, make it simpler for build sustainable incomes

## Pieces

The first pass at this concept has the different Dummy segments largely entwined in one template, though with one eye on the possibility of their being separated into distinct parts that can be used on their own.

![Digram sketching out the 'Dummy' tech estat](/docs/assets/estate-sketch.png)

Getting this to work as one thing is a big enough job, but there's plenty of potential for pieces to break off and become useful in their own right. 

A few such opportunities that come to mind...

### News component library

A selection of components made specifically for news/editorial websites. The types of things it might include are:

- Content block
- Author details
- Article headers
- Masthead
- Navigation
- Ads
- Related/suggested content
- Homepage/front layouts
- Support prompts

The groundwork for this will grown organically in the initial template and if it feels worth it a time might come when they can be extracted to their own package.

### Community ads platform

Allow news websites to sell ad space directly to local businesses, bypassing established channels that lead to meagre payouts for publications and dreadful UI experiences for readers.

### Content Management System (CMS)

An intuitive, easy interface for managing content, authors, sections, media, publication details, etc. Leaning into headless solutions for the time being as this would be a rabbit hole but worth highlighting.

### Shared types

For all of these pieces to work together they need to be playing to the same tune. Should parts break off and be released as standalone packages then it would make sense make the common types and utils available too.

---

This is all very much a work in progress.
