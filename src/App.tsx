import React, { useEffect, useState } from 'react';
import { PeopleTableHooks } from './components/PeopleTable';
import { Loader } from './components/Loader';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import './App.scss';

export const App: React.FC = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 2000);
  }, []);

  return (
    <div className="box">
      <h1 className="title">People table</h1>

      {isDataLoaded ? (
        <PeopleTableHooks />
      ) : (
        <Loader />
      )}

    </div>
  );
};
