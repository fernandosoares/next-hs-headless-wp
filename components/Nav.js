import NavbarToggler from './NavbarToggler'
import NavItems from './NavItems'

export default function Nav({ menu, brand }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          {brand}
        </a>
        <NavbarToggler />
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <NavItems items={menu} />
        </div>
      </div>
    </nav>
  )
}
