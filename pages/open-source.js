import Link from 'next/link'
import Main from '../molecules/Main'
import PrimaryNav from '../molecules/PrimaryNav'

const Code = ({ children }) => <pre><code>{ children }</code></pre>

export default ({
  url
}) => (
  <Main>
    <PrimaryNav activeURL={ url } />
    <header>
      <h1>Open Source</h1>
    </header>
    <section>
      <dl>
        <dt>JavaScript / Node.js</dt>
        <dd><Link href='https://github.com/RoyalIcing/lofi-js'><a>lofi-js</a></Link></dd>
      </dl>
      <dl>
        <dt>Elm</dt>
        <dd><Link href='https://github.com/RoyalIcing/lofi-elm'><a>lofi-elm</a></Link></dd>
        <dd><Link href='https://github.com/RoyalIcing/lofi-schema-elm'><a>lofi-schema-elm</a></Link></dd>
      </dl>
    </section>
  </Main>
)