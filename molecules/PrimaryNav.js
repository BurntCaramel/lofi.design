import Link from 'next/link'

const NavLink = ({ href, activePath, children }) => (
  <Link
    href={ href }>
    <a
      className={ href === activePath ? 'active' : null }
      children={ children }
    />
  </Link>
)

export default ({
  activeURL: { pathname: activePath }
}) => (
  <nav className='primary'>
    <div>
      <NavLink href='/' activePath={ activePath }>#Lofi</NavLink>
      {' · '}
      <NavLink href='/syntax' activePath={ activePath }>Syntax</NavLink>
      {' · '}
      <NavLink href='/open-source' activePath={ activePath }>Open Source</NavLink>
      {' · '}
      <NavLink href='https://schema.lofi.design'>#Schema</NavLink>
      {' · '}
      <NavLink href='https://lokum.icing.space'>#Lokum</NavLink>
    </div>
  </nav>
)