import Link from 'next/link'
import Main from '../molecules/Main'
import NewsletterSignUp from '../molecules/NewsletterSignUp'
import PrimaryNav from '../molecules/PrimaryNav'

export default ({
  url
}) => (
  <Main>
    <PrimaryNav activeURL={ url } />
    <header>
      <h1>Say hi to content’s new friend</h1>
      <h2>Lofi lets you plan and rapidly iterate your design, messaging, and implementation</h2>
    </header>
    <section>
      <ul>
        <li>Rapidly communicate and prototype user interfaces and messaging</li>
        <li>Define content models and translate them into various schema formats</li>
        <li>Content manage websites with Trello</li>
        <li>Or DIY: Lofi is <Link href='/open-source'><a>completely open source</a></Link>.</li>
      </ul>
    </section>
    <section>
      <h2>Inspired by posting on social media, Lofi’s syntax is easy to pick up</h2>
      <ul>
        <li>First, write your text</li>
        <li>Then add annotations with <strong>#hashtags</strong></li>
        <li>In depth information can be added with <strong>#key: value</strong></li>
        <li>Integrate and reuse with <strong>@mentions</strong></li>
        <li><Link href='/syntax'><a>Learn the social media-inspired syntax here</a></Link></li>
      </ul>
    </section>
    <section>
      <NewsletterSignUp />
    </section>
  </Main>
)
