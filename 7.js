const multiple = ( x, y ) => y === 1 ? x + 1 : multiple( x, y - 1 ) + 1;

console.log( multiple( 6, 10 ) );
