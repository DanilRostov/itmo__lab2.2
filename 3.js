let rndNum = () => Math.floor( Math.random() * 256 );

( ( r = rndNum(), g = rndNum(), b = rndNum() ) => {
    console.log( 'rgb(' + r + ', ' + g + ', ' + b + ')' );
} )();
