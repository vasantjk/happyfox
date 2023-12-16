import { BsPersonVcardFill } from 'react-icons/bs';
import { createUniqueKey } from '../../Main.utils';

function EmployeeCard({ employList }) {
  return (
    <section key={createUniqueKey()} className='employeelist-container'>
      <div>
        <BsPersonVcardFill size={'20px'} />
      </div>
      <div>
        <h3>{employList.name}</h3>
        <p>
          <b>designation:</b> {employList.designation}
        </p>
        <p>
          <b>team:</b> {employList.team}
        </p>
        <p>
          <b>EmpId:</b> {employList.id}
        </p>
      </div>
    </section>
  );
}

export default EmployeeCard;
