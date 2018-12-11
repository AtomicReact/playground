class Main {
  onRender(){
    // console.log(Atomic.Global.atomosRendered.list);
    this.indexFile = this.getSub('indexFile');

    this.btnToggleSidebar = this.getSub('btnToggleSidebar');
    this.sidebar = this.getSub('sidebar');
    this.menu = this.getSub('menu');
    this.btnIndexFile = Atomic.getSub(this.menu, 'btnIndexFile');

    this.view = this.getSub('view');

    this.editor = this.getSub('editor');
    this.fileTitle = Atomic.getSub(this.editor, 'fileTitle');
    this.coder = Atomic.getSub(this.editor, 'coder');

    this.barSizable = this.getSub('barSizable');

    this.preview = this.getSub('preview');
    this.iframe = Atomic.getSub(this.preview, 'iframe');
    console.log(this.iframe);

    this.init();
  }
  init() {
    this.toggleSidebar();

    /* Initialize ACE EDITOR */
    this.aceEditor = ace.edit(this.coder);
    this.aceEditor.setTheme("ace/theme/dracula");
    console.log(this.aceEditor);

    this.updatePreviewHeight();

    /* barSizable */
    var firstDrag = true;
    this.barSizable.ondrag = (function(e){
      /*FIX BUG: wrong first drag*/
      if(firstDrag) {
        firstDrag = false;
        return;
      }
      if(e.clientY<=0) {
        firstDrag = true;
        return;
      }
      if(e.clientY>= window.innerHeight*0.2 && e.clientY<= window.innerHeight*0.8) {
        this.editor.style.height = (e.clientY-this.barSizable.clientHeight)+'px';
        this.coder.style.height  = (e.clientY-this.barSizable.clientHeight-this.fileTitle.clientHeight)+'px';
        this.aceEditor.resize();
        this.updatePreviewHeight();
      }
    }).bind(this);

    /* Index File */
    var sessionIndexFile = new ace.EditSession(this.indexFile.innerHTML, "ace/mode/html");
    sessionIndexFile.on('change', (function(delta) {
      this.indexFile.innerHTML = this.aceEditor.getValue();
      this.renderPreview();
    }).bind(this));
    this.btnIndexFile.onclick = (function(){
      this.editor.Atomic.main.setTitle("index.html");
      // Atomic.getAtom('Editor').main.setTitle(this.editor, ">>> index.html");
      this.aceEditor.setSession(sessionIndexFile);
      this.renderPreview();
    }).bind(this);

    this.btnIndexFile.click();
  }
  updatePreviewHeight(){
    this.preview.style.height = (window.innerHeight-this.barSizable.offsetTop-50)+'px';
    this.iframe.style.height = (window.innerHeight-this.barSizable.offsetTop-50)+'px';
  }
  toggleSidebar(){
    this.btnToggleSidebar.onclick = (function(){
      if(this.btnToggleSidebar.getAttribute('data-sidebar-openned')=='true') {
        this.sidebar.style.width = '0px';
        this.view.style.marginLeft = '0px';
        this.btnToggleSidebar.innerHTML = ">";
        this.btnToggleSidebar.style.left = '5px';
        this.btnToggleSidebar.setAttribute('data-sidebar-openned', false);
      } else {
        this.sidebar.style.width = '170px';
        this.view.style.marginLeft = '170px';
        this.btnToggleSidebar.innerHTML = "<";
        this.btnToggleSidebar.style.left = '175px';
        this.btnToggleSidebar.setAttribute('data-sidebar-openned', true);
      }
    }).bind(this);
  }
  renderPreview(){
    this.iframe.innerHTML = this.indexFile.innerHTML;
    Atomic.renderElement(this.iframe);
  }
}
module.exports.main = Main;
