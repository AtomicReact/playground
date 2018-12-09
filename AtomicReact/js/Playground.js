class Main {
  onRender(atom){
    this.btnToggleSidebar = Atomic.getSub(atom, 'btnToggleSidebar');
    this.sidebar = Atomic.getSub(atom, 'sidebar');

    this.view = Atomic.getSub(atom, 'view');

    this.editor = Atomic.getSub(atom, 'editor');
    this.fileTitle = Atomic.getSub(this.editor, 'fileTitle');

    this.barSizable = Atomic.getSub(atom, 'barSizable');

    this.preview = Atomic.getSub(atom, 'preview');
    this.iframe = Atomic.getSub(this.preview, 'iframe');

    this.init();
  }
  init() {
    this.toggleSidebar();

    /* Initialize ACE EDITOR */
    this.aceEditor = ace.edit(Atomic.getSub(this.editor, 'coder'));
    this.aceEditor.setTheme("ace/theme/dracula");
    this.aceEditor.session.setMode("ace/mode/javascript");

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
        Atomic.getSub(this.editor, 'coder').style.height  = (e.clientY-this.barSizable.clientHeight-this.fileTitle.clientHeight)+'px';
        this.aceEditor.resize();
        this.updatePreviewHeight();
      }
    }).bind(this);
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
      // console.log(this.btnToggleSidebar.getAttribute('data-sidebar-openned'));
    }).bind(this);
  }
}
module.exports.main = Main;
