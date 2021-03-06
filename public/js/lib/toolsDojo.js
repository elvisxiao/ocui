
var Instance = {}

Instance.destroyByNode = function(node) {
    if(node && node.children && node.children.length) {
    	if(window.dojo && dojo.dijit && dojo.dijit.registry) {
    		var widget = dojo.dijit.registry.byNode(node.children[0]);
	        if (widget) {
	            widget.destroyDescendants();
	            widget.destroyRecursive();
	        }
    	}
    }
}

module.exports = Instance;

