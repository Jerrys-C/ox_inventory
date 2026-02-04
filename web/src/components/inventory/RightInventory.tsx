import GridInventory from './GridInventory';
import { useAppSelector } from '../../store';
import { selectRightInventory } from '../../store/inventory';

const RightInventory: React.FC = () => {
  const rightInventory = useAppSelector(selectRightInventory);

  return <GridInventory inventory={rightInventory} />;
};

export default RightInventory;
