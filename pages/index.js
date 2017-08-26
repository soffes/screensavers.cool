import Page from '../components/page'
import { mine, others } from '../screensavers.json';

const createItems = (items) => {
  return items.map(function (item) {
    return (
      <li key={item.name}><a href={item.url} rel="external nofollow">{item.name}</a> — {item.description}</li>
    )
  });
}

const Homepage = () => (
  <Page>
    <p>Here are some screensavers I made:</p>
    <ul>
      {createItems(mine)}
    </ul>

    <p>Here are some screensavers I didn't make that are great:</p>
    <ul>
      {createItems(others)}
    </ul>

    <p>Enjoy.</p>
  </Page>
)

export default Homepage;
