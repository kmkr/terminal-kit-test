// Require the lib, get a working terminal
var term = require( 'terminal-kit' ).terminal ;
term.fullscreen(true);

// The term() function simply output a string to stdout, using current style
// output "Hello world!" in default terminal's colors
term( 'Hello world!\n' ) ;

term.grabInput( { mouse: 'button' } ) ;

function terminate() {
    term.grabInput( false ) ;
    term('Bye');
	setTimeout( function() { process.exit() } , 100 ) ;
}

term.on( 'key' , function( name , matches , data ) {
	console.log( "'key' event:" , name ) ;
	if ( name === 'CTRL_C' ) { terminate() ; }
} ) ;

term.on( 'terminal' , function( name , data ) {
	console.log( "'terminal' event:" , name , data ) ;
} ) ;

// Get some user input
term.magenta( "Enter your name: " ) ;
term.inputField(
	function( error , input ) {
		term.green( "\nYour name is '%s'\n" , input ) ;
	}
) ;