var hello = document.getElementById('helloText');
var typeHello = new Typewriter(hello, {
    loop: true,
    delay: 80   
});


typeHello.typeString("Hello")
    .pauseFor(1000)
    .deleteAll()
    .typeString("សួស្តី")
    .pauseFor(1000)
    .deleteAll()
    .typeString("こんにちは")
    .pauseFor(1000)
    .deleteAll()
    .typeString("สวัสดี")
    .pauseFor(1000)
    .deleteAll()
    .start();