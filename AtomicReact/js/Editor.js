class Main {
  setTitle(title) {
    this.getSub('fileTitle').innerHTML = title;
  }
  // setTitle(atom, title) {
  //   Atomic.getSub(atom, 'fileTitle').innerHTML = title;
  // }
}
module.exports.main = Main;
