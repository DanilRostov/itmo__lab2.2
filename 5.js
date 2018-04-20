const binding = ( a, b ) => { console.log( 'binding: ' + a ** b ) };
binding.bind( null, 3.14 )( 2 );
binding.bind( null, 3.14 )( 3 );

const currying = x => y => { console.log( 'currying: ' + x ** y ) };
( currying( 2 )( 10 ) );
( currying( 3 )( 2 ) );
