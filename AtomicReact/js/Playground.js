class Main {
  onRender(){
    this.btnToggleSidebar = this.getSub('btnToggleSidebar');
    this.sidebar = this.getSub('sidebar');
    this.atomAdd = this.getSub('atomAdd');
    this.menu = this.getSub('menu');
    this.btnIndexFile = Atomic.getSub(this.menu, 'btnIndexFile');

    this.view = this.getSub('view');

    this.editor = this.getSub('editor');
    this.fileTitle = Atomic.getSub(this.editor, 'fileTitle');
    this.coder = Atomic.getSub(this.editor, 'coder');

    this.barSizable = this.getSub('barSizable');

    this.preview = this.getSub('preview');
    this.iframe = Atomic.getSub(this.preview, 'iframe');

    this.initialAtoms = Object.assign(Atomic.Atomos);
    this.atomsAdded = [];

    this.init();
  }
  init() {
    this.toggleSidebar();

    /* Initialize ACE EDITOR */
    this.aceEditor = ace.edit(this.coder);
    this.aceEditor.setTheme("ace/theme/dracula");

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
    this.sessionIndexFile = new ace.EditSession("<h2>We'r in <b>body</b> of index.html</h2>\n<!-- <<< Create your Atom clicking on left Add Button <<< -->", "ace/mode/html");
    this.sessionIndexFile.setUndoManager(new ace.UndoManager());
    this.sessionIndexFile.on('change', (function(delta) {
      this.renderPreview();
    }).bind(this));
    this.btnIndexFile.onclick = (function(){
      this.editor.Atomic.main.setTitle("index.html");
      this.aceEditor.setSession(this.sessionIndexFile);
      this.renderPreview();
    }).bind(this);

    this.btnIndexFile.click();

    /* Menu */
    this.menu.Atomic.main.atomAddedListener = (atomAdded)=>{
      this.atomsAdded.push(atomAdded);

      let Atom = atomAdded.Atomic.main;
      Atom.getSub('btnHtml').onclick = ()=>{
        this.editor.Atomic.main.setTitle(Atom.atomKey+".html");
        this.aceEditor.setSession(Atom.sessionHtml);
      }
      Atom.sessionHtml.on('change', (function(delta) {
        this.renderPreview();
      }).bind(this));
    };

    /* atomAdd */
    Atomic.getSub(this.atomAdd, 'btnAdd').onclick = ()=>{
      let inputAtomKey = Atomic.getSub(this.atomAdd, 'atomKey');
      if(inputAtomKey.value.length<=0) { return alert("Atom's Key must be 1 character at minimum");}
      if(inputAtomKey.value.indexOf(" ")>=0) { return alert("Atom's Key can't has space");}
      this.menu.Atomic.main.add('Atom', [{key:'atomKey', value: inputAtomKey.value}]);
      inputAtomKey.value = "";
    };
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
    Atomic.Atomos = [];

    this.atomsAdded.forEach((atom)=>{
      let Atom = atom.Atomic.main;
      Atomic.addAtomo({key: Atom.atomKey, data:Atom.sessionHtml.getValue()});
    });

    this.iframe.innerHTML = this.sessionIndexFile.getValue();
    Atomic.renderElement(this.iframe);

    Atomic.Atomos = Object.assign(this.initialAtoms);
  }
}
module.exports.main = Main;
