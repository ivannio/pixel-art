import utils from '../../helpers/utilities';
import './grid.scss';

const makeGrid = () => {
  let domString = '<table>';
  for (let r = 0; r < 25; r += 1) {
    domString += '<tr>';
    for (let c = 0; c < 25; c += 1) {
      domString += '<td></td>';
    }
    domString += '</tr>';
  }
  domString += '</table>';
  utils.printToDom(domString, 'grid');
};

export default { makeGrid };
