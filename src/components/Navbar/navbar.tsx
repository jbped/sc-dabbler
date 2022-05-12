import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex bg-slate-700 py-4 px-2'>
      <Link to='/' className='text-2xl'>
        Dabbler
      </Link>
      <div className='flex flex-grow justify-around items-center'>
        <Link to='/mining'>Mining</Link>
        <Link to='/ships'>Ships</Link>
        <Link to='/wreck-sites'>Wreck Sites</Link>
      </div>
    </nav>
  );
}
