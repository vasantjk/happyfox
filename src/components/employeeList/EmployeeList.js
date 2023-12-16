import { Fragment, useMemo, useState } from 'react';
import { Search } from '../search/Search';

import { createUniqueKey } from '../../Main.utils';
import EmployeeCard from './employeeCard';
import './employeelist.css';

function EmployeeList({ employeeListData = {} }) {
  const [search, setSearch] = useState('');
  const NormalizedEmployeeList = Object.values(employeeListData).reduce(
    (acc, curr) => (acc = [...acc, ...curr]),
    []
  );

  let EmployeeListToShow = useMemo(() => {
    if (!search) {
      return NormalizedEmployeeList;
    }

    return NormalizedEmployeeList.filter(({ name, designation, team, id }) =>
      [
        name.toLowerCase(),
        designation.toLowerCase(),
        team.toLowerCase(),
        id.toString(),
      ].some((value) => value.includes(search.toLowerCase()))
    );
  }, [search, NormalizedEmployeeList]);
  return (
    <>
      <Search
        setSearch={setSearch}
        search={search}
        placeholder='search employee'
      />
      <div style={{ height: '80vh', overflow: 'auto' }}>
        {EmployeeListToShow.map((employList) => (
          <Fragment key={createUniqueKey()}>
            <EmployeeCard employList={employList} />
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default EmployeeList;
