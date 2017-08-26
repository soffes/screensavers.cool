import Page from '../components/page'
import 'isomorphic-fetch'

export default class Homepage extends React.Component {
  static async getInitialProps () {
    const res = await fetch('http://localhost:3000/static/screensavers.json')
    return await res.json()
  }

  render () {
    return (
      <Page>
        <p>Here are some screensavers I made:</p>
        <ul>
          {this.createItems(this.props.mine)}
        </ul>

        <p>Here are some screensavers I didn't make that are great:</p>
        <ul>
          {this.createItems(this.props.others)}
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
