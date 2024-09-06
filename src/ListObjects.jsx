import PropTypes from 'prop-types';

function ListObjects(props) {
  const { data } = props;

  return (
    <>
      <h3 className='text-xl'>{props.category} List</h3>
      <ul className='flex flex-wrap'>
        {data.map((item, index) => (
          <li key={index} className='m-2'>
            <div className="card w-[100px] h-[100px] text-center p-5 text-white" style={{ backgroundColor: item.color }}>
              <h1 className='text-xl'>{item.name}</h1>
              <p className='block'>{item.weight}</p>
            </div>
          </li>
        ))}
      </ul>
    </>

  );
}

ListObjects.propTypes = {
  category: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired
    })
  )
};

export default ListObjects;
