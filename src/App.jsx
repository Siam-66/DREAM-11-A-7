import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Newsletter from './components/Newsletter';
import Players from './components/Players';


function App() {

  const [coins, setCoins] = useState(0);

  const clickToClaimCredit = () => {
    const newCoins = coins + 6000000;
    setCoins(newCoins);
  };

return (
<div className="relative px-6 lg:px-0">
<Header coins={coins} clickToClaimCredit={clickToClaimCredit}></Header>
<Hero clickToClaimCredit={clickToClaimCredit}></Hero>

<div className="pb-36">
  <Players coins={coins} setCoins={setCoins}></Players>
</div>

<Newsletter></Newsletter>
<Footer></Footer>
<Toaster position="top-center" />
</div>
  )
}

export default App
