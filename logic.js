// logic.js

const data = [];

function addItem(item) {
  data.push(item);
}

function getList() {
  return data;
}

module.exports = {
  addItem,
  getList
};
