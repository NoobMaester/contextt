import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1>Context API Baby</h1>
      <ul className='nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
    </div>
  )
}

export default Header