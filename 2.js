// First
(function () {
    console.log( 5 );
})();

// Second
( ( x, y ) => console.log( 10 ) )();

// Third
( f => f( 5 ) )( x => console.log( x * x ) );
