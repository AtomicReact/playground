const Atomic = JSON.parse(decodeURI('%7B%22Global%22:%7B%22name%22:%22playground%22,%22version%22:%221.1.14%22,%22isOnClientSide%22:true,%22atomosRendered%22:%7B%22count%22:0,%22id%22:%5B%5D%7D%7D,%22Atomos%22:%5B%5D,%22ClientVariables%22:%7B%22Atomic%22:%22Atomic%22,%22Props%22:%22props%22,%22Id%22:%22data-atomic-id%22,%22Key%22:%22data-atomic-key%22,%22Nucleus%22:%22data-atomic-nucleus%22,%22Sub%22:%22data-atomic-sub%22%7D,%22AtomicVariables%22:%7B%22Nucleus%22:%22atomic.nucleus%22,%22Sub%22:%22atomic.sub%22%7D,%22HotReload%22:%7B%22port%22:1337,%22addrs%22:%22localhost%22%7D%7D'));eval(decodeURI('Atomic.addAtomo=function(Atomo)%20%7B%0D%0A%20%20%20%20Atomo.data%20=%20Atomic.replaceExpressao(Atomic.AtomicVariables.Sub,%20Atomic.ClientVariables.Sub,%20Atomo.data);%0D%0A%20%20%20%20Atomo.data%20=%20Atomic.replaceExpressao(Atomic.AtomicVariables.Nucleus,%20Atomic.ClientVariables.Nucleus,%20Atomo.data,%20true);%0D%0A%0D%0A%20%20%20%20Atomic.Atomos.push(Atomo);%0D%0A%20%20%7D'));eval(decodeURI('Atomic.printAtoms=function()%20%7B%0D%0A%20%20%20%20if(Atomic.Global.isOnClientSide)%20%7B%20console.log(%27Atoms%20Loaded:%27);%20%7D%0D%0A%20%20%20%20else%20%7B%20console.log(consoleFlags.info,%20%27Atoms%20loaded:%27);%20%7D%0D%0A%20%20%20%20for(var%20i=0;%20i%3CAtomic.Atomos.length;%20i++)%20%7B%0D%0A%20%20%20%20%20%20if(Atomic.Global.isOnClientSide)%20%7B%20console.log(%27%20%20%20%5B%27+(i+1)+%27%5D%20%27+Atomic.Atomos%5Bi%5D.key);%20%7D%0D%0A%20%20%20%20%20%20else%20%7B%20console.log(consoleFlags.info,%20%27%20%20%20%5B%27+(i+1)+%27%5D%20%27+Atomic.Atomos%5Bi%5D.key);%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D'));eval(decodeURI('Atomic.isRunning=function()%20%7B%0D%0A%20%20%20%20if(Atomic.Global.isOnClientSide)%20%7B%0D%0A%20%20%20%20%20%20console.log(%27AtomicReact%20is%20running%20on%20version:%20%27+Atomic.Global.version);%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20else%20%7B%0D%0A%20%20%20%20%20%20console.log(consoleFlags.info,%27AtomicReact%20is%20running%20on%20version:%20%27+Atomic.Global.version);%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D'));eval(decodeURI('Atomic.getGeoCursorTag=function(source,%20TagKey,%20caseSensitivy)%20%7B%0D%0A%20%20%20%20caseSensitivy%20=%20(caseSensitivy==null%20%7C%7C%20caseSensitivy==undefined)%20?%20true:caseSensitivy;%0D%0A%20%20%20%20if(Atomic.Global.isOnClientSide%20%7C%7C%20(!caseSensitivy))%20%7B%0D%0A%20%20%20%20%20%20source%20=%20source.toLowerCase();%0D%0A%20%20%20%20%20%20TagKey%20=%20TagKey.toLowerCase();%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20/*%0D%0A%20%20%20%20%20%20%7CstartOpenAtomo%7C%3CTag%3E%7CstartCloseAtomo%7C...nucleus...%7CendOpenAtomo%7C%3C/Tag%3E%7CendCloseAtomo%7C%0D%0A%20%20%20%20*/%0D%0A%20%20%20%20var%20geoCursor%20=%20%7B%0D%0A%20%20%20%20%20%20open:%20%7B%0D%0A%20%20%20%20%20%20%20%20start:%20-1,%0D%0A%20%20%20%20%20%20%20%20end:%20-1%0D%0A%20%20%20%20%20%20%7D,%0D%0A%20%20%20%20%20%20close:%20%7B%0D%0A%20%20%20%20%20%20%20%20start:%20-1,%0D%0A%20%20%20%20%20%20%20%20end:%20-1%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D;%0D%0A%20%20%20%20var%20regexOpenOuClose%20=%20new%20RegExp(%27%3C/?((%27+TagKey+%27)%7C(%27+TagKey+%27%5C%5Cs%5B%5E%3E%5D*))%3E%27,%20%22g%22);%0D%0A%20%20%20%20var%20regexOpen%20=%20new%20RegExp(%27%3C((%27+TagKey+%27)%7C(%27+TagKey+%27%5C%5Cs%5B%5E%3E%5D*))%3E%27,%20%22g%22);%0D%0A%20%20%20%20var%20match;%0D%0A%20%20%20%20var%20contadorTagsAbertas%20=%200;%0D%0A%20%20%20%20var%20encontrou%20=%20false;%0D%0A%20%20%20%20while((match%20=%20regexOpenOuClose.exec(source))%20&&%20encontrou==false%20)%7B%0D%0A%20%20%20%20%20%20if(match%5B0%5D.search(regexOpen)%3E-1)%20%7B%0D%0A%20%20%20%20%20%20%20%20//%20console.log(%27========Open=========%27);%0D%0A%20%20%20%20%20%20%20%20if(contadorTagsAbertas==0)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20//%20console.log(%27Este%20%C3%A9%20o%20primeiro%20open%27);%0D%0A%20%20%20%20%20%20%20%20%20%20geoCursor.open.start%20=%20regexOpenOuClose.lastIndex%20-%20match%5B0%5D.length;%0D%0A%20%20%20%20%20%20%20%20%20%20geoCursor.open.end%20=%20regexOpenOuClose.lastIndex;%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20contadorTagsAbertas+=1;%0D%0A%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20//%20console.log(%27=======Close=========%27);%0D%0A%20%20%20%20%20%20%20%20contadorTagsAbertas-=1;%0D%0A%20%20%20%20%20%20%20%20if(contadorTagsAbertas==0)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20//%20console.log(%27Este%20%C3%A9%20ultimo%20close%27);%0D%0A%20%20%20%20%20%20%20%20%20%20geoCursor.close.start%20=%20regexOpenOuClose.lastIndex%20-%20match%5B0%5D.length;%0D%0A%20%20%20%20%20%20%20%20%20%20geoCursor.close.end%20=%20regexOpenOuClose.lastIndex;%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20encontrou=true;%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20//%20console.log(%27start%20index=%20%27%20+(regexOpenOuClose.lastIndex%20-%20match%5B0%5D.length));%0D%0A%20%20%20%20%20%20//%20console.log(%27end%20index=%20%27%20+%20(regexOpenOuClose.lastIndex));%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20//%20console.log(geoCursor);%0D%0A%20%20%20%20return%20geoCursor;%0D%0A%20%20%7D'));eval(decodeURI('Atomic.renderAtomo=function(source,%20Atomo)%20%7B%0D%0A%20%20%20%20//%20console.log(Atomo.key);%0D%0A%20%20%20%20//%20console.log(source);%0D%0A%20%20%20%20var%20geoCursorAtomo%20=%20Atomic.getGeoCursorTag(source,%20Atomo.key);%0D%0A%20%20%20%20if(geoCursorAtomo.open.start==-1)%20%7Breturn%20%7BSource:%20source,%20Acabou:%20true%7D;%7D%0D%0A%0D%0A%20%20%20%20var%20AtomoData%20=%20Atomo.data;%0D%0A%0D%0A%20%20%20%20//atributos%0D%0A%20%20%20%20var%20atributos%20=%20source.slice(geoCursorAtomo.open.start,geoCursorAtomo.open.end);%0D%0A%20%20%20%20var%20customAtributos%20=%20atributos.slice(0,%20atributos.length);%0D%0A%20%20%20%20//%20console.log(customAtributos);%0D%0A%0D%0A%20%20%20%20//props%0D%0A%20%20%20%20//%20var%20regexPropAttr%20=%20new%20RegExp(/props%5C.%5Cw*%5Cs*=%5Cs*(%5C%22)%5Cs*(%5B%5E%5C%22%5D*)/,%20%27g%27);%0D%0A%20%20%20%20var%20regexPropAttr%20=%20new%20RegExp(Atomic.ClientVariables.Props+%27(%5C%5C.%5C%5Cw*%5C%5Cs*=%5C%5Cs*(%5C%5C%22)%5C%5Cs*(%5B%5E%5C%5C%22%5D*))%27,%20%27g%27);%0D%0A%20%20%20%20var%20match;%0D%0A%20%20%20%20var%20campo,valor;%0D%0A%20%20%20%20while(match%20=%20regexPropAttr.exec(atributos))%7B%0D%0A%20%20%20%20%20%20//%20console.log(match);%0D%0A%20%20%20%20%20%20campo%20=%20match%5B0%5D.slice(0,match%5B0%5D.indexOf(%27=%27)).trim();%0D%0A%20%20%20%20%20%20valor%20=%20match%5B0%5D;%0D%0A%20%20%20%20%20%20customAtributos%20=%20customAtributos.replace(valor+%27%22%27,%20%27%27);%20//Apaga%20esse%20props%20dos%20atributos%20para%20que%20eu%20possa%20ter%20um%20customAtributos%20limpo%0D%0A%20%20%20%20%20%20valor%20=%20valor.slice(valor.indexOf(%27%22%27)+1,%20valor.length);%0D%0A%20%20%20%20%20%20AtomoData%20=%20AtomoData.replace(new%20RegExp(%27%7B((%5C%5Cs)*)%27+campo+%27((%5C%5Cs)*)%7D%27,%20%27gi%27),%20valor);%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20//custom%20atributos:%20%20(id,%20class,%20....)%20devem%20ser%20add%20na%20tag%20do%20AtomoData%0D%0A%20%20%20%20customAtributos%20=%20customAtributos.slice(customAtributos.indexOf(%22%20%22),%20customAtributos.length-1);%0D%0A%0D%0A%20%20%20%20//nucleus%0D%0A%20%20%20%20var%20nucleus%20=%20source.slice(geoCursorAtomo.open.end,%20geoCursorAtomo.close.start);%0D%0A%20%20%20%20//%20var%20geoCursorNucleus%20=%20Atomic.getGeoCursorTag(AtomoData,%20Atomic.ClientVariables.Tags.nucleus);%0D%0A%20%20%20%20//%20AtomoData%20=%20AtomoData.slice(0,geoCursorNucleus.open.start)+nucleus+AtomoData.slice(geoCursorNucleus.close.end,AtomoData.length);%0D%0A%20%20%20%20var%20regExpNucleusTag%20=%20new%20RegExp(%27%3C(.)*%27+Atomic.ClientVariables.Nucleus+%27%5B%5E%3E%5D*%27,%20%27gi%27);%0D%0A%20%20%20%20//%20console.log(AtomoData);%0D%0A%20%20%20%20var%20openEndNucleusTag%20=%20-1;%0D%0A%20%20%20%20while(match%20=%20regExpNucleusTag.exec(AtomoData))%20%7B%0D%0A%20%20%20%20%20%20openEndNucleusTag%20=%20regExpNucleusTag.lastIndex+1;%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20//%20console.log(openEndNucleusTag);%0D%0A%20%20%20%20//%20console.log(AtomoData.slice(openEndNucleusTag-10,%20openEndNucleusTag+1));%0D%0A%20%20%20%20AtomoData%20=%20AtomoData.slice(0,openEndNucleusTag)+nucleus+AtomoData.slice(openEndNucleusTag,AtomoData.length);%0D%0A%0D%0A%20%20%20%20//Add%20Atomic.Key%0D%0A%20%20%20%20var%20atomicKey%20=%20%22%20%22+Atomic.ClientVariables.Key+%22=%27%22+Atomo.key+%22%27%22;%0D%0A%0D%0A%20%20%20%20//Add%20Atomic.Id%0D%0A%20%20%20%20var%20atomicId%20=%20Atomo.key+%22_%22+Atomic.Global.atomosRendered.count;%0D%0A%20%20%20%20//%20console.log(%22Atomic.Global.isOnClientSide:%20%22+Atomic.Global.isOnClientSide);%0D%0A%20%20%20%20if(Atomic.Global.isOnClientSide==true)%20%7B%20Atomic.Global.atomosRendered.list.push(%7Bkey:Atomo.key,%20id:atomicId%7D);%20%7D%0D%0A%20%20%20%20atomicId%20=%20%22%20%22+Atomic.ClientVariables.Id+%22=%27%22+atomicId+%22%27%22;%0D%0A%0D%0A%20%20%20%20//Add%20Atomic.Sub%0D%0A%20%20%20%20var%20atomicSub%20=%20%27%27;%0D%0A%20%20%20%20var%20regexSubAttr%20=%20new%20RegExp(Atomic.ClientVariables.Sub+%27(%5C%5Cs*=%5C%5Cs*(%5C%5C%22)%5C%5Cs*(%5B%5E%5C%5C%22%5D*))%27,%20%27g%27);%0D%0A%20%20%20%20while(match%20=%20regexSubAttr.exec(atributos))%7B%0D%0A%20%20%20%20%20%20campo%20=%20match%5B0%5D.slice(0,match%5B0%5D.indexOf(%27=%27)).trim();%0D%0A%20%20%20%20%20%20valor%20=%20match%5B0%5D;%0D%0A%20%20%20%20%20%20atomicSub%20=%20%22%20%22+atomicSub%20+%20match%5B0%5D%20+%20%27%22%27;%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20//%20console.log(atomicSub);%0D%0A%0D%0A%20%20%20%20var%20openEndFirstTagOnAtomoData%20=%20Atomic.getGeoCursorTag(AtomoData,%20%27%5B%5E%3E%5D*%27).open.end%20-%201;%0D%0A%20%20%20%20AtomoData%20=%20AtomoData.slice(0,%20openEndFirstTagOnAtomoData)+customAtributos+atomicKey+atomicId+atomicSub+AtomoData.slice(openEndFirstTagOnAtomoData,%20AtomoData.length);%0D%0A%0D%0A%20%20%20%20Atomic.Global.atomosRendered.count%20=%20Atomic.Global.atomosRendered.count+1;%0D%0A%20%20%20%20//%20console.log(AtomoData);%0D%0A%0D%0A%20%20%20%20AtomoData%20=%20Atomic.render(AtomoData);%0D%0A%20%20%20%20//%20console.log(%27geoCursorNucleus:%20%27+geoCursorNucleus);%0D%0A%20%20%20%20//%20console.log(%27AtomoDataComNucleus:%20%27+AtomoDataComNucleus);%0D%0A%20%20%20%20source%20=%20source.slice(0,geoCursorAtomo.open.start)+AtomoData+source.slice(geoCursorAtomo.close.end,source.length);%0D%0A%0D%0A%20%20%20%20return%20%7BSource:%20source,%20Acabou:%20false%7D;%0D%0A%20%20%7D'));eval(decodeURI('Atomic.replaceExpressao=function(expressao,%20expressaoParaSerReplaced,%20source,%20expressaoIsAFlag)%20%7B%0D%0A%20%20%20%20expressaoIsAFlag%20=%20expressaoIsAFlag%7C%7Cfalse;%0D%0A%20%20%20%20var%20regexTag%20=%20new%20RegExp(%27%3C(.)*%5C%5Cs+%27+expressao+%27(%5C%5Cs*=%5B%5E%3E%5D*)%27,%20%27gi%27);%0D%0A%20%20%20%20//%20console.log(%27expressaoIsAFlag:%27,%20expressaoIsAFlag);%0D%0A%20%20%20%20if(expressaoIsAFlag==true)%20%7B%0D%0A%20%20%20%20%20%20regexTag%20=%20new%20RegExp(%27%3C(.)*%5C%5Cs+%27+expressao+%27(%5B%5E%3E%5D*)%27,%20%27gi%27);%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20//%20console.log(expressao);%0D%0A%20%20%20%20expressao%20=%20expressao.replace(%27.%27,%20%27%5C%5C.%27);%0D%0A%20%20%20%20//%20console.log(expressao);%0D%0A%20%20%20%20var%20regexToReplace%20=%20new%20RegExp(expressao,%20%27gi%27);%0D%0A%20%20%20%20var%20match;%0D%0A%20%20%20%20var%20valor;%0D%0A%20%20%20%20while(match%20=%20regexTag.exec(source))%7B%0D%0A%20%20%20%20%20%20valor%20=%20match%5B0%5D.replace(regexToReplace,%20expressaoParaSerReplaced);%0D%0A%20%20%20%20%20%20//%20console.log(valor);%0D%0A%20%20%20%20%20%20//%20console.log(%22================%22);%0D%0A%20%20%20%20%20%20source%20=%20source.slice(0,%20regexTag.lastIndex%20-%20match%5B0%5D.length)%20+%20valor%20+%20source.slice(regexTag.lastIndex,%20source.length);%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20return%20source;%0D%0A%20%20%7D'));eval(decodeURI('Atomic.loopRender=function(source,%20Atomo)%20%7B%0D%0A%20%20%20%20var%20RetornoRenderAtomo%20=%20Atomic.renderAtomo(source,%20Atomo);%0D%0A%20%20%20%20if(RetornoRenderAtomo.Acabou)%20%7B%0D%0A%20%20%20%20%20%20return%20RetornoRenderAtomo.Source;%0D%0A%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20return%20Atomic.loopRender(RetornoRenderAtomo.Source,%20Atomo);%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D'));eval(decodeURI('Atomic.render=function(source)%20%7B%0D%0A%20%20%20%20Atomic.Atomos.forEach((function(Atomo)%7B%0D%0A%20%20%20%20%20%20source%20=%20Atomic.loopRender(source,%20Atomo);%0D%0A%20%20%20%20%7D).bind(Atomic));%0D%0A%20%20%20%20//%20console.log(source);%0D%0A%20%20%20%20return%20source;%0D%0A%20%20%7D'));eval(decodeURI('Atomic.renderElement=function(domElement)%20%7B%0D%0A%20%20%20%20Atomic.Global.atomosRendered.list%20=%20%5B%5D;%20//limpa%20a%20lista%20de%20atomos%20renderizados%0D%0A%0D%0A%20%20%20%20domElement.innerHTML%20=%20Atomic.render(domElement.innerHTML);%0D%0A%0D%0A%20%20%20%20Atomic.createAtomClass();%0D%0A%20%20%7D'));eval(decodeURI('Atomic.createAtomClass=function()%7B%0D%0A%20%20%20%20Atomic.Global.atomosRendered.list.forEach(function(AtomoRendered)%7B%0D%0A%20%20%20%20%20%20//%20console.log(%22+++++++++++%22,%20AtomoRendered);%0D%0A%20%20%20%20%20%20var%20bAtomFound%20=%20false;%0D%0A%20%20%20%20%20%20var%20atom%20=%20document.querySelector(%27%5B%27+Atomic.ClientVariables.Id+%27=%22%27+AtomoRendered.id+%27%22%5D%27);%0D%0A%20%20%20%20%20%20if(atom==null)%20%7Breturn;%7D%0D%0A%20%20%20%20%20%20for(var%20index=0;%20index%3CAtomic.Atomos.length%20&&%20bAtomFound==false;%20index++)%20%7B%0D%0A%20%20%20%20%20%20%20%20if((AtomoRendered.key%20==%20Atomic.Atomos%5Bindex%5D.key)%20&&%20(Atomic.Atomos%5Bindex%5D.mainClass!=null))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20bAtomFound%20=%20true;%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20atom.Atomic%20=%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20id:%20AtomoRendered.id,%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20main:%20Object.create(new%20Atomic.Atomos%5Bindex%5D.mainClass)%0D%0A%20%20%20%20%20%20%20%20%20%20%7D;%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20/*%20insert%20newFunc%20in%20object%20if%20func%20is%20undefined%20*/%0D%0A%20%20%20%20%20%20%20%20%20%20var%20insertNewFunc=%20function(func,%20name,%20newFunc)%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if(func==undefined)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Object.defineProperty(Object.getPrototypeOf(atom.Atomic.main),%20name,%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value:%20newFunc%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%7D;%0D%0A%20%20%20%20%20%20%20%20%20%20//%20insertNewFunc(atom.Atomic.main.meuID,%20%27meuID%27,%20AtomoRendered.id);%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20insertNewFunc(atom.Atomic.main.getElement,%20%27getElement%27,%20function()%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20atom;%0D%0A%20%20%20%20%20%20%20%20%20%20%7D);%0D%0A%20%20%20%20%20%20%20%20%20%20insertNewFunc(atom.Atomic.main.add,%20%27add%27,%20function(AtomKey,%20props,%20where)%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20Atomic.add(atom,%20AtomKey,%20props,%20where);%0D%0A%20%20%20%20%20%20%20%20%20%20%7D);%0D%0A%20%20%20%20%20%20%20%20%20%20insertNewFunc(atom.Atomic.main.getNucleus,%20%27getNucleus%27,%20function()%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20Atomic.getNucleus(atom);%0D%0A%20%20%20%20%20%20%20%20%20%20%7D);%0D%0A%20%20%20%20%20%20%20%20%20%20insertNewFunc(atom.Atomic.main.getSub,%20%27getSub%27,%20function(subName)%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20Atomic.getSub(atom,%20subName);%0D%0A%20%20%20%20%20%20%20%20%20%20%7D);%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20//%20console.log(atom.Atomic);%0D%0A%20%20%20%20%7D);%0D%0A%20%20%20%20Atomic.notifyAtomOnRender();%0D%0A%20%20%7D'));eval(decodeURI('Atomic.notifyAtomOnRender=function()%7B%0D%0A%20%20%20%20Atomic.Global.atomosRendered.list.forEach(function(AtomoRendered)%7B%0D%0A%20%20%20%20%20%20//%20console.log(%27--------%27+AtomoRendered.id);%0D%0A%20%20%20%20%20%20var%20atom%20=%20document.querySelector(%27%5B%27+Atomic.ClientVariables.Id+%27=%22%27+AtomoRendered.id+%27%22%5D%27);%0D%0A%20%20%20%20%20%20if(atom==null)%20%7Breturn;%7D%0D%0A%20%20%20%20%20%20//%20console.log(%27--------------%27,atom.Atomic);%0D%0A%20%20%20%20%20%20if((atom.Atomic!=undefined)%20&&%20typeof%20atom.Atomic.main.onRender%20==%20%27function%27)%20%7B%0D%0A%20%20%20%20%20%20%20%20atom.Atomic.main.onRender();%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D);%0D%0A%20%20%7D'));eval(decodeURI('Atomic.getAtom=function(AtomKey)%20%7B%0D%0A%20%20%20%20var%20index%20=%20-1;%0D%0A%20%20%20%20for(var%20i=0;%20i%3CAtomic.Atomos.length;%20i++)%7B%0D%0A%20%20%20%20%20%20if(AtomKey==Atomic.Atomos%5Bi%5D.key)%20%7B%0D%0A%20%20%20%20%20%20%20%20index%20=%20i;%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20return%20Atomic.Atomos%5Bindex%5D;%0D%0A%20%20%7D'));eval(decodeURI('Atomic.getSub=function(atomElement,%20subName)%20%7B%0D%0A%20%20%20%20return%20atomElement.querySelector(%27%5B%27+Atomic.ClientVariables.Sub+%27=%22%27+subName+%27%22%5D%27);%0D%0A%20%20%7D'));eval(decodeURI('Atomic.getNucleus=function(atomElement)%20%7B%0D%0A%20%20%20%20return%20document.querySelector(%27%5Bdata-atomic-id=%27+atomElement.getAttribute(%27data-atomic-id%27)+%27%5D%20%3E%20%5B%27+Atomic.ClientVariables.Nucleus+%27%5D%27);%0D%0A%20%20%7D'));eval(decodeURI('Atomic.add=function(atomElement,%20AtomKey,%20props,%20where)%20%7B%0D%0A%20%20%20%20props%20=%20props%20%7C%7C%20%5B%5D;%0D%0A%20%20%20%20where%20=%20where%20%7C%7C%20%22beforeend%22;%0D%0A%0D%0A%20%20%20%20var%20elementoToBeCreate%20=%20document.createElement(AtomKey);%0D%0A%0D%0A%20%20%20%20//add%20props%0D%0A%20%20%20%20props.forEach(function(prop)%7B%0D%0A%20%20%20%20%20%20elementoToBeCreate.setAttribute(Atomic.ClientVariables.Props+%22.%22+prop.key,%20prop.value);%0D%0A%20%20%20%20%7D);%0D%0A%0D%0A%20%20%20%20Atomic.Global.atomosRendered.list%20=%20%5B%5D;%20//limpa%20a%20lista%20de%20atomos%20renderizados%0D%0A%20%20%20%20var%20elementRenderizado%20=%20Atomic.render(elementoToBeCreate.outerHTML);%0D%0A%0D%0A%20%20%20%20var%20nucleusElement%20=%20Atomic.getNucleus(atomElement);%0D%0A%20%20%20%20nucleusElement.insertAdjacentHTML(where,%20elementRenderizado);%0D%0A%0D%0A%20%20%20%20Atomic.createAtomClass();%0D%0A%0D%0A%20%20%20%20var%20key%20=%20atomElement.getAttributeNode(Atomic.ClientVariables.Key).value;%0D%0A%20%20%20%20//notifyAtom%20onAdded%0D%0A%20%20%20%20Atomic.Atomos.forEach(function(Atomo,%20index)%7B%0D%0A%20%20%20%20%20%20if((key%20==%20Atomo.key)%20&&%20(Atomic.Atomos%5Bindex%5D.main!=null)%20&&%20(Atomic.Atomos%5Bindex%5D.main.onAdded!=null))%20%7B%0D%0A%20%20%20%20%20%20%20%20atomElement.Atomic.main.onAdded(document.querySelector(%27%5B%27+Atomic.ClientVariables.Id+%27=%22%27+Atomic.Global.atomosRendered.list%5B0%5D.id+%27%22%5D%27));%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D);%0D%0A%20%20%7D'));eval(decodeURI('Atomic.ligaHotReloadNoClient=function()%7B%0D%0A%20%20%20%20//%20console.log(%27ligaHotReloadNoClient%20disparado%27);%0D%0A%20%20%20%20if(Atomic.WebSocketClient!=null%20&&%20Atomic.WebSocketClient!=undefined)%20%7B%20return;%20%7D%0D%0A%20%20%20%20Atomic.WebSocketClient%20=%20new%20WebSocket(%22ws://%22+Atomic.HotReload.addrs+%22:%22+Atomic.HotReload.port);%0D%0A%20%20%20%20Atomic.WebSocketClient.onmessage%20=%20function(e)%7B%0D%0A%20%20%20%20%20%20console.log(e.data);%0D%0A%20%20%20%20%20%20if(e.data==%22%3Catomicreact.hotreload.RELOAD%3E%22)%7B%0D%0A%20%20%20%20%20%20%20%20location.reload();%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D'));eval(decodeURI('Atomic.renderPageNoClient=function()%20%7B%0D%0A%20%20%20%20window.addEventListener(%22load%22,%20function(event)%20%7B%0D%0A%20%20%20%20%09Atomic.renderElement(document.getElementsByTagName(%27html%27)%5B0%5D);%0D%0A%20%20%20%20%7D);%0D%0A%20%20%7D'));Atomic.ligaHotReloadNoClient();Atomic.renderPageNoClient();