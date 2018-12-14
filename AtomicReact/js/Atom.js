class Main {
  onRender(){
    this.atomKey = this.getSub('atomKey').getAttribute('data-atom-key');

    this.sessionHtml = new ace.EditSession("<div>\n\tThis is my new Atom\n</div>", "ace/mode/html");
    this.sessionHtml.setUndoManager(new ace.UndoManager());

    this.sessionJs = new ace.EditSession("class Main {\n\tonRender(){\n\t\tconsole.log(this.getElement());\n\t}\n}\nmodule.exports.main = Main;", "ace/mode/javascript");
    this.sessionJs.setUndoManager(new ace.UndoManager());

    this.sessionCss = new ace.EditSession("[data-atomic-key='"+this.atomKey+"'] {\n\tborder: 1px solid #FF0;\n}", "ace/mode/css")
    this.sessionCss.setUndoManager(new ace.UndoManager());
    // this.sessionCss.setUseWorker(false);
    this.sessionCss.$worker.call('setDisabledRules', ["unqualified-attributes"]);
  }
}
module.exports.main = Main;
