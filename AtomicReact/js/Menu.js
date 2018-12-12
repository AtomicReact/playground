class Main {
  onRender(){
    // Atomic.Atomos.forEach((Atomo)=>{
    //   this.add('Atom', [{key:'atomKey', value: Atomo.key}]);
    // });
  }
  onAdded(atomAdded){
    this.atomAddedListener(atomAdded);
  }
  atomAddedListener(){
    console.log("atomAddedListener not defined");
  }
}

module.exports.main = Main;
