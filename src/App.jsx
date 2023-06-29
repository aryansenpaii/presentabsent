import styles from './style';

import {LoginCarousel, Login, Navbar} from './components';

const App = () => (
  <div className='bg-[#cfbdef] px-10 py-10 w-full h-screen'>

    <div className='bg-[#9485db] h-full w-full overflow-hidden rounded-xl'>
      <div className={`bg-[#9989e0] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#9989e0] ${styles.paddingX} ${styles.flexStart} flex h-full`}>
        <div className={`${styles.boxWidth} flex flex-row w-full h-full`}>
          <Login />
          <LoginCarousel />
        </div>
      </div>
    </div>
  </div>
);

export default App