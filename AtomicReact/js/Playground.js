class Main {
  onRender(){
    this.request = this.getSub('request').Atomic.main;
    this.btnShare = this.getSub('btnShare');

    this.btnToggleSidebar = this.getSub('btnToggleSidebar');
    this.sidebar = this.getSub('sidebar');
    this.atomAdd = this.getSub('atomAdd');
    this.menu = this.getSub('menu');
    this.btnIndexFile = this.getSub('btnIndexFile');

    this.view = this.getSub('view');

    this.editor = this.getSub('editor');
    this.fileTitle = Atomic.getSub(this.editor, 'fileTitle');
    this.coder = Atomic.getSub(this.editor, 'coder');

    this.barSizable = this.getSub('barSizable');

    this.preview = this.getSub('preview');
    this.style = Atomic.getSub(this.preview, 'style');
    this.iframe = Atomic.getSub(this.preview, 'iframe');

    this.initialAtoms = Object.assign(Atomic.Atomos);
    this.atomsAdded = [];

    this.init();
    this.btnIndexFile.click();
  }
  init() {
    /* Setup request */
    this.request.setServerUrl(document.location.origin);

    /* Share */
    this.btnShare.onclick = ()=>{
      let objToSend = {
        index: this.sessionIndexFile.getValue(),
        atom: []
      };

      this.atomsAdded.forEach((atom)=>{
        objToSend.atom.push({
          key: atom.Atomic.main.atomKey,
          code: {
            html: atom.Atomic.main.sessionHtml.getValue(),
            js: atom.Atomic.main.sessionJs.getValue(),
            css: atom.Atomic.main.sessionCss.getValue()
          }
        });
      });
      this.request.json('/share', objToSend, (res)=>{
        if(res.sucess==1) {
          document.location = '/'+res.id;
        }
      });
    };

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
    this.sessionIndexFile = new ace.EditSession("<!DOCTYPE HTML>\n<!-- <<< Create your Atom clicking on left Add Button <<< -->\n<h2>We'r in <b>body</b> of index.html</h2>\n", "ace/mode/html");
    this.sessionIndexFile.getSelection().moveCursorFileEnd();
    this.sessionIndexFile.setUndoManager(new ace.UndoManager());
    this.sessionIndexFile.on('change', (function(delta) {
      this.renderPreview();
    }).bind(this));
    this.btnIndexFile.onclick = (function(){
      this.editor.Atomic.main.setTitle("index.html");
      this.aceEditor.setSession(this.sessionIndexFile);
      this.renderPreview();
    }).bind(this);

    /* atomAdd */
    Atomic.getSub(this.atomAdd, 'btnAdd').onclick = ()=>{
      let inputAtomKey = Atomic.getSub(this.atomAdd, 'atomKey');
      if(inputAtomKey.value.length<=0) {inputAtomKey.focus(); return alert("Atom's Key must have 1 character at minimum");}
      if(inputAtomKey.value.indexOf(" ")>=0) {inputAtomKey.focus(); return alert("Atom's Key can't have space");}
      this.menu.Atomic.main.add('Atom', [{key:'atomKey', value: inputAtomKey.value}], 'afterbegin');
      inputAtomKey.value = "";
      this.renderPreview();
    };

    /* Menu */
    this.menu.Atomic.main.atomAddedListener = (atomAdded)=>{
      this.atomsAdded.push(atomAdded);

      let Atom = atomAdded.Atomic.main;
      Atom.getSub('btnHtml').onclick = ()=>{
        this.editor.Atomic.main.setTitle(Atom.atomKey+".html");
        this.aceEditor.setSession(Atom.sessionHtml);
      }
      Atom.getSub('btnJs').onclick = ()=>{
        this.editor.Atomic.main.setTitle(Atom.atomKey+".js");
        this.aceEditor.setSession(Atom.sessionJs);
      }
      Atom.getSub('btnCss').onclick = ()=>{
        this.editor.Atomic.main.setTitle(Atom.atomKey+".css");
        this.aceEditor.setSession(Atom.sessionCss);
      }
      Atom.sessionHtml.on('change', this.renderPreview.bind(this));
      Atom.sessionJs.on('change', this.renderPreview.bind(this));
      Atom.sessionCss.on('change', this.renderPreview.bind(this));
      Atom.getSub('btnHtml').dispatchEvent(new Event('click'));
    };

    /* Atoms Shared */
    if(document.location.pathname!='/') {
      this.request.json('/', {id: document.location.pathname.replace('/', '')}, (res)=>{
        if(res.sucess==1) {
          this.sessionIndexFile.setValue(res.playground.index);
          res.playground.atom.forEach((atom)=>{
            var atomAdded = this.menu.Atomic.main.add('Atom', [{key:'atomKey', value: atom.key}], 'afterbegin');
            atomAdded.Atomic.main.sessionHtml.setValue(atom.code.html);
            atomAdded.Atomic.main.sessionJs.setValue(atom.code.js);
            atomAdded.Atomic.main.sessionCss.setValue(atom.code.css);
          });
          this.btnIndexFile.click();
        }
      });
    }

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

    try {
      this.style.innerHTML='';

      this.atomsAdded.forEach((atom)=>{
        let Atom = atom.Atomic.main;
        this.style.innerHTML  += Atom.sessionCss.getValue();

        let js = "var module = { exports: { main: null } };";
        js+=Atom.sessionJs.getValue();
        js+="module;";
        let module = null;
        module = eval(js);
        Atomic.addAtomo({key: Atom.atomKey, data:Atom.sessionHtml.getValue(), mainClass: module.exports.main});
        Atomic.getAtom(Atom.atomKey).main = new (Atomic.getAtom(Atom.atomKey)).mainClass();
      });

      this.iframe.innerHTML = this.sessionIndexFile.getValue();
      Atomic.renderElement(this.iframe);
    } catch(e) {return;}

    this.initialAtoms.forEach((atom)=>{
      Atomic.Atomos.push(Object.assign(atom));
    });
  }
}
module.exports.main = Main;
