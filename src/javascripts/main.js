import '../styles/main.scss';
import 'bootstrap';
import grid from './components/grid/grid';
import paintbrush from './components/paintbrush/paintbrush';

const init = () => {
  grid.makeGrid();
  paintbrush.printColorPicker();
};

init();
