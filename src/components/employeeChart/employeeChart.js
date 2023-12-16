import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { createUniqueKey } from '../../Main.utils';
import DraggableItem from './DragDrop';
import './style.css';

const Card = (props) => {
  return (
    <ul key={createUniqueKey()}>
      {props?.data?.map((item) => {
        const [, children] = Object.keys(item);
        return (
          <li className='card' key={createUniqueKey()}>
            <DraggableItem data={item} Updater={props.Updater} />
            {item?.[children]?.length > 0 && (
              <Card data={item[children]} Updater={props.Updater} />
            )}
          </li>
        );
      })}
    </ul>
  );
};
const EmployeeChart = ({ data, Updater }) => {
  return (
    <div className='org-tree'>
      <DndProvider backend={HTML5Backend}>
        <Card data={data} Updater={Updater} />
      </DndProvider>
    </div>
  );
};
export default EmployeeChart;
