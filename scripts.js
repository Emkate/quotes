$(function(){

    var setOnClick = "";
    var quotesArray = [["Be yourself, everyone else is already taken.","Oscar Wilde"],["So many books, so little time.", "Frank Zappa"],["A room without books is like a body without a soul.", "Marcus Tullius Cicero"],["Be the change that you wish to see in the world.", "Mahatma Gandhi"],["Without music, life would be a mistake.","Friedrich Nietzsche"],["We accept the love we think we deserve.","Stephen Chbosky"],["It is better to be hated for what you are than to be loved for what you are not.","André Gide,"],["It is our choices (...) that show what we truly are, far more than our abilities.","J.K. Rowling"], ["It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.","Maurice Switzer"],["To die will be an awfully big adventure.", "J.M. Barrie"],["Anyone who has never made a mistake has never tried anything new", "Albert Einstein"],["I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.", "Jimi Hendrix"],["And in that moment, I swear we were infinite.", "Stephen Chbosky"],["Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.", "Nicholas Sparks"]];

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var letters2 = '0123456789ABC';
        var color = '#';
        color += letters2[Math.floor(Math.random() * 13)];
        for (var i = 0; i < 5; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getNewQuote(){
        var newColor = getRandomColor();
        var aQuote = $("#quote");
        var anAuthor = $("#author");

        $("body").css({"background-color":newColor});
        $("button").css({"background-color":newColor});
        aQuote.css({"color":newColor});
        anAuthor.css({"color":newColor});


        var number = Math.floor((Math.random()*100+1)%quotesArray.length);

        aQuote.fadeOut(600, function(){
            aQuote.empty();
            aQuote.append("<p>" + quotesArray[number][0] + "</p>").fadeIn(600);
        });

        anAuthor.fadeOut(600, function(){
            anAuthor.empty();
            anAuthor.append("<p>" + quotesArray[number][1] + "</p>").fadeIn(600);
        });


        setOnClick ="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + "\"" + quotesArray[number][0] + "\"" + " " + quotesArray[number][1];
    }

    getNewQuote();

    $("#newQuoteButton").click(function(){
        getNewQuote();
    });

    $("#twitterButton").click(function(){
            window.open(setOnClick, '_blank');
            win.focus();
    });
});