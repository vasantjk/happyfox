export const NormalizeEmployeeData = (data, key = 'team') => {
  const responseArray = data.reduce((acc, curr) => {
    const employeeKey = curr[key];
    if (acc[employeeKey]) {
      acc[employeeKey].push(curr);
    } else {
      acc[employeeKey] = [curr];
    }
    return acc;
  }, {});
  return responseArray;
};

export const ConstructTree = (datas = []) => {
  const treeArr = [];

  // Before creating the tree structure
  // have to sort the data based on the level in ascending order;
  datas = datas?.sort((a, b) => a.level - b.level);

  if (datas.length > 0) {
    datas.forEach((data) => {
      if (data.level === 1) {
        treeArr.push({
          data,
          [`children_${data.level + 1}`]: [],
        });
      } else {
        DeepFind(treeArr, `children_${data.level}`, {
          data,
          [`children_${data.level + 1}`]: [],
        });
      }
    });
  }
  return treeArr;
};

export const DeepFind = (datas = [], key, append) => {
  datas?.forEach((data) => {
    const [, children] = Object.keys(data);

    if (data[key] && data.data.name === append.data.reporter) {
      data[children].push({
        data: append.data,
        [`children_${append.data.level + 1}`]: [],
      });
    } else {
      DeepFind(data[children], key, append);
    }
  });
};

export const TreeUpdater = (draggingData, DropData, team) => {
  let foundIndex1 = null;
  let foundIndex2 = null;

  for (let index in team) {
    const currentTeamMember = team[index];

    if (currentTeamMember.id === draggingData.data.id) {
      foundIndex1 = index;
    }

    if (currentTeamMember.id === DropData.data.id) {
      foundIndex2 = index;
    }

    const isReporter1 = currentTeamMember.reporter === draggingData.data.name;
    const isReporter2 = currentTeamMember.reporter === DropData.data.name;

    if (currentTeamMember.id !== draggingData.data.id && isReporter2) {
      currentTeamMember.reporter = draggingData.data.name;
    } else if (currentTeamMember.id !== DropData.data.id && isReporter1) {
      currentTeamMember.reporter = DropData.data.name;
    }
  }

  const temp = {
    level: draggingData.data.level,
    reporter: draggingData.data.reporter,
    name: draggingData.data.name,
  };

  if (foundIndex1 !== null) {
    team[foundIndex1] = {
      ...team[foundIndex1],
      level: DropData.data.level,
      reporter:
        draggingData.data.name === DropData.data.reporter
          ? DropData.data.name
          : DropData.data.reporter,
    };
  }

  if (foundIndex2 !== null) {
    team[foundIndex2] = {
      ...team[foundIndex2],
      level: draggingData.data.level,
      reporter:
        draggingData.data.reporter === DropData.data.name
          ? temp.name
          : temp.reporter,
    };
  }
  return team;
};

export const createUniqueKey = () => {
  const alphanumeric =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';

  for (let i = 0; i < 8; i++) {
    key += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
  }

  return `unique_${key}`;
};
