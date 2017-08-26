import Page from '../components/page'
import { mine, others } from '../screensavers.json';

export default class Homepage extends React.Component {
  render () {
    return (
      <Page>
        <p>Here are some screensavers I made:</p>
        <ul>
          {this.createItems(mine)}
        </ul>

        <p>Here are some screensavers I didn't make that are great:</p>
        <ul>
          {this.createItems(others)}
        </ul>

        <p>Enjoy.</p>
      </Page>
    )
  }

  createItems (items) {
    return items.map(function (item) {
      return (
        <li><a href={item.url} rel="external nofollow">{item.name}</a> — {item.description}</li>
      )
    })
  }
}
