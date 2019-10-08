import $ from 'jquery';

const printToDom = (toPrint, divID) => {
  $(`#${divID}`).html(toPrint);
};

export default { printToDom };
