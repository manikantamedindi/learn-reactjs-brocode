import { useState } from 'react';
import NavList from './components/NavList'; // Adjust the path based on your project structure
import Counter from './components/Counter';
const App = () => {
  const [activeTab, setActiveTab] = useState('Counter Application');

  const tabsData = [
    { name: 'Counter Application' },
    { name: 'Tab 2' },
    { name: 'Tab 3' },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="app-container flex h-screen">
      <div className="sidebar w-64 bg-gray-800 text-white transition-width duration-300">

        <NavList activeTab={activeTab} handleTabClick={handleTabClick} data={tabsData} />
      </div>

      <div className="content flex-1 bg-gray-100 p-5">
        <div className="tab-content">
          {activeTab === 'Counter Application' && (
            <div>
              <Counter />
            </div>
          )}
          {activeTab === 'Tab 2' && <div>Content for Tab 2</div>}
          {activeTab === 'Tab 3' && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>

  );
};

export default App;
