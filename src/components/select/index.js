import './select.css';

function Select({ data = {}, selectTeam }) {
  const getKeys = Object.keys(data);

  function optionList(name, value) {
    return (
      <option key={name} value={value}>
        {name}
      </option>
    );
  }

  return (
    <div>
      <select
        defaultValue='default'
        onChange={(e) => selectTeam(e.target.value)}
        className='select-style'
      >
        <option value={'default'}>default</option>
        {getKeys.map((getKey) => (
          <optgroup label={getKey} key={getKey}>
            {data[getKey].map(({ name }) => optionList(name, getKey))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default Select;
