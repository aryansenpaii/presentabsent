import styles from './style';

import {Details, Login, Navbar} from './components';

const App = () => (
  <div className='px-10 py-10'>

    <div className='bg-[#9485db] h-full w-full overflow-hidden rounded-xl'>
      <div className={`bg-[#9989e0] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#9989e0] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Login />
          <Details />
        </div>
      </div>
    </div>
  </div>
);

export default App