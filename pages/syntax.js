import Link from 'next/link'
import Main from '../molecules/Main'
import NewsletterSignUp from '../molecules/NewsletterSignUp'
import PrimaryNav from '../molecules/PrimaryNav'

const Code = ({ children }) => <pre><code>{ children }</code></pre>

export default ({
  url
}) => (
  <Main>
    <PrimaryNav activeURL={ url } />
    <header>
      <h1>Writing Lofi: The Syntax</h1>
    </header>
    <section>
      <h2>Write text</h2>
      <Code>Some simple text, easy!</Code>
      <p>Lofi makes text its first priority.</p>
        
      <p>Unlike HTML, don’t worry about special characters like <code children='&' /> or <code children='<' /> getting in the way. Just write!</p>
    </section>
    <section>
      <h2>Add hashtags</h2>
      <p>When you want your text to become something more, add #hashtags.</p>

      <p>It could become a <code>#field</code>, an <code>#image</code>, or a <code>#button</code>. Just add the hashtag after your text.</p>

      <Code children={
`Click me! #button
First name #field
A dreamy picture of the sea #image`
      } />
    </section>
    <section>
      <h2>Smarter hashtags</h2>
      <p>Sometimes you want to give a little more information. For that, you follow the hashtag with a colon and some text.</p>

      <p>For instance, an <code>#image</code> could have <code>#url: https://placehold.it/200x200</code></p>

      <p>Or, an <code>#alert</code> could have a <code>#variation: success</code></p>

      <p>Or, a <code>#table</code> could have a <code>#title: Annual growth</code></p>

      <Code children={
`#image #url: https://placehold.it/200x200
#alert #variation: success
#table #title: Annual growth`
      } />
    </section>
    <section>
      <h2>Lists and nested content</h2>
      <p>Often content is two dimensional. That’s where lists come in.</p>

      <p>You could have a shopping list:</p>
      <Code children={
`#shopping-list
- Milk
- Bread
- Bananas
- Chocolate`
      } />

      <p>Or a navigation:</p>
      <Code children={
`#nav
- Home #link: /
- About #link: /about
- Plans #link: /plans
- Blog #link: /blog`
      } />
    </section>
    <section>
      <h2>Reuse pieces</h2>
      <p>Reusing content is key to keeping things manageable. Repetition can lead to inconsistencies and more manual work.</p>

      <p>Mentions let you separate the content from the element:</p>
      <Code children={
`@title: Click me

@title #button`
      } />

      <p>Or make a piece content, such as a list, and use that multiple times:</p>
      <Code children={
`@headers:
- First name
- Last name
- Age
- Favorite color

#table #title: My family #headers: @headers

#table #title: My partner’s family #headers: @headers`
      } />

      <p>The content could even come from an external source.</p>
    </section>
    <PrimaryNav activeURL={ url } />
  </Main>
)