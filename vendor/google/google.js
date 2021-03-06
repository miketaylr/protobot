
/* ------------------------------ Includes && Options ------------------------------ */
var exec = require( 'child_process' ).exec

/* ------------------------------ Google ------------------------------ */
function Google() {
  this.search = function( query, hollaback ) {
    exec("curl -e 'http://gf3.ca/' 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=" + escape( query ) + "'", function ( err, stdout, stderr ) {
      var results = JSON.parse( stdout )[ 'responseData' ][ 'results' ]
      hollaback.call( this, results )
    })
  }
}

/* ------------------------------ Export ------------------------------ */
module.exports = Google
