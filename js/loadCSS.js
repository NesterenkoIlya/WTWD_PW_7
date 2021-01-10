(function(w){
	"use strict";
	let loadCSS = function( href, before, media, attributes ){
		let doc = w.document;
		let ss = doc.createElement( "link" );
		let ref;
		if( before ){
			ref = before;
		}
		else {
			let refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
			ref = refs[ refs.length - 1];
		}

		let sheets = doc.styleSheets;
		if( attributes ){
			for( let attributeName in attributes ){
				if( attributes.hasOwnProperty( attributeName ) ){
					ss.setAttribute( attributeName, attributes[attributeName] );
				}
			}
		}
		ss.rel = "stylesheet";
		ss.href = href;
		ss.media = "only x";

		function ready( cb ){
			if( doc.body ){
				return cb();
			}
			setTimeout(function(){
				ready( cb );
			});
		}
		ready( function(){
			ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
		});
		let onloadcssdefined = function( cb ){
			let resolvedHref = ss.href;
			let i = sheets.length;
			while( i-- ){
				if( sheets[ i ].href === resolvedHref ){
					return cb();
				}
			}
			setTimeout(function() {
				onloadcssdefined( cb );
			});
		};

		function loadCB(){
			if( ss.addEventListener ){
				ss.removeEventListener( "load", loadCB );
			}
			ss.media = media || "all";
		}

		if( ss.addEventListener ){
			ss.addEventListener( "load", loadCB);
		}
		ss.onloadcssdefined = onloadcssdefined;
		onloadcssdefined( loadCB );
		return ss;
	};
	if( typeof exports !== "undefined" ){
		exports.loadCSS = loadCSS;
	}
	else {
		w.loadCSS = loadCSS;
	}
}( typeof global !== "undefined" ? global : this ));

