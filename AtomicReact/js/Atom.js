class Main {
  onRender(){
    this.atomKey = this.getSub('atomKey').getAttribute('data-atom-key');
    this.sessionHtml = new ace.EditSession("<div>\n<!-- This is my new Atom -->\n</div>", "ace/mode/html");
    this.sessionHtml.setUndoManager(new ace.UndoManager());
  }
}
module.exports.main = Main;
