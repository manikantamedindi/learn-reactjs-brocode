const NavList = ({ activeTab, handleTabClick, data }) => {
  return (
    <div className="bg-gray-900 h-full flex flex-col justify-start p-4">
      <div className="tabs flex flex-col gap-4">
        {data.map((item, index) => (
          <div key={index} className="tab-item">
            <button
              className={`tab w-full text-left p-3 rounded-lg transition-all duration-300 ${activeTab === item.name
                ? 'bg-blue-600 text-white font-semibold shadow-md'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              onClick={() => handleTabClick(item.name)}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavList;
