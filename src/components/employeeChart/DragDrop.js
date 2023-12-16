import { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import EmployeeCard from '../employeeList/employeeCard';

export const ItemTypes = {
  TEAM: 'team',
};

const DraggableItem = ({ id, data, index, moveItem, Updater }) => {
  const [cannotUpdate, setCannotUpdate] = useState();
  const [{ isDragging }, drag] = useDrag({
    item: { ...data },
    type: ItemTypes.TEAM,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TEAM,
    hover(item) {
      if (!dragRef.current) {
        return;
      }
      setCannotUpdate(item);

      if (item.index !== index) {
        moveItem(item.index, index);
        item.index = index;
      }
    },
    drop(item) {
      Updater(item, data);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const dragRef = useRef(null);
  drag(drop(dragRef));

  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
      }}
      className={`default-employeechart ${
        isOver && cannotUpdate?.data?.level !== data?.data?.level
          ? 'employeechart'
          : ''
      }  `}
    >
      <EmployeeCard employList={data.data} />
    </div>
  );
};

export default DraggableItem;
