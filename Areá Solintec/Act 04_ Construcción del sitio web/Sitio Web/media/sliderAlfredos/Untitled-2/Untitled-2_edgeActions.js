/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16750, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sphere-155819_6402Copy4}", "click", function(sym, e) {
         
         sym.play("uno");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sphere-155819_6402Copy3}", "click", function(sym, e) {
         sym.play("dos");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sphere-155819_6402Copy9}", "click", function(sym, e) {
         sym.play("tres");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sphere-155819_6402}", "click", function(sym, e) {
         sym.play("cuatro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sphere-155819_6402Copy}", "click", function(sym, e) {
         sym.play("cinco");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sphere-155819_6402Copy2}", "click", function(sym, e) {
         sym.play("seis");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1056160999");