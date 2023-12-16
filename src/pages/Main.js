import React, { useEffect, useState } from 'react';
import {
  ConstructTree,
  NormalizeEmployeeData,
  TreeUpdater,
} from '../Main.utils';
import EmployeeChart from '../components/employeeChart/employeeChart';
import EmployeeList from '../components/employeeList/EmployeeList';
import Select from '../components/select';
import './main.css';

const Main = () => {
  const [users, setUsers] = useState();
  const [constructTree, setConstructedTree] = useState();
  const [selectedTeam, setSelectedTeam] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await fetch('/api/users')).json();
        const normalizedData = NormalizeEmployeeData(data, 'team');
        setUsers(normalizedData);
      } catch (error) {
        // Handle fetch or normalization errors here
        console.error('Error fetching or normalizing data:', error);
      }
    }

    fetchData();
  }, []);

  function updateConstructTree(data) {
    setConstructedTree(ConstructTree(data));
  }

  function selectTeam(teamName) {
    setSelectedTeam(teamName);
    updateConstructTree(users[teamName]);
  }

  function Updater(draggingData, DropData) {
    const team = TreeUpdater(draggingData, DropData, users?.[selectedTeam]);
    updateConstructTree(team);
    setUsers((prevState) => ({ ...prevState, [selectedTeam]: team }));
  }

  return (
    <div className='main-container'>
      <aside>
        <Select data={users} selectTeam={selectTeam} />
        <EmployeeList employeeListData={users} />
      </aside>
      <div>
        {selectedTeam ? (
          <EmployeeChart data={constructTree} Updater={Updater} />
        ) : null}
      </div>
    </div>
  );
};

export default Main;
