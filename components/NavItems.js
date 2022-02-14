import Link from 'next/link'

const NavItems = ({ items }) => {

  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      {items.map((item) => {
        return (
          <li key={item.node.databaseId} className='nav-item'>
            <Link key={item.node.databaseId} href={item.node.path}>
              <a className='nav-link' aria-current='page'>
                {item.node.label}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
