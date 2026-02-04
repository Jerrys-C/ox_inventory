import GridInventory from './GridInventory';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';

const LeftInventory: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);

  return <GridInventory inventory={leftInventory} />;
};

export default LeftInventory;
