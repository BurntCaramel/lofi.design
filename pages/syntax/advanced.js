import Link from 'next/link'
import Main from '../../molecules/Main'
import NewsletterSignUp from '../../molecules/NewsletterSignUp'
import PrimaryNav from '../../molecules/PrimaryNav'

const Code = ({ children }) => (
  <pre><code>{ children }</code></pre>
)

export default ({
  url
}) => (
  <Main title='Parsing Lofi syntax with regular expressions'>
    <PrimaryNav activeURL={ url } />
    <header>
      <h1>Lofi syntax: Parsing</h1>
    </header>
    <section>
      <h2>Regular expressions</h2>

      <h3>Tags</h3>
      <Code>\B#[A-Za-z0-9_-]+(:\s*[^#]*)?</Code>

      <h3>Tags values</h3>
      <Code>\B#([a-zA-Z0-9-_]+)(:\s*([^#]*))?</Code>

      <h3>Mentions</h3>
      <Code>\B@([a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9-_]+)*)</Code>
    </section>
    <PrimaryNav activeURL={ url } />
  </Main>
)